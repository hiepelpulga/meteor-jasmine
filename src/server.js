import collectTestCodeBlocks from './lib/collectTestCodeBlocks';
import runServerTests from './server/runTests';

const serverTestCodeBlocks = collectTestCodeBlocks();

Meteor.methods({
  'jasmine/runServerTests'() {
    runServerTests(serverTestCodeBlocks);
  }
})
