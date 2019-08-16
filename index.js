/*
  NOTE: node PREFERS index.js OVER index.caf
  I.E. webpack will ignore this file if index.caf is present.

  use-build == true:  fast (no need to compile non-js files; all one file)
  use-build == false: good for development of this package; don't have to re-build it to use it
*/
if (require('./use-build')) {
  module.exports = require('./build');
} else {
  require('./register');
  module.exports = require('./source');
};