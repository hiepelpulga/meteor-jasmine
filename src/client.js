import collectTestCodeBlocks from './lib/collectTestCodeBlocks';
import runClientTests from './client/runTests';

const clientTestCodeBlocks = collectTestCodeBlocks();

export function runTests() {
  console.log('Running tests...');

  Meteor.call('jasmine/runServerTests', function runTests(error, result) {
    if (error) {
      console.error('An error occurred while running the server tests', error)
    } else {
      console.log('Server tests ran successfully', result)
    }

    runClientTests(clientTestCodeBlocks)
  });
}
