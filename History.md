## 1.0.1

* Improvement: Make jasmine available before running tests on client side (fixes #332)

## 1.0.0

The new version uses the Meteor app testing API that has been introduced
in Meteor 1.3. The aim of this package is to integrate Jasmine with
the Meteor testing API in the same way as the Mocha package does it.

You run your tests now with:
`meteor test --driver-package sanjo:jasmine --full-app`

`--full-app` is optional. Read the [Meteor Guide testing section](https://github.com/meteor/guide/blob/testing-modules-content/content/testing.md) for an explanation.

Breaking changes:
* Your tests can no longer be in a folder named "tests"
  and the test files need to end with one of the test extensions.
  Read the [Meteor Guide testing section](https://github.com/meteor/guide/blob/testing-modules-content/content/testing.md) for more info.
* MeteorStubs is no longer a dependency of sanjo:jasmine.
  You need to depend on the package directly, to use it.
* Component mocker and the mock function is no longer part of sanjo:jasmine.
* The Karma integration has been removed. Use the Karma Test Runner directly
  instead if you want to. We have an example in:
  https://github.com/xolvio/automated-testing-best-practices/tree/wip/migrate_1.3
  
Still missing:
* Running tests in CI

## 0.21.0

* Feature (Integration): Support tests that are written in CJSX (CoffeeScript JSX)
* Feature (Client Unit): Support BrowserStack

## 0.20.3

* Version constraint updates for Meteor 1.2.1

## 0.20.2

* Start performance improvements

## 0.20.1

* Fix (Package testing): Don't reload infinitely
       when tests completed before (fixes #288)

## 0.20.0

* Fix: Disable server unit mode by default,
       as it is deprecated and doesn't work with ES2015.
       You can enable it by setting the environment variable 
       `JASMINE_SERVER_UNIT=1`.

## 0.19.2

* Fix (Client unit): Client unit tests do not rerun after changes

## 0.19.1

* Fix (Package testing): Run client tests after server tests
* Fix (Package testing): Rerun client tests on changes

## 0.19.0

* Compatibility with Meteor 1.2

## 0.18.0

* Fix (Client unit): Assets and the head are now loaded correctly.
    Now Karma mimics the loading of Meteor very closely.
    This allows to use the client unit mode in most instances
    instead of the client integration mode.

## 0.17.0

* Upgrades Jasmine to 2.3.4 (from 2.1)

## 0.16.4

* Improves test result name to not contain redundant text
* Reports to Velocity if the test result is for client or server

## 0.16.3

* Chore: Update dependencies
* Fix: Let parseStack.parse just skip unmatched lines

## 0.16.2

* Chore (Client Unit): Upgrade Karma from 0.13.2 to 0.13.3
* Fix (Client Unit): Potential fix for Karma mtime error

## 0.16.1

* Fix (Server Integration): Source map support on server side

## 0.16.0

* Improvement (Integration modes): Much better error stack traces for client tests.

## 0.15.5

* Fix (Client Integration): Don't create mirror iFrame when already in iFrame

## 0.15.4

* Fix: Bug with marking stacks (introduced in 0.15.3)

## 0.15.3

* Fix (Client Integration): Error when running app tests when package tests have been run
    on the same host and port before.
* Improvement: Improves test error stack trace. Shows only relevant stack trace lines in an improved format.

## 0.15.2

* Fix (Server Integration): Tests with exceptions did no longer fail since 0.15.1

## 0.15.1

* Fix (Server Integration): Binding async tests to environment correctly

## 0.15.0

* Update (Client Unit): Use latest Karma
* Feature (Client Unit): Make Karma configurable
* Fix (Client Unit): Iron Router is now automatically disabled
* Fix (Server Integration): Async tests that execute unbound functions now work
* Feature (Client Integration, Server Integration): Specs can also be written with ES2015

## 0.14.0

* Feature (Client Integration): Adds jasmine-jquery
* Fix (Client Integration): Tests didn't rerun when the route was changed in the mirror

## 0.13.7

* Fix (Server Unit): Mocking of Infinity values

## 0.13.6

* Make MeteorStubs available in all modes

## 0.13.5

* Use velocity:core@0.6.3

## 0.13.4

* Fix (Client Unit): Loading assets
* Fix (Client Unit): Loading the component mocker

## 0.13.3

* Fixes problem with meteorhacks:fast-render in Client Unit mode

## 0.13.2

* Fix (Server Integration): Execute the test code after the app has initialized fully.
* Fix (Client Unit): Don't start Karma when no Client Unit tests exist.

## 0.13.1

* Fixes that `meteor --test` never finishes
* Fixes that Client Integration tests don't run when app redirects initially
* Added info that you should use the velocity:METEOR release for CI. See [README](https://github.com/Sanjo/meteor-jasmine#running-tests-in-continuous-integration).

## 0.13.0

* Uses velocity:core 0.6, which improves mirror stability and reliability
* Support for Windows
* Support for testing packages directly
* No more `Jasmine.onTest(function () { ... })` test wrapping
* The integration modes use the Meteor source handlers for compiling tests
* Removes ES6 support in Server Unit mode.
