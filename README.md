# Jasmine

This package is __no longer maintained!__

See [Migrate to Mocha](https://github.com/xolvio/meteor-jasmine/wiki/Migrate-to-Mocha) for how to use the Jasmine expect and spyOn APIs with Mocha.

This package is the Meteor integration for the [Jasmine 2.4](http://jasmine.github.io/2.3/introduction.html) testing framework.
Makes it easy to test your Meteor app and packages with unit and integration tests. For end-to-end tests with Jasmine check out [Chimp](https://chimp.readme.io/docs/getting-started-jasmine).

## Installation

### App testing

```bash
meteor add sanjo:jasmine
```

You also need to install a reporter package to see the test results. Currently the following packages are available:

* [velocity:html-reporter](https://atmospherejs.com/velocity/html-reporter) >= 0.10.0
* [velocity:console-reporter](https://atmospherejs.com/velocity/console-reporter) >= 0.2.1

For example:

```bash
meteor add velocity:html-reporter
```

You can find an [example app in the repository](https://github.com/xolvio/meteor-jasmine/tree/master/test-app).

### Package testing

[Instructions for package testing](https://meteor-testing.readme.io/v1.0/docs/jasmine-testing-a-meteor-package).

## Getting Started

1. Read and bookmark the [official Jasmine documentation](http://jasmine.github.io/2.4/introduction.html) to learn about Jasmine.
2. Read the [Meteor Guide testing section](http://guide.meteor.com/testing.html) to learn how to test Meteor apps.

If you are new to testing, you can consider to do the [Udacity JavaScript Testing course](https://www.udacity.com/course/javascript-testing--ud549) that uses Jasmine.

You can find additional articles on [Readme.io](https://meteor-testing.readme.io/). Some content might be outdated.

## Get Support

#### Free Support

You can get free help here:

* If it is a technical problem with the sanjo:jasmine package: [Create a GitHub issue](https://github.com/xolvio/meteor-jasmine/issues/new) (best effort support)
* For testing questions specific to Meteor: [Meteor forums](https://forums.meteor.com/c/testing)
* For more general testing questions: [Stack Overflow](http://stackoverflow.com/questions/tagged/testing)

#### Premium Support

If need a faster response or have some urgent feature requests, we offer a [paid premium support service](http://xolv.io/velocity-premium-support/).

## Copyright

The code is licensed under the MIT License (see LICENSE file).

The boot.js scripts are based on code that is part of Jasmine 2.0 ([LICENSE](https://github.com/pivotal/jasmine/blob/v2.0.0/MIT.LICENSE)).
