/* globals JasmineInterface: true */

import jasmineRequire from 'jasmine-core/lib/jasmine-core/jasmine';
import {markBottom} from './parseStack';

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
export default function JasmineInterface(options) {
  if (!options || !options.jasmine) {
    throw new Error('[JasmineInterface] Missing required field "jasmine"')
  }

  var env = options.jasmine.getEnv()

  _.extend(this, jasmineRequire.interface(options.jasmine, env))

  var markStackBottom = function (func) {
    var boundFunction = markBottom(func)
    if (func.length > 0) {
      // Async test
      return function (done) {
        return boundFunction.apply(this, arguments)
      }
    } else {
      // Sync test
      return function () {
        return boundFunction.call(this)
      }
    }
  }

  _.forEach(['describe', 'xdescribe', 'fdescribe', 'it', 'fit'], function (word) {
    var originalFunction = this[word]
    this[word] = function (/* arguments */) {
      arguments[1] = markStackBottom(arguments[1])
      return originalFunction.apply(this, arguments)
    }
  }, this)

  _.forEach(['beforeEach', 'afterEach', 'beforeAll', 'afterAll'], function (word) {
    var originalFunction = this[word]
    this[word] = function (/* arguments */) {
      arguments[0] = markStackBottom(arguments[0])
      return originalFunction.apply(this, arguments)
    }
  }, this)
}
