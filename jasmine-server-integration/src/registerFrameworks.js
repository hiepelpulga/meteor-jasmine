/* globals frameworks: true */

frameworks = {}

isMirror = function () {
  return !!process.env.IS_MIRROR;
}

isMainApp = function () {
  return !isMirror();
}

isTestPackagesMode = function () {
  return !!process.env.VELOCITY_TEST_PACKAGES;
}

shouldRunFramework = function (frameworkName) {
  return process.env.FRAMEWORK === frameworkName || isTestPackagesMode();
}

if (process.env.VELOCITY !== '0') {

  // Server Integration
  if (process.env.JASMINE_SERVER_INTEGRATION !== '0') {
    frameworks.serverIntegration = new ServerIntegrationTestFramework()

    if (isMainApp()) {
      frameworks.serverIntegration.registerWithVelocity()
      if (!isTestPackagesMode()) {
        Velocity.startup(function () {
          frameworks.serverIntegration.startMirror()
        })
      }
    }

    if (shouldRunFramework('jasmine-server-integration')) {
      Meteor.startup(function () {
        // Queue our function after all other normal startup functions
        Meteor.startup(function () {
          Meteor.defer(function () {
            frameworks.serverIntegration.start()
          })
        })
      })
    }
  }

}
