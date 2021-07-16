// While working on this file, be aware that builds
// could be happening simultaneously across packages, so
// try be 'thread-safe'. No state outside of functions

// shorthand for building every workspace, if you're ever debugging this flow
// rm -rf dist && yarn modular build `ls -m1 packages | sed -e 'H;${x;s/\n/,/g;s/^,//;p;};d'`

import * as path from 'path';
import { paramCase as toParamCase } from 'change-case';
import * as fse from 'fs-extra';
import packlist from 'npm-packlist';

import { getLogger } from './getLogger';
import { getPackageEntryPoints } from './getPackageEntryPoints';
import getPackageMetadata from './getPackageMetadata';
import getModularRoot from '../utils/getModularRoot';
import { makeBundle } from './makeBundle';
import { makeTypings } from './makeTypings';
import getRelativeLocation from '../utils/getRelativeLocation';

const outputDirectory = 'dist';

export async function buildPackage(
  target: string,
  preserveModules = false,
): Promise<void> {
  const modularRoot = getModularRoot();
  const packagePath = await getRelativeLocation(target);
  const publicPackageName = toParamCase(target);
  const { publicPackageJsons } = await getPackageMetadata();

  if (process.cwd() !== modularRoot) {
    throw new Error(
      'This command can only be run from the root of a modular project',
    );
  }

  const logger = getLogger(packagePath);

  // ensure the root build folder is ready
  await fse.mkdirp(path.join(outputDirectory, publicPackageName));

  // Generate the typings for a package first so that we can do type checking and don't waste time bundling otherwise
  const { compilingBin } = await getPackageEntryPoints(packagePath);
  if (!compilingBin) {
    await makeTypings(target, publicPackageName, packagePath);
  }

  // generate the js files now that we know we have a valid package
  await makeBundle(target, publicPackageName, packagePath, preserveModules);

  const filesToPack = await packlist({
    path: path.join(modularRoot, packagePath),
  });
  await Promise.all(
    filesToPack.map(async (relativeFileName) => {
      if (relativeFileName.startsWith('src')) {
        return;
      } else {
        logger.log(`Copying ${relativeFileName}`);
        await fse.mkdirp(
          path.dirname(
            path.join(modularRoot, 'dist', publicPackageName, relativeFileName),
          ),
        );
        await fse.copyFile(
          path.join(modularRoot, packagePath, relativeFileName),
          path.join(modularRoot, 'dist', publicPackageName, relativeFileName),
        );
      }
    }),
  );

  const publicPackageJson = publicPackageJsons[target];
  await fse.writeJSON(
    path.join(outputDirectory, publicPackageName, 'package.json'),
    publicPackageJson,
    {
      spaces: 2,
    },
  );

  /// and... that's it
  logger.log('finished');
}
