var testFramework = new ClientIntegrationTestFramework()

Meteor.startup(function () {
  Meteor.call('jasmine/environmentInfo', function (error, mirrorInfo) {
    if (error) {
      log.error('Could not get environment info', error);
      return;
    }

    if (mirrorInfo.isTestPackagesMode) {
      var hasCompletedOnce = false;
      Tracker.autorun(function (computation) {
        if (!computation.firstRun) {
          var clientAggregateReport = Velocity.Collections.AggregateReports
            .findOne({name: testFramework.name});

          if (clientAggregateReport) {
            if (clientAggregateReport.result === 'completed') {
              hasCompletedOnce = true;
            } else if (hasCompletedOnce && clientAggregateReport.result === 'pending') {
              debugger;
              Reload._reload();
            }
          }
        }
      });

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
