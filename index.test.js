var expect = require('chai').expect;
var here = require('./index');

describe('path-here', function() {

  describe('default', function() {
    testHereInstance(here, __dirname);
  });

  describe('dir', function() {
    var startingDir = __dirname + '/starting/dir';
    var startingHere = here.dir(startingDir);
    testHereInstance(startingHere, startingDir);
  });


  function testHereInstance(hereInstance, rootDir) {
    var srcDir = rootDir + '/src';
    var slashedSrcDir = srcDir + '/';
    var longDir = rootDir + '/path/to/dir';

    it('should return rootDir when invoked with nothing', function() {
      var nothing = hereInstance();
      expect(nothing).to.equal(rootDir);
    });

    it('should resolve paths without a slash', function() {
      var slashlessPath = hereInstance('src');
      expect(slashlessPath).to.equal(srcDir);
    });

    it('should resolve paths with a prefixed slash', function() {
      var prefixedWithSlash = hereInstance('/src');
      expect(prefixedWithSlash).to.equal(srcDir);
    });

    it('should resolve paths with a trailing slash', function() {
      var trailingSlash = hereInstance('src/');
      expect(trailingSlash).to.equal(slashedSrcDir);
    });

    it('should resolve paths with a prefix and trailing slash', function() {
      var trailingAndPrefixedWithSlash = hereInstance('/src/');
      expect(trailingAndPrefixedWithSlash).to.equal(slashedSrcDir);
    });

    it('should resolve a longer list of slahshed directories', function() {
      var slashedDirs = hereInstance('path/to/dir');
      expect(slashedDirs).to.equal(longDir);
    });

    it('should resolve directories given as additional arguments', function() {
      var argsDirs = hereInstance('path', 'to', 'dir');
      expect(argsDirs).to.equal(longDir);
    });

  }
});

