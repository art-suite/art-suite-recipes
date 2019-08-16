/*
  true:   load package from ./build
  false:  load package from ./source

  "use-build" is provided as a stand-alone file in case you
  have multiple entry-points to your package. Each one can
  reference this one value to decide to use ./build of ./source.
*/
module.exports = false;