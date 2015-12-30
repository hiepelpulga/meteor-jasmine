/* jshint camelcase: false */
/* global
   Package: false
 */

Package.describe({
  name: 'xolvio:jasmine-server-integration',
  summary: 'Server integration tests with Jasmine',
  version: '0.20.3',
  documentation: '../README.md',
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

  api.addFiles('src/lib/log.js', 'server')

  api.addFiles([
    'src/lib/freeport.js',
    'src/lib/lazyStart.js',
    'src/lib/MirrorStarter.js'
  ], 'server')

  api.addFiles([
    'src/lib/parseStack.js',
    'src/lib/JasmineTestFramework.js',
    'src/lib/JasmineInterface.js',
    'src/lib/VelocityTestReporter.js'
  ], 'server')

  // ----------------------------------------
  // Files that are needed in the main app and the mirror
  // ----------------------------------------

  api.addFiles([
    'src/server/integration/ServerIntegrationTestFramework.js'
  ], 'server')

  // ----------------------------------------
  // Files that are needed in the mirror
  // ----------------------------------------

  api.addFiles([
    // set up server-side Meteor methods
    'src/server/lib/mirror-info.js'
  ], 'server')

  // ----------------------------------------
  // Files that are needed in the main app
  // ----------------------------------------

  api.addFiles([
    'src/server/lib/runFileInContext.js',
    'src/server/lib/coffee-require.js',
    'src/server/lib/file-loader.js',
    'src/server/lib/load-order-sort.js',
    'src/server/lib/mock-loader.js',

    'src/server/unit/included-packages.js',
    'src/server/unit/mock-generator.js',
    'src/server/unit/ServerUnitTestFramework.js',
    'src/client/unit/ClientUnitTestFramework.js',
    'src/client/integration/ClientIntegrationTestFramework.js',

    'src/server/lib/get-files.js',
    'src/registerFrameworks.js'
  ], 'server')

  // ----------------------------------------
  // Assets
  // ----------------------------------------

  api.addAssets([
    // Sample tests
    'src/server/integration/sample-tests/sample/spec/PlayerSpec.js',
    'src/server/integration/sample-tests/sample/spec/SpecMatchers.js',
    'src/server/integration/sample-tests/sample/src/Player.js',
    'src/server/integration/sample-tests/sample/src/Song.js',
    // Other
    '.npm/package/node_modules/component-mocker/index.js',
    'src/lib/mock.js',
    'src/server/lib/contextSpec.js',
    'src/lib/VelocityTestReporter.js'
  ], 'server')

})
