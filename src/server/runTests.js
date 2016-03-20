import jasmineRequire from 'jasmine-core/lib/jasmine-core/jasmine';
import JasmineInterface from '../lib/JasmineInterface';
import VelocityTestReporter from '../lib/VelocityTestReporter';

export default function runTests(testCodeBlocks) {
  const name = 'jasmine-server';
  const jasmine = jasmineRequire.core(jasmineRequire)
  const jasmineInterface = new JasmineInterface({jasmine})
  _.extend(global, jasmineInterface)

  const ddpConnection = Meteor
  ddpConnection.call('velocity/reports/reset', {framework: name})

  const env = this.jasmine.getEnv()

  var velocityReporter = new VelocityTestReporter({
    mode: 'server',
    framework: name,
    env,
    timer: new jasmine.Timer(),
    ddpConnection,
    isServer: true
  })
  env.addReporter(velocityReporter)

  _.forEach(testCodeBlocks, function (callback) {
    callback()
  })

  env.execute()
}
