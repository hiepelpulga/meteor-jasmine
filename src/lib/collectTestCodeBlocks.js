// Postpone the execution of the test blocks until we run the tests.
// This makes sure that the whole app is loaded before.
export default function collectTestCodeBlocks() {
  const testCodeBlocks = [];

  const executeTestCodeBlockFactory = function executeTestCodeBlockFactory(funcName) {
    return function (...args) {
      testCodeBlocks.push(function () {
        global[funcName].apply(global, args)
      });
    }
  }

  const jasmineGlobals = [
    'describe',
    'xdescribe',
    'fdescribe',
    'beforeEach',
    'afterEach',
    'beforeAll',
    'afterAll'
  ]

  jasmineGlobals.forEach(function (jasmineGlobal) {
    global[jasmineGlobal] = executeTestCodeBlockFactory(jasmineGlobal)
  })

  return testCodeBlocks;
}
