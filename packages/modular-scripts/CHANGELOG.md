# modular-scripts

## 2.2.0

### Minor Changes

- [#1108](https://github.com/jpmorganchase/modular/pull/1108)
  [`a4c0648`](https://github.com/jpmorganchase/modular/commit/a4c0648bfa4fe08d21d69ae18a85eff8b9ea5b74)
  Thanks [@dependabot](https://github.com/apps/dependabot)! - Bump esbuild from
  0.13.14 to 0.14.0

* [#1142](https://github.com/jpmorganchase/modular/pull/1142)
  [`5e00a3b`](https://github.com/jpmorganchase/modular/commit/5e00a3b6240efb0b6d9a25b7f896513814affa94)
  Thanks [@LukeSheard](https://github.com/LukeSheard)! - Upgrade to
  webpack-dev-server 4.

- [#1146](https://github.com/jpmorganchase/modular/pull/1146)
  [`073fbb7`](https://github.com/jpmorganchase/modular/commit/073fbb7ee0f3866016429f55a3be2c359e80457e)
  Thanks [@dependabot](https://github.com/apps/dependabot)! - Bump @svgr/core
  from 5.5.0 to 6.1.1

* [#1103](https://github.com/jpmorganchase/modular/pull/1103)
  [`7b2df4b`](https://github.com/jpmorganchase/modular/commit/7b2df4b5f1b822e943c6a9d9a36b67eff1ece641)
  Thanks [@cristiano-belloni](https://github.com/cristiano-belloni)! - Web
  Worker support and docs for esbuild.

- [#1094](https://github.com/jpmorganchase/modular/pull/1094)
  [`7ae50b3`](https://github.com/jpmorganchase/modular/commit/7ae50b32cdf4da21ad487295dea2448a0d0e0f0c)
  Thanks [@LukeSheard](https://github.com/LukeSheard)! - Implement
  ModuleScopePlugin equivalent for esbuild applications.

* [#1113](https://github.com/jpmorganchase/modular/pull/1113)
  [`ee44098`](https://github.com/jpmorganchase/modular/commit/ee44098b3c838faae080363c15ec140a4bfafa3d)
  Thanks [@LukeSheard](https://github.com/LukeSheard)! - Output file structure
  equivalent to webpack for esbuild files `/static/(js|css)/*`.

- [#1154](https://github.com/jpmorganchase/modular/pull/1154)
  [`b4b438c`](https://github.com/jpmorganchase/modular/commit/b4b438ce25c367a0e50f1131dfda375361548c61)
  Thanks [@LukeSheard](https://github.com/LukeSheard)! - Bump `tsconfig.json`
  value for `target` from `es5` to `es2106`.

* [#1152](https://github.com/jpmorganchase/modular/pull/1152)
  [`5c05494`](https://github.com/jpmorganchase/modular/commit/5c05494072a7109c73efa923008563d059c4c707)
  Thanks [@LukeSheard](https://github.com/LukeSheard)! - Remove service worker
  support for applications as we are focussed on client application frameworks.

- [#1113](https://github.com/jpmorganchase/modular/pull/1113)
  [`ee44098`](https://github.com/jpmorganchase/modular/commit/ee44098b3c838faae080363c15ec140a4bfafa3d)
  Thanks [@LukeSheard](https://github.com/LukeSheard)! - Improve source map
  asset paths to be relative to the modular root instead of application root.

### Patch Changes

- [#1099](https://github.com/jpmorganchase/modular/pull/1099)
  [`71a31c6`](https://github.com/jpmorganchase/modular/commit/71a31c6043183361b07f4eb7c645ab4c0eae9613)
  Thanks [@cristiano-belloni](https://github.com/cristiano-belloni)! - Fix
  esbuild start hanging when ctrl-c is pressed to terminate it, due to
  oustanding ws connection with the browser.

* [#1096](https://github.com/jpmorganchase/modular/pull/1096)
  [`7b8e03f`](https://github.com/jpmorganchase/modular/commit/7b8e03f8935a16e7197e180d1c402c3cd3284e33)
  Thanks [@dependabot](https://github.com/apps/dependabot)! - Bump postcss from
  8.3.11 to 8.4.1

- [#1085](https://github.com/jpmorganchase/modular/pull/1085)
  [`ffc836e`](https://github.com/jpmorganchase/modular/commit/ffc836e6d2d58a10d16344c5bbb070879fa46771)
  Thanks [@dependabot](https://github.com/apps/dependabot)! - Bump rollup from
  2.60.0 to 2.60.1

* [#1151](https://github.com/jpmorganchase/modular/pull/1151)
  [`d2b996b`](https://github.com/jpmorganchase/modular/commit/d2b996b23ee919a831d308c4ec09c39087a89235)
  Thanks [@LukeSheard](https://github.com/LukeSheard)! - Replace
  `babel-code-frame` with newer `@babel/code-frame` package.

- [#1082](https://github.com/jpmorganchase/modular/pull/1082)
  [`fa52a80`](https://github.com/jpmorganchase/modular/commit/fa52a80a251056cd04d863c49c13cf3f1875fe99)
  Thanks [@cristiano-belloni](https://github.com/cristiano-belloni)! - - Enable
  CLI stack trace and build / runtime `react-error-overlay` on browser page in
  esbuild mode.
  - Locally serve sourcemaps with a middleware to correct
    https://github.com/evanw/esbuild/pull/1234.

* [#1080](https://github.com/jpmorganchase/modular/pull/1080)
  [`4be2335`](https://github.com/jpmorganchase/modular/commit/4be2335a16297bef4ec84fa39422799b4c1a71d1)
  Thanks [@cristiano-belloni](https://github.com/cristiano-belloni)! - Fix
  `modular start` in ESBuild mode to reload local preview when code changes.

- [#1083](https://github.com/jpmorganchase/modular/pull/1083)
  [`dc462f6`](https://github.com/jpmorganchase/modular/commit/dc462f6ef12769240fc5310af41c1f2ea1cfdd86)
  Thanks [@dependabot](https://github.com/apps/dependabot)! - Bump
  rollup-plugin-postcss from 4.0.1 to 4.0.2

* [#1113](https://github.com/jpmorganchase/modular/pull/1113)
  [`ee44098`](https://github.com/jpmorganchase/modular/commit/ee44098b3c838faae080363c15ec140a4bfafa3d)
  Thanks [@LukeSheard](https://github.com/LukeSheard)! - Reduced number of
  plugin passes required to generate SVGs using SVGR in esbuild output.

- [#1078](https://github.com/jpmorganchase/modular/pull/1078)
  [`6764fe6`](https://github.com/jpmorganchase/modular/commit/6764fe68a7f61a23cc95a93fa525fec130cc330d)
  Thanks [@dependabot](https://github.com/apps/dependabot)! - Bump
  source-map-support from 0.5.20 to 0.5.21

* [#1113](https://github.com/jpmorganchase/modular/pull/1113)
  [`ee44098`](https://github.com/jpmorganchase/modular/commit/ee44098b3c838faae080363c15ec140a4bfafa3d)
  Thanks [@LukeSheard](https://github.com/LukeSheard)! - Write files in memory
  when running an esbuild server to fix issues with file paths outside of the
  modular root.

- [#1148](https://github.com/jpmorganchase/modular/pull/1148)
  [`1deddf3`](https://github.com/jpmorganchase/modular/commit/1deddf3a5207e90e845a69b7d157276191bc4965)
  Thanks [@dependabot](https://github.com/apps/dependabot)! - Bump prettier from
  2.4.0 to 2.5.1

* [#1072](https://github.com/jpmorganchase/modular/pull/1072)
  [`c6c418a`](https://github.com/jpmorganchase/modular/commit/c6c418a73befcb395f6e036402bfc75c0d7fd279)
  Thanks [@dependabot](https://github.com/apps/dependabot)! - Bump
  postcss-preset-env from 7.0.0 to 7.0.1

- [#1126](https://github.com/jpmorganchase/modular/pull/1126)
  [`11de5fd`](https://github.com/jpmorganchase/modular/commit/11de5fd697e7359606f95395c7fe2cb6961906a7)
  Thanks [@dependabot](https://github.com/apps/dependabot)! - Bump esbuild from
  0.14.0 to 0.14.1

* [#1124](https://github.com/jpmorganchase/modular/pull/1124)
  [`1a26b8f`](https://github.com/jpmorganchase/modular/commit/1a26b8ffe7b13904661de6a4420d59e302c1c3ab)
  Thanks [@dependabot](https://github.com/apps/dependabot)! - Bump rollup from
  2.60.1 to 2.60.2

- [#1147](https://github.com/jpmorganchase/modular/pull/1147)
  [`3303eb4`](https://github.com/jpmorganchase/modular/commit/3303eb47cf00afb2c6deadb4b77bd162b4e69160)
  Thanks [@dependabot](https://github.com/apps/dependabot)! - Bump esbuild from
  0.14.1 to 0.14.2

* [#1098](https://github.com/jpmorganchase/modular/pull/1098)
  [`f6a7d8d`](https://github.com/jpmorganchase/modular/commit/f6a7d8da63a38e4ae4b0fbdb6947f6bb8b808933)
  Thanks [@cristiano-belloni](https://github.com/cristiano-belloni)! - Open IDE
  from React Error Overlay page links

- [#1110](https://github.com/jpmorganchase/modular/pull/1110)
  [`78e0aa8`](https://github.com/jpmorganchase/modular/commit/78e0aa8216d3ca3d9d1572369fb649bbbb418580)
  Thanks [@dependabot](https://github.com/apps/dependabot)! - Bump postcss from
  8.4.1 to 8.4.4

## 2.1.2

### Patch Changes

- [#1060](https://github.com/jpmorganchase/modular/pull/1060)
  [`e525436`](https://github.com/jpmorganchase/modular/commit/e525436f7d451f5bc645997ad6a380acf32f9fac)
  Thanks [@cristiano-belloni](https://github.com/cristiano-belloni)! - - Root
  yarn start/build aliases modular start/build in a CMRA repo
  - If no argument given to `yarn / modular start`, provide the user with an
    interactive selection

* [#1033](https://github.com/jpmorganchase/modular/pull/1033)
  [`d9f42fe`](https://github.com/jpmorganchase/modular/commit/d9f42fea338b0bf70968e4690bf2b5aa2ba108ff)
  Thanks [@steveukx](https://github.com/steveukx)! - Add extraneous dependencies
  and add lint rule to ensure dependencies always added

- [#1069](https://github.com/jpmorganchase/modular/pull/1069)
  [`6cb56cc`](https://github.com/jpmorganchase/modular/commit/6cb56ccccbd643fae2f400714d0e90646b125ee3)
  Thanks [@LukeSheard](https://github.com/LukeSheard)! - Fix bug with
  --watchAll=true as a default when running modular tests

* [#1068](https://github.com/jpmorganchase/modular/pull/1068)
  [`c13d5a6`](https://github.com/jpmorganchase/modular/commit/c13d5a66ca9c79845e7784dd6ff53198b10f8a65)
  Thanks [@LukeSheard](https://github.com/LukeSheard)! - Fix for command
  environment setup

## 2.1.1

### Patch Changes

- [#1054](https://github.com/jpmorganchase/modular/pull/1054)
  [`622e5a2`](https://github.com/jpmorganchase/modular/commit/622e5a25e65a23a1cdf9051f392609580fa2e713)
  Thanks [@dependabot](https://github.com/apps/dependabot)! - Bump browserslist
  from 4.18.0 to 4.18.1

* [#1055](https://github.com/jpmorganchase/modular/pull/1055)
  [`fc096cc`](https://github.com/jpmorganchase/modular/commit/fc096cc6ab603640bbfc6ed1fa4e6fc0aace260b)
  Thanks [@cristiano-belloni](https://github.com/cristiano-belloni)! - Fix
  runtime entry point check to exclude sourcemap files (#1044)

- [#1057](https://github.com/jpmorganchase/modular/pull/1057)
  [`4c5c10c`](https://github.com/jpmorganchase/modular/commit/4c5c10c1d3e13b7a4dc25a8a4ee13c9fafd8eca0)
  Thanks [@dependabot](https://github.com/apps/dependabot)! - Bump esbuild from
  0.13.13 to 0.13.14

* [#1058](https://github.com/jpmorganchase/modular/pull/1058)
  [`9b1d1b5`](https://github.com/jpmorganchase/modular/commit/9b1d1b58559d33c47b77d6663656b84b16b95537)
  Thanks [@dependabot](https://github.com/apps/dependabot)! - Bump
  @babel/preset-env from 7.16.0 to 7.16.4

- [#1047](https://github.com/jpmorganchase/modular/pull/1047)
  [`c182f56`](https://github.com/jpmorganchase/modular/commit/c182f568ff8a06bcfa6ad27c781b107d0a39afd4)
  Thanks [@dependabot](https://github.com/apps/dependabot)! - Bump browserslist
  from 4.17.4 to 4.18.0

* [#1046](https://github.com/jpmorganchase/modular/pull/1046)
  [`dc3ad18`](https://github.com/jpmorganchase/modular/commit/dc3ad180a19364e06476d23d6ecceed19a00ee3f)
  Thanks [@dependabot](https://github.com/apps/dependabot)! - Bump rollup from
  2.58.0 to 2.60.0

- [#1055](https://github.com/jpmorganchase/modular/pull/1055)
  [`fc096cc`](https://github.com/jpmorganchase/modular/commit/fc096cc6ab603640bbfc6ed1fa4e6fc0aace260b)
  Thanks [@cristiano-belloni](https://github.com/cristiano-belloni)! - Fix
  "modular start" build failure messaging when a browser version is not
  supported in esbuild mode. Improve messaging around a "modular start failure"
  (#1050)

* [#1056](https://github.com/jpmorganchase/modular/pull/1056)
  [`c6891df`](https://github.com/jpmorganchase/modular/commit/c6891df30e9ddef59b82bc1c22a9d1673b63f86d)
  Thanks [@dependabot](https://github.com/apps/dependabot)! - Bump
  postcss-preset-env from 6.7.0 to 7.0.0

## 2.1.0

### Minor Changes

- [#1026](https://github.com/jpmorganchase/modular/pull/1026)
  [`a7b15f7`](https://github.com/jpmorganchase/modular/commit/a7b15f7b843064edad7b0afec2c59df1e56a3138)
  Thanks [@cristiano-belloni](https://github.com/cristiano-belloni)! - Allow the
  `--help` and `--version` flags and the `init`, `help` and `convert` commands
  to work without necessarily being run inside a modular directory.

* [#1025](https://github.com/jpmorganchase/modular/pull/1025)
  [`f30f7f4`](https://github.com/jpmorganchase/modular/commit/f30f7f49b0d25859e211e725aa66e2177753f00f)
  Thanks [@cristiano-belloni](https://github.com/cristiano-belloni)! - Suppress
  Yarn warnings by default when the `verbose` flag is not specified. This
  changes the screen output of `create-modular-react-app` and `modular add`.

### Patch Changes

- [#1038](https://github.com/jpmorganchase/modular/pull/1038)
  [`f7fd2e0`](https://github.com/jpmorganchase/modular/commit/f7fd2e045866a851803cb5ad9d6b3389b00335f6)
  Thanks [@LukeSheard](https://github.com/LukeSheard)! - Add support for loading
  .woff font files.

* [#1017](https://github.com/jpmorganchase/modular/pull/1017)
  [`d5ec923`](https://github.com/jpmorganchase/modular/commit/d5ec923a76334b3087c2190542461ecd2a42db65)
  Thanks [@LukeSheard](https://github.com/LukeSheard)! - Upgrade
  optimize-css-assets-webpack-plugin 6.0.1

- [#1039](https://github.com/jpmorganchase/modular/pull/1039)
  [`c83e180`](https://github.com/jpmorganchase/modular/commit/c83e1801f6947b09656bb9c43c163a499104cf06)
  Thanks [@LukeSheard](https://github.com/LukeSheard)! - Add missing
  dependencies required for esbuild-scripts.

* [#1032](https://github.com/jpmorganchase/modular/pull/1032)
  [`e7e3dee`](https://github.com/jpmorganchase/modular/commit/e7e3dee120276b10ce86c854830ad11b23bbe6c7)
  Thanks [@joshwooding](https://github.com/joshwooding)! - Export
  `tsconfig.json`

- [#1022](https://github.com/jpmorganchase/modular/pull/1022)
  [`d670354`](https://github.com/jpmorganchase/modular/commit/d670354b081a2abd7533d1561afb5085b7769935)
  Thanks [@steveukx](https://github.com/steveukx)! - Use non-zero exit codes to
  determine child process failures.

* [#1030](https://github.com/jpmorganchase/modular/pull/1030)
  [`f7de18e`](https://github.com/jpmorganchase/modular/commit/f7de18ef6f949986f66ff36319bd2ef7eb5f71c8)
  Thanks [@dependabot](https://github.com/apps/dependabot)! - Bump esbuild from
  0.13.8 to 0.13.13

## 2.0.0

### Major Changes

- [#609](https://github.com/jpmorganchase/modular/pull/609)
  [`be2d35e`](https://github.com/jpmorganchase/modular/commit/be2d35e9b12a63783bee35a4cae1d3557d64b3ac)
  Thanks [@LukeSheard](https://github.com/LukeSheard)! - Remove compiling
  binaries from "bin" field in package.json.

* [#918](https://github.com/jpmorganchase/modular/pull/918)
  [`9d8c2f6`](https://github.com/jpmorganchase/modular/commit/9d8c2f62c3db319feac877f526fe37a46dfa8617)
  Thanks [@LukeSheard](https://github.com/LukeSheard)! - Remove programatic API.

- [#908](https://github.com/jpmorganchase/modular/pull/908)
  [`226ad45`](https://github.com/jpmorganchase/modular/commit/226ad45251ab1955bd955fac97407e263af9de76)
  Thanks [@LukeSheard](https://github.com/LukeSheard)! - Add exports fields to
  all packages.

### Minor Changes

- [#986](https://github.com/jpmorganchase/modular/pull/986)
  [`5a4c8e7`](https://github.com/jpmorganchase/modular/commit/5a4c8e7325e46565757669ae567c954c8b4885f5)
  Thanks [@LukeSheard](https://github.com/LukeSheard)! - Parity of esbuild size
  logging.

* [#1004](https://github.com/jpmorganchase/modular/pull/1004)
  [`5a0b10f`](https://github.com/jpmorganchase/modular/commit/5a0b10fd45be2478cb62e2a6a250fc691bf2b059)
  Thanks [@LukeSheard](https://github.com/LukeSheard)! - Add support-map-support
  for easier user debugging if there is an error.

### Patch Changes

- [#1001](https://github.com/jpmorganchase/modular/pull/1001)
  [`f53384f`](https://github.com/jpmorganchase/modular/commit/f53384f41a17f960d27d1c71c448786a39df5f15)
  Thanks [@dependabot](https://github.com/apps/dependabot)! - Bump
  @babel/preset-env from 7.15.8 to 7.16.0

* [#995](https://github.com/jpmorganchase/modular/pull/995)
  [`d62f380`](https://github.com/jpmorganchase/modular/commit/d62f380d2870f1989b72547f29feb8b366b0012d)
  Thanks [@dependabot](https://github.com/apps/dependabot)! - Bump
  @babel/preset-typescript from 7.15.0 to 7.16.0

- [#992](https://github.com/jpmorganchase/modular/pull/992)
  [`df09756`](https://github.com/jpmorganchase/modular/commit/df0975699605a208abc769e2fd2b0c39a2dd520d)
  Thanks [@dependabot](https://github.com/apps/dependabot)! - Bump
  @babel/preset-react from 7.14.5 to 7.16.0

* [#999](https://github.com/jpmorganchase/modular/pull/999)
  [`ec78345`](https://github.com/jpmorganchase/modular/commit/ec78345b280733336deac62009d7d5060cc934b0)
  Thanks [@dependabot](https://github.com/apps/dependabot)! - Bump
  @babel/plugin-proposal-class-properties from 7.14.5 to 7.16.0

- [#1000](https://github.com/jpmorganchase/modular/pull/1000)
  [`3799d67`](https://github.com/jpmorganchase/modular/commit/3799d678870c6185949b59b8cb84a980fc281053)
  Thanks [@dependabot](https://github.com/apps/dependabot)! - Bump
  @babel/code-frame from 7.15.8 to 7.16.0

* [#990](https://github.com/jpmorganchase/modular/pull/990)
  [`8ae4bb4`](https://github.com/jpmorganchase/modular/commit/8ae4bb468d0774b1fdab4122d5d86b0e86fb3f9b)
  Thanks [@LukeSheard](https://github.com/LukeSheard)! - Fix bug where async
  imports in packages would mean that builds would fail to due not found in
  chunk validations.

- [#989](https://github.com/jpmorganchase/modular/pull/989)
  [`2f0bd5b`](https://github.com/jpmorganchase/modular/commit/2f0bd5b3b091412c9dafb9a32f547ea5413db0a5)
  Thanks [@LukeSheard](https://github.com/LukeSheard)! - Remove setupEnv when
  running tests

## 1.6.0

### Minor Changes

- [#963](https://github.com/jpmorganchase/modular/pull/963)
  [`e44284a`](https://github.com/jpmorganchase/modular/commit/e44284a51ebf9038270d78fb339d45de58cb8254)
  Thanks [@joshwooding](https://github.com/joshwooding)! - Support svg urls in
  css files

### Patch Changes

- [#952](https://github.com/jpmorganchase/modular/pull/952)
  [`ae85dc8`](https://github.com/jpmorganchase/modular/commit/ae85dc87bf5ecd2aed3ab2976a1abce71d890392)
  Thanks [@joshwooding](https://github.com/joshwooding)! - Fix invalid
  package.json main and module paths in library builds

## 1.5.0

### Minor Changes

- [#922](https://github.com/jpmorganchase/modular/pull/922)
  [`8e94a2f`](https://github.com/jpmorganchase/modular/commit/8e94a2f7ff955862deec74db37bdd13e97671d25)
  Thanks [@LukeSheard](https://github.com/LukeSheard)! - Implement autofixers
  for browserslist setup as part of `modular check` via a `--fix` argument.

### Patch Changes

- [#932](https://github.com/jpmorganchase/modular/pull/932)
  [`3d274a8`](https://github.com/jpmorganchase/modular/commit/3d274a8ceedf55fd002c43837ec06982442b798f)
  Thanks [@dependabot](https://github.com/apps/dependabot)! - Bump esbuild from
  0.13.6 to 0.13.8

* [#945](https://github.com/jpmorganchase/modular/pull/945)
  [`60f0e29`](https://github.com/jpmorganchase/modular/commit/60f0e2920e981abb6b4222bbfe07c6dd12451136)
  Thanks [@dependabot](https://github.com/apps/dependabot)! - Bump
  @rollup/plugin-commonjs from 21.0.0 to 21.0.1

- [#942](https://github.com/jpmorganchase/modular/pull/942)
  [`d8335b2`](https://github.com/jpmorganchase/modular/commit/d8335b2821666225751315e61f33245965eb638b)
  Thanks [@dependabot](https://github.com/apps/dependabot)! - Bump
  @rollup/plugin-node-resolve from 13.0.5 to 13.0.6

* [#923](https://github.com/jpmorganchase/modular/pull/923)
  [`eacf4bc`](https://github.com/jpmorganchase/modular/commit/eacf4bc545b4616e088ff37a81a65f608214778b)
  Thanks [@LukeSheard](https://github.com/LukeSheard)! - Fix for defaultbrowser
  lists to handle syntax which is not supported in webpack from esbuild.

## 1.4.1

### Patch Changes

- [#917](https://github.com/jpmorganchase/modular/pull/917)
  [`87e589a`](https://github.com/jpmorganchase/modular/commit/87e589a75613f1b398f0601af4eaab0c9a668642)
  Thanks [@dependabot](https://github.com/apps/dependabot)! - Bump esbuild from
  0.13.4 to 0.13.6

* [#911](https://github.com/jpmorganchase/modular/pull/911)
  [`a7ef8d8`](https://github.com/jpmorganchase/modular/commit/a7ef8d8e77e056cd1b545a80c4a1c7b8a9c9d0f8)
  Thanks [@dependabot](https://github.com/apps/dependabot)! - Bump browserslist
  from 4.17.3 to 4.17.4

- [#912](https://github.com/jpmorganchase/modular/pull/912)
  [`06326ba`](https://github.com/jpmorganchase/modular/commit/06326ba4d3777b872cb4dad56661c6e741b9aa87)
  Thanks [@dependabot](https://github.com/apps/dependabot)! - Bump esbuild from
  0.13.4 to 0.13.5

## 1.4.0

### Minor Changes

- f496a72: Add support for .ttf files to esbuild build
- e55b4f9: Browserlist cross-compatibility between webpack and esbuild.

### Patch Changes

- c825efb: Bump jest-runner-eslint from 0.11.1 to 1.0.0

## 1.3.4

### Patch Changes

- 812546b: Bump prompts from 2.4.1 to 2.4.2
- 2747769: Bump jest-runner-eslint from 0.10.1 to 0.11.1
- 9a85c7a: Bump browserslist from 4.17.0 to 4.17.3
- 7caa5e6: Bump @rollup/plugin-node-resolve from 13.0.4 to 13.0.5
- 860c9cd: Bump esbuild-loader from 2.15.1 to 2.16.0
- 79b8de1: Bump rollup from 2.56.3 to 2.58.0
- 53f53a8: Bump jest-watch-typeahead from 0.6.4 to 0.6.5
- c24b187: Bump postcss from 8.3.6 to 8.3.9
- 542f4b6: Bump @babel/preset-env from 7.15.6 to 7.15.8
- a416334: Bump @rollup/plugin-commonjs from 20.0.0 to 21.0.0
- 64bbb74: Bump open from 8.2.1 to 8.3.0
- a0b5a84: Bump @babel/code-frame from 7.14.5 to 7.15.8
- e508d7e: Bump react-native-web from 0.17.1 to 0.17.5
- 195bac7: Bump @types/react 17.0.27 to 17.0.28

## 1.3.3

### Patch Changes

- 3b5f86a: Remove react-refresh given we don't use babel anymore for the plugin.
- ef2ea2a: Simplify build script for webpack.
- ef2ea2a: Set "global" to be "window" when building with esbuild to ensure
  compatibility with NPM packages.
- babcbbd: Bump esbuild from 0.12.28 to 0.13.4
- 375bf8f: Remove references to fs/promises and add a snapshot for esbuild to
  maintain compatibility

## 1.3.2

### Patch Changes

- f6377a7: Fix release issue due to tsx file

## 1.3.1

### Patch Changes

- de71866: Fix bug where jest-cli can not get hoisted and available for modular.
- 6b1d627: Bump jest-cli from 26.6.0 to 26.6.3
- 6b1d627: Bump jest-circus from 26.6.0 to 26.6.3
- 6b1d627: Bump jest from 26.6.0 to 26.6.3

## 1.3.0

### Minor Changes

- 2dab338: Add unstable esbuild-scripts implementation via
  `process.env.USE_MODULAR_ESBUILD`.

### Patch Changes

- 7e09ccf: Bump esbuild from 0.12.27 to 0.12.28

## 1.2.5

### Patch Changes

- cfbe3b4: Fix issue with node shebang in 1.2.4

## 1.2.4

### Patch Changes

- 86bd507: Bump esbuild from 0.12.26 to 0.12.27
- 6dc551a: Bump semver-regex from 3.0.0 to 3.1.3
- 52b9c67: Bump esbuild from 0.12.25 to 0.12.26
- 265a99d: Bump @babel/preset-env from 7.15.4 to 7.15.6
- bc0a6c4: Bump filesize from 8.0.0 to 8.0.2
- a42c856: Support project configuration via root `.env` files as well as
  workspace based files.
- 0037835: Bump commander from 8.1.0 to 8.2.0
- d83245f: Bump filesize from 8.0.2 to 8.0.3
- d1008e9: Fix issue where subst file systems on windows would cause a mismatch
  in modular root and process.cwd() results.

## 1.2.3

### Patch Changes

- 1951495: fix `modular test` exiting with exit code 0 when tests fail
- 9205a63: Bump esbuild from 0.12.23 to 0.12.24
- 94bf265: Bump browserslist from 4.16.8 to 4.17.0
- 95fde2a: Bump esbuild from 0.12.24 to 0.12.25
- 8f822d2: Bump @babel/preset-env from 7.15.0 to 7.15.4
- ad000da: Bump esbuild from 0.12.22 to 0.12.23

## 1.2.2

### Patch Changes

- 649ed4f: Bump @rollup/plugin-commonjs from 19.0.2 to 20.0.0
- 290ee5f: Bump filesize from 7.0.0 to 8.0.0
- 5653a7d: Bump @babel/preset-env from 7.14.8 to 7.15.0
- 06aa0d5: Bump @babel/preset-typescript from 7.14.5 to 7.15.0
- 9c2ca01: Bump npm-packlist from 2.2.2 to 3.0.0
- bbf9b10: Bump browserslist from 4.16.6 to 4.16.8

## 1.2.1

### Patch Changes

- 6d01728: Bump esbuild from 0.12.15 to 0.12.22
- deb2f5c: Bump @babel/core from 7.14.8 to 7.15.0
- 9046031: Modular lint should not check for diffed files if regex is passed in.
  If there are no files that meet the extension criteria (ts, tsx, js, jsx),
  then end the lint.
- 8eb370b: Fix false positive modular project root error on Windows.
- 4a8a40c: Uses the param case version of the targeted app of `modular port` and
  `modular convert` to create the folder in `packages` directory. Ensures
  uniformity between all commands when creating new workspaces in the repo.

  `modular port` will check to confirm that there is a `package.json` file in
  the targeted react-app directory before proceeding with the port. The
  package.json holds key information, such as `name`, `dependencies`,
  `devDependencies`, and `browserslist`, that modular uses to create and resolve
  the new app workspace.

- d6a13db: Bump rollup-plugin-postcss from 4.0.0 to 4.0.1
- cea0cc9: Bump esbuild-loader from 2.13.0 to 2.13.1
- 1e1777a: Bump eslint from 7.31.0 to 7.32.0
- 01a3e3d: Bump esbuild-loader from 2.13.1 to 2.15.1
- e85a2d3: Bump chalk from 4.1.1 to 4.1.2

## 1.2.0

### Minor Changes

- 89574bc: Added `modular lint` command which tests diffed files against eslint
  and reports on passing and failing files, set to not tolerate any warnings and
  cache results.

### Patch Changes

- f8b03b2: Bump rollup from 2.53.2 to 2.53.3
- 2900ab7: Bump @rollup/plugin-node-resolve from 13.0.2 to 13.0.4
- 5dc54a7: Add eslint-config-modular-app as a dependency when we remove
  react-scripts during `modular convert` to maintain eslint functionality
- 805edb0: Bump commander from 8.0.0 to 8.1.0
- b00cddc: Bump @types/semver from 7.3.7 to 7.3.8
- 459fc35: Bump @rollup/plugin-commonjs from 19.0.1 to 19.0.2
- 4902595: Give CLI more control of when to exit the process when handling
  failures
- 87d7d2a: Bump postcss from 8.3.5 to 8.3.6
- f3b4dba: Ensure that errors from verifyPackageTree are surfaced and ensure
  esbuild is at the same version as modular-scripts.
- c2e0581: Build packages directly into the `dist` directory instead of copying
  a packed tarbull.
- 32ca75b: Bump @babel/core from 7.14.6 to 7.14.8
- 1b8ba25: Bump rollup from 2.53.3 to 2.54.0

## 1.1.0

### Minor Changes

- 6c14b96: Default `--preserve-modules` to `true` when building packages to
  enable `export` field in `package.json` files.
- 21efc22: Disable typechecking for modular start, test, build commands in CI
  environments
- f049ab9: Modular port takes a relative path to a react app from modular root
  and ports the source code over as a modular app in the current modular
  packages workspace
- 21efc22: Added `modular typecheck` command to programatically type check the
  project
- 6c14b96: Add `--private` argument for building packages marked `private: true`
  in their `package.json`

### Patch Changes

- 5193d4b: Bump @rollup/plugin-commonjs from 19.0.0 to 19.0.1
- 3ed40d4: Bump open from 7.4.2 to 8.2.1
- 4098979: Expose react-scripts internally through modular-scripts. Improve
  performance of app builds by directly building into the output dist directory
- 9ea9c28: Bump gzip-size from 5.1.1 to 6.0.0
- 2af3068: Remove files from **tests** having typings generated for them for
  package builds.
- 6c14b96: Fix bug where typings were generated relative to the package
  directory and not the `src` directory.
- 6e626e2: Bump @babel/code-frame from 7.10.4 to 7.14.5
- cb4ebb7: Bump @babel/preset-env from 7.14.7 to 7.14.8
- 8a1b5fa: Bump filesize from 6.1.0 to 7.0.0
- 152d59d: Add required dependencies and `file` in
  `modular-scripts/package.json`
- 8b75851: Bump rollup from 2.52.8 to 2.53.1
- 0958996: Bump @rollup/plugin-node-resolve from 13.0.0 to 13.0.2
- f560685: Close dev-server when running `start` in CI.
- b03ddb2: Bump browserslist from 4.14.2 to 4.16.6

## 1.0.1

### Patch Changes

- 613678d: Fix `modular check` to support directories which start with the same
  names

## 1.0.0

### Major Changes

- 5d1d40b: Build output is now flat by prettified package name instead of
  relative package location in the worktree.
- 5d1d40b: Package operations are now via name instead of workspace location.
- af8f49f: Remove react-scripts as a dependency and release major change.
- 6fc027c: Add engine startup check to CLIs to ensure that the version of node
  running is supported
- 90a9b45: Add validation of worktree stucture to prevent nested workspaces.

### Minor Changes

- 3e705a3: Modular convert will assume your current directory is an initialized
  modularrepo and move any src and public folders into a modular app to convert
  yourreact app project into a modular project

### Patch Changes

- 9c6b612: Make action imports asyncronous in cli startup
- ba9652a: Fix modular workspace public prop
- cd73064: Bump webpack from 4.44.2 to 4.46.0
- 090030b: Write result of modular workspace to stdout
- 2488c64: Bump case-sensitive-paths-webpack-plugin from 2.3.0 to 2.4.0
- 3fd0120: Bump @types/react-dev-utils from 9.0.6 to 9.0.7
- 5f105e2: Bump @types/jest from 26.0.23 to 26.0.24
- 6e0838f: Bump jest-watch-typeahead from 0.6.1 to 0.6.4
- 4af6880: Bump html-webpack-plugin from 4.5.0 to 4.5.2
- 2f57d60: Bump @types/semver from 7.3.6 to 7.3.7
- d9f6f6f: Fix issue with SVG loading with svgr/webpack loader
- b02f864: Bump webpack-dev-server from 3.11.1 to 3.11.2
- d59c9cf: Bump file-loader from 6.1.1 to 6.2.0
- 2d89a00: Remove babel-loader from modular-scripts dependencies
- a088791: Bump rollup from 2.52.3 to 2.52.4
- 1f515e3: Bump resolve-url-loader from 3.1.4 to 4.0.0
- f9ba0ad: Bump esbuild from 0.12.12 to 0.12.15
- 2d89a00: Remove web-vitals from modular-scripts dependencies

## 0.14.0

### Minor Changes

- 3cb05b7: Ability to start dev server for a modular view

### Patch Changes

- d0b8ada: Switch to "jsx": "react" in tsconfig to maintain compatibility with
  esbuild-loader and React.
- bc5a48b: Bump esbuild from 0.12.10 to 0.12.12
- 72379f0: Bump react-native-web from 0.16.5 to 0.17.1
- 3ab3b71: Fix issues with init and --help flags interactions with preflight
  checks.
- 12ec27f: Add required engines for packages
- 971cdf6: Bump esbuild from 0.12.9 to 0.12.10
- 5fe389f: Bump commander from 7.2.0 to 8.0.0
- cbc1224: Move verifyPackageTree into modular to enable customization

## 0.13.0

### Minor Changes

- 49e5f21: add `init` API which is a replacement of `npm init` for creating a
  new modular folder in the current working directory.

### Patch Changes

- 834ee7e: Bump postcss from 8.3.4 to 8.3.5
- 2727ad3: Bump @babel/preset-env from 7.14.5 to 7.14.7
- fe3cf48: Fix issues with `init` command `package.json` structure so that yarn
  is setup.
- 5c2c16e: Fix issues where modular bin dependencies could not be found when
  running from global CLI
- fe3cf48: Expose init command via CLI
- 10e1738: Updated vscode template settings in CMRA and moved utils around

## 0.12.4

### Patch Changes

- 7854bce: Allow for extraneous test options for jest debuggers
- 6123408: Bump esbuild from 0.12.5 to 0.12.6
- ab4aa76: Bump execa from 5.0.1 to 5.1.0
- 18038e0: Bump esbuild from 0.12.8 to 0.12.9
- 2cef335: Bump @types/prompts from 2.0.12 to 2.0.13
- 9585460: Bump execa from 5.1.0 to 5.1.1
- 7c380ad: Bump react-native-web from 0.16.3 to 0.16.5
- 3b62172: Add post-css dependency
- dda9ca7: Bump postcss from 8.3.2 to 8.3.4
- c4e7dac: Bump @babel/core from 7.14.5 to 7.14.6
- fba4fb5: Bump rollup from 2.51.2 to 2.52.0
- 8062204: Bump postcss from 8.3.1 to 8.3.2
- 3f33953: Bump rollup from 2.51.1 to 2.51.2
- 6afcd66: Bump esbuild from 0.12.7 to 0.12.8
- a72049c: Bump esbuild from 0.12.6 to 0.12.7
- 24fba84: Bump rollup from 2.50.6 to 2.51.0
- 41b1d93: Bump rollup from 2.51.0 to 2.51.1
- 03528a0: Bump postcss from 8.3.0 to 8.3.1
- e69b457: Bump @babel/plugin-proposal-class-properties from 7.13.0 to 7.14.5
- 1eab107: Bump @babel/core from 7.14.3 to 7.14.5

## 0.12.3

### Patch Changes

- 384e19e: Bump esbuild from 0.12.4 to 0.12.5
- 20c66ed: Bump rollup from 2.50.1 to 2.50.2
- 1f85f22: Bump esbuild from 0.12.3 to 0.12.4
- b20a09c: Bump @babel/preset-env from 7.14.2 to 7.14.4
- 1771a1a: Clean exit of start and build processes
- c787596: Add jest defaults back to config
- 73b4b12: Bump typescript from 4.2.4 to 4.3.2
- 18aea9d: Bump execa from 5.0.0 to 5.0.1

## 0.12.2

### Patch Changes

- e32b47e: Add types and full built files to npm

## 0.12.1

### Patch Changes

- a663161: Update modular scripts bin

## 0.12.0

### Minor Changes

- 0e949cd: Add filelock around package builds to ensure that multiple process
  builds don't conflict
- 6feeaf4: Replaced esbuild-jest and added check for monaco plugin
- 257862c: Allow overriding for certain jest options found in package.json or
  jest.config.js
- 21e9449: Expose workspace info via CLI command
- 94cdea4: Migrate CLI interface to commander to enable command introspection
  via declarative options API

### Patch Changes

- c30d576: Clean up build folder
- f95179f: Bump esbuild from 0.12.1 to 0.12.2
- 74a6323: Bump esbuild from 0.12.2 to 0.12.3
- 68eae74: Target esmodules for transpilation of packages
- 79a385d: Bump pptr-testing-library from 0.6.4 to 0.6.5
- 6061996: Bump rollup from 2.49.0 to 2.50.0
- 6e1fa8c: Set babel-jest presets to babel-preset-react-app
- 9568838: Prevent yarn workspace errors when starting modular via the CLI.

## 0.11.0

### Minor Changes

- 972af73: Replace transpilation implementation with esbuild instead of babel.

### Patch Changes

- e12fedd: Update react-scripts to 4.0.3

## 0.10.0

### Minor Changes

- 9023f11: Expose node.js API for modular-scripts
- aa95360: Enable bin development for packages

### Patch Changes

- 4080e8f: Dependabot: Bump rollup from 2.38.3 to 2.45.2
- 9f9a332: Update create-react-app from 4.0.1 to 4.0.2
- 74ab5d2: Suggest installing @finos/perspective-webpack-plugin if
  @finos/perspective is available.
- 1166d26: Corrected issue with Babel plugins that was making
  @babel/preset-typescript not to apply correctly

## 0.9.10

### Patch Changes

- 84c7b2a: Don't convert all css files to css modules

## 0.9.9

### Patch Changes

- 1e94448: Install fewer dependencies
- 308847e: Bumping versions for actually landing/releasing

## 0.9.8

### Patch Changes

- ecb9880: Bumping versions to overcome a bad prelease publish.

## 0.9.8-next.0

### Patch Changes

- ecb9880: Bumping versions to overcome a bad prelease publish.

## 0.9.7

### Patch Changes

- f035528: Allow arbitrary directory structures for packages

## 0.9.7-next.0

### Patch Changes

- f035528: Allow arbitrary directory structures for packages

## 0.9.6

### Patch Changes

- 84f2a3b: Don't install puppeteer as a dependency
- bb278f7: Update rollup to 2.38.3

## 0.9.5

### Patch Changes

- 84ef2db: Enhance eslint-config-modular-app, add .prettierignore and
  .eslintignore files in templates

## 0.9.4

### Patch Changes

- a2df764: Don't install the perspective plugin (but still use it if it's
  available)

## 0.9.3

### Patch Changes

- d8aee46: Use yarn --silent where possible

## 0.9.2

### Patch Changes

- 7c14fdb: Fix the macro's type generation, and avoid some console spam when
  installing.

## 0.9.1

### Patch Changes

- a79b8da: Bring back support for --inspect-brk, for testing with a debugger.
- f193cfd: Bail `modular build` for libraries when there is a setup issue.

## 0.9.0

### Minor Changes

- 8de0a31: Include @finos/perspective-webpack-plugin by default.

## 0.8.1

### Patch Changes

- 4cb46cc: Add tsconfig for publishing

## 0.8.0

### Minor Changes

- 4466eb6: Use a common tsconfig that we can update whenever

### Patch Changes

- 72637d7: Do sequential builds instead of parallel\
- c5c15eb: Fix an issue where generated files from libraries would interfere
  with typescript definition generation

## 0.7.0

### Minor Changes

- 6c5e925: When building libs, don't throw an error on submodule import for
  non-js files

## 0.6.3

### Patch Changes

- 74780c4: Fix broken build from #207

## 0.6.2

### Patch Changes

- 11912bb: Use update-notifier to point out upgrades when possible (in #203)
- 4e285e6: minor enhancements/fixes to `modular build <package>`

## 0.6.1

### Patch Changes

- 99ee3b9: Update craco to v6

## 0.6.0

### Minor Changes

- 33649d2: modular build `<library>`

### Patch Changes

- af3e1c6: Put a scary warning in the craco config file name

## 0.5.3

### Patch Changes

- 5e0b42e: Fix issue where verifyPackages would be called on all jest workers
  and exit without logging
- cb2208a: Expose ability to add setupFiles to jest when running tests

## 0.5.2

### Patch Changes

- c9c11df: Update node engine requirements to >=12
- e65e681: Enable in-browser lint experience, fix type requirements.

## 0.5.1

### Patch Changes

- 674e1cb: Fix /src not being generated on new apps

## 0.5.0

### Minor Changes

- ef680c2: Bypass create-react-app when creating a new application. Accept
  --prefer-offline for fast installs.

## 0.4.0

### Minor Changes

- 4174608: Install react/react-dom at the root of the generated repository. Fix
  placeholder replacement for generated packages. Pass options to test runner
  correctly.

### Patch Changes

- fa01449: Remove "Huh?" from question when making a new package.

## 0.3.5

### Patch Changes

- 6bf06ed: Run jest manually, instead of using react-scripts to do so.

## 0.3.4

### Patch Changes

- e2cbc71: Update to CRA 4.0.1, and use prompts instead of inquirer in
  modular-scripts.

## 0.3.3

### Patch Changes

- 96f095f: Replaced globby with glob, fixed windows issues

## 0.3.2

### Patch Changes

- 2dc901e: Generate views and packages correctly so that tests can run properly.

## 0.3.1

### Patch Changes

- 4d8d69b: Fix the broken release, and update snapshot tests.

## 0.3.0

### Minor Changes

- 1b34e70: Update craco and create-react-app
- 952f314: Rename widgets to views.
- 1b34e70: refactor the repository to become a modular project itself.

### Patch Changes

- e2df965: Remove `package-lock.json` file created by adding a new app.

  Initialise a Git repository before `create-react-app` does.

## 0.2.0

### Minor Changes

- ca44022: Place `setupTests` into the root of a modular project:
  `modular/setupTests.ts`

## 0.1.4

### Patch Changes

- 3616010: Do not print `execa` stack traces when processes error.

  Ensure that the `build/` directory does not get added into a Git repository.

  Let the underlying commands handle any `--help` argument instead of
  `modular`'s own argument parser.

## 0.1.3

### Patch Changes

- 50537c1: Fix test coverage so that it's produced for all apps, packages and
  widgets.

  Alter test configuration
  [so that it loads the `src/setupTests.{js,ts}` for each application](https://github.com/jpmorganchase/modular/pull/100#discussion_r490495909).

## 0.1.2

### Patch Changes

- f494252: removes code duplication for creating an app.

## 0.1.1

### Patch Changes

- This release fixes the missing build folders.

## 0.1.0

### Minor Changes

- This release adds support for multiple apps, and a simpler folder layout.
