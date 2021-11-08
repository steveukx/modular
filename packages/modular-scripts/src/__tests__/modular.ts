import * as fs from 'fs-extra';
import * as tmp from 'tmp';
import { promisify } from 'util';
import * as path from 'path';
import execa from 'execa';

import getModularRoot from '../utils/getModularRoot';
import { ModularPackageJson } from '../utils/isModularType';
import { Dependency } from '@schemastore/package';

const mktempd = promisify(tmp.dir);

let cwd: string | undefined;

export const modularCmd = path.join(getModularRoot(), '.bin', 'modular');

beforeAll(async () => {
  cwd = await mktempd();
  console.log(`Using ${cwd}`);

  await execa(modularCmd, ['init', '-y'], {
    cleanup: true,
    cwd,
  });

  const rootPackageJson = (await fs.readJSON(
    path.join(getModularRoot(), 'package.json'),
  )) as ModularPackageJson;
  const dependencies = rootPackageJson.dependencies as Dependency;

  const packageJson = (await fs.readJson(
    path.join(cwd, 'package.json'),
  )) as ModularPackageJson;
  await fs.writeJson(path.join(cwd, 'package.json'), {
    ...packageJson,
    dependencies: {
      react: dependencies.react,
      'react-dom': dependencies['react-dom'],
      typescript: dependencies['typescript'],
    },
  });

  // setup bare basics of a repo
  await execa('yarnpkg', ['--prefer-offline'], {
    cleanup: true,
    cwd,
  });

  await fs.mkdirp(path.join(cwd, 'node_modules', 'modular-scripts'));

  await fs.copyFile(
    path.join(
      getModularRoot(),
      'packages',
      'modular-scripts',
      'modular-app-env.d.ts',
    ),
    path.join(cwd, 'node_modules', 'modular-scripts', 'modular-app-env.d.ts'),
  );
});

afterAll(async () => {
  // await fs.remove(cwd as string);
  cwd = undefined;
});

export function getWorkingDirectory(): string {
  if (cwd) {
    return cwd;
  } else {
    throw new Error('Could not find cwd');
  }
}

export function runModular(
  args: string[],
  env: Record<string, string> = {},
): Promise<execa.ExecaReturnValue> {
  return execa(modularCmd, args, {
    cleanup: true,
    stdio: 'inherit',
    cwd,
    // @ts-ignore
    env,
  });
}
