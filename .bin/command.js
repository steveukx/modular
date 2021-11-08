const path = require('path');
const chalk = require('chalk');

module.exports = function (packageName) {
  const tsConfig = require.resolve(path.join(__dirname, '..', 'tsconfig.json'));

  const modularScriptsPath = path.join(
    __dirname,
    '..',
    'packages',
    packageName,
  );

  const nodeModulesPath = path.join(__dirname, '..', 'node_modules');
  const modularNodeModulesPath = path.join(modularScriptsPath, 'node_modules');

  const tsNode = path.join(nodeModulesPath, '.bin', 'ts-node-transpile-only');

  const NODE_PATH = [modularNodeModulesPath, nodeModulesPath].join(
    path.delimiter,
  );

  const execa = require('execa');

  const args = [
    `--project=${tsConfig}`,
    path.join(modularScriptsPath, 'src', 'cli.ts'),
    ...process.argv.slice(2),
  ];

  const command = ['ts-node', ...args];

  console.log(chalk.dim(`$ ${command.join(' ')}`));

  const now = new Date();

  const result = execa.sync(tsNode, args, {
    reject: false,
    stdio: 'inherit',
    env: {
      NODE_PATH,
    },
  });

  const done = new Date();

  console.log(chalk.dim(`$ Done in ${done - now}ms`));

  process.exit(result.exitCode);
};
