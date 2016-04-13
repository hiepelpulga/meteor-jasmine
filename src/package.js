/* globals Package: false */

Package.describe({
  name: 'sanjo:jasmine',
  summary: 'Velocity integration of the Jasmine testing framework',
  version: '1.0.1',
  git: 'https://github.com/Sanjo/meteor-jasmine.git',
  documentation: '../README.md',
  testOnly: true
})

Npm.depends({
  'jasmine-core': 'https://github.com/Sanjo/jasmine/archive/9bd532b40c6f1d47a5537ac7f9c46e6bd2691698.tar.gz',
})

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.3')

  api.use([
    'ecmascript',
    'modules',
    'underscore',
    'tracker',
    'webapp',
    'ddp',
    'jquery', // for jasmine-jquery
    'velocity:reports@1.0.0'
  ], ['server', 'client'])

  api.mainModule('server.js', 'server');
  api.mainModule('client.js', 'client');
})
