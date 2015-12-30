/* jshint camelcase: false */
/* global
   Package: false
 */

Package.describe({
  name: 'xolvio:jasmine-server-integration',
  summary: 'Server integration tests with Jasmine',
  version: '0.20.3',
  git: 'https://github.com/Sanjo/meteor-jasmine.git',
  debugOnly: true
})

Npm.depends({
  'jasmine-core': 'https://github.com/Sanjo/jasmine/archive/5a75745999f2b9dcf8dc4b8c1be9fe02e292e9bc.tar.gz',
  'component-mocker': '0.2.1',
  'mkdirp': '0.5.0',
  'glob': '5.0.3',
  'rimraf': '2.3.2',
  'coffee-script': '1.7.1',
  'freeport': '1.0.3'
})

Package.onUse(function (api) {
  api.export('Jasmine', 'server')

  api.versionsFrom('METEOR@1.2.1')

  api.use([
    'underscore',
    'tracker',
    'reload',
    'webapp',
    'ddp',
    'jquery', // for jasmine-jquery
    'practicalmeteor:loglevel@1.2.0_2',
    'velocity:core@0.10.9',
    'velocity:shim@0.1.0',
    'velocity:meteor-stubs@1.1.0'
  ], 'server')

  api.use([
    'sanjo:karma@3.0.3',
    'sanjo:meteor-version@1.0.0',
    'package-version-parser',
    'sanjo:meteor-files-helpers@1.1.0_7'
  ], 'server')

  api.addFiles('src/common/lib/log.js', 'server')

  api.addFiles([
    'src/common/lib/freeport.js',
    'src/common/lib/lazyStart.js',
    'src/common/lib/MirrorStarter.js'
  ], 'server')

  api.addFiles([
    'src/common/lib/parseStack.js',
    'src/common/lib/JasmineTestFramework.js',
    'src/common/lib/JasmineInterface.js',
    'src/common/lib/VelocityTestReporter.js'
  ], 'server')

  // ----------------------------------------
  // Files that are needed in the main app and the mirror
  // ----------------------------------------

  api.addFiles([
    'src/common/server/integration/ServerIntegrationTestFramework.js'
  ], 'server')

  // ----------------------------------------
  // Files that are needed in the mirror
  // ----------------------------------------

  api.addFiles([
    // set up server-side Meteor methods
    'src/common/server/lib/mirror-info.js'
  ], 'server')

  // ----------------------------------------
  // Files that are needed in the main app
  // ----------------------------------------

  api.addFiles([
    'src/common/server/lib/runFileInContext.js',
    'src/common/server/lib/coffee-require.js',
    'src/common/server/lib/file-loader.js',
    'src/common/server/lib/load-order-sort.js',
    'src/common/server/lib/mock-loader.js',

    'src/common/server/unit/included-packages.js',
    'src/common/server/unit/mock-generator.js',
    'src/common/server/unit/ServerUnitTestFramework.js',
    'src/common/client/unit/ClientUnitTestFramework.js',
    'src/common/client/integration/ClientIntegrationTestFramework.js',

    'src/common/server/lib/get-files.js',
    'src/registerFrameworks.js'
  ], 'server')

  // ----------------------------------------
  // Assets
  // ----------------------------------------

  api.addAssets([
    // Sample tests
    'src/common/server/integration/sample-tests/sample/spec/PlayerSpec.js',
    'src/common/server/integration/sample-tests/sample/spec/SpecMatchers.js',
    'src/common/server/integration/sample-tests/sample/src/Player.js',
    'src/common/server/integration/sample-tests/sample/src/Song.js',
    // Other
    '.npm/package/node_modules/component-mocker/index.js',
    'src/common/lib/mock.js',
    'src/common/server/lib/contextSpec.js',
    'src/common/lib/VelocityTestReporter.js'
  ], 'server')

})
