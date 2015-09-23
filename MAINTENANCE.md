### Info for sanjo:jasmine maintainers

#### Testing

We use sanjo:jasmine for testing sanjo:jasmine. There is a test-app with tests that verify the correct behavior of sanjo:jasmine. There is still a lot of room for improvement for test coverage.

##### Running package unit tests

```bash
cd test-app
./run.sh
```

#### Publish a new version

1. Increase the version in `package.js` (follow [Semantic Versioning conventions](http://semver.org/))
2. Document changes in History.md
3. `meteor publish`
4. Update the sanjo:jasmine version in `test-app/packages/package-to-test/package.js`
5. Update the sanjo:jasmine version in `test-app/.meteor/versions`
6. Commit "Release of X.X.X"
7. Create a tag with the version "X.X.X"
8. Push (`git push && git push --tags`)
