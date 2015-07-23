/* globals JasmineInterface: true */

var jasmineRequire = Meteor.isServer ?
  Npm.require('jasmine-core') :
  window.jasmineRequire

/**
 * Object that will be directly put into the global context of the running
 * tests.
 *
 * ex.
 *     describe(...)   // rather than 'jasmine.describe'
 *     jasmine.clock   // rather than just 'clock'
 *
 * @class JasmineInterface
 * @constructor
 */
JasmineInterface = function (options) {
  if (!options || !options.jasmine) {
    throw new Error('[JasmineInterface] Missing required field "jasmine"')
  }

  var env = options.jasmine.getEnv()

  _.extend(this, jasmineRequire.interface(options.jasmine, env))

  if (Meteor.isServer) {
    _.forEach(['describe', 'xdescribe', 'fdescribe', 'it', 'fit'], function (word) {
      var originalFunction = this[word]
      this[word] = function (/* arguments */) {
        arguments[1] = Meteor.bindEnvironment(arguments[1])
        return originalFunction.apply(this, arguments)
      }
    }, this)

    _.forEach(['beforeEach', 'afterEach', 'beforeAll', 'afterAll'], function (word) {
      var originalFunction = this[word]
      this[word] = function (/* arguments */) {
        arguments[0] = Meteor.bindEnvironment(arguments[0])
        return originalFunction.apply(this, arguments)
      }
    }, this)
  }
}
