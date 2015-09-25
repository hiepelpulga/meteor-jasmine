var testFramework = new ClientIntegrationTestFramework()
Meteor.startup(function () {
  Meteor.call('jasmine/environmentInfo', function (error, mirrorInfo) {
    if (error) {
      log.error('Could not get environment info', error);
      return;
    }

    if (mirrorInfo.isTestPackagesMode) {
      Tracker.autorun(function () {
        var serverAggregateReport = Velocity.Collections.AggregateReports
          .findOne({name: 'jasmine-server-integration'});


        if (serverAggregateReport && serverAggregateReport.result === 'completed') {
          testFramework.runTests();
        }
      });
    } else {
      testFramework.runTests()
    }
  });
})
