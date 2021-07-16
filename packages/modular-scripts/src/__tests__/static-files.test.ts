import execa from 'execa';
import * as fs from 'fs-extra';
import rimraf from 'rimraf';
import tree from 'tree-view-for-tests';
import path from 'path';
import getModularRoot from '../utils/getModularRoot';

const modularRoot = getModularRoot();

function modular(str: string, opts: Record<string, unknown> = {}) {
  return execa('yarnpkg', ['modular', ...str.split(' ')], {
    cwd: modularRoot,
    cleanup: true,
    ...opts,
  });
}

describe('WHEN working with a package with static directories', () => {
  beforeAll(async () => {
    rimraf.sync(path.join(modularRoot, 'dist', 'test-packages-static-files'));

    await modular('build test-packages-static-files', {
      stdio: 'inherit',
    });
  });

  it('THEN can build a package with static files', () => {
    expect(tree(path.join(modularRoot, 'dist', 'test-packages-static-files')))
      .toMatchInlineSnapshot(`
      "test-packages-static-files
      ├─ README.md #1jv3l2q
      ├─ dist-cjs
      │  ├─ test-packages-static-files.cjs.js #1y2lja9
      │  └─ test-packages-static-files.cjs.js.map #1nrziy
      ├─ dist-es
      │  ├─ test-packages-static-files.es.js #3hpj68
      │  └─ test-packages-static-files.es.js.map #dajrfy
      ├─ dist-types
      │  └─ src
      │     └─ index.d.ts #f68aj
      ├─ package.json
      └─ static
         └─ styles.css #h859ix"
    `);
  });

  it('THEN outputs the correct source map', async () => {
    expect(
      await fs.readJson(
        path.join(
          modularRoot,
          'dist',
          'test-packages-static-files',
          'dist-es',
          'test-packages-static-files.es.js.map',
        ),
      ),
    ).toMatchSnapshot();
  });

  it('THEN outputs the correct static file', async () => {
    expect(
      await fs.readFile(
        path.join(
          modularRoot,
          'dist',
          'test-packages-static-files',
          'static',
          'styles.css',
        ),
      ),
    ).toMatchSnapshot();
  });
});
