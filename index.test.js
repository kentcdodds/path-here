var expect = require('chai').expect;
var here = require('./index');

describe('path-here', function() {

  var srcDir = __dirname + '/src';
  var slashedSrcDir = srcDir + '/';
  var longDir = __dirname + '/path/to/dir';

  it('should return __dirname when invoked with nothing', function() {
    var nothing = here();
    expect(nothing).to.equal(__dirname);
  });

  it('should resolve paths without a slash', function() {
    var slashlessPath = here('src');
    expect(slashlessPath).to.equal(srcDir);
  });

  it('should resolve paths with a prefixed slash', function() {
    var prefixedWithSlash = here('/src');
    expect(prefixedWithSlash).to.equal(srcDir);
  });

  it('should resolve paths with a trailing slash', function() {
    var trailingSlash = here('src/');
    expect(trailingSlash).to.equal(slashedSrcDir);
  });

  it('should resolve paths with a prefix and trailing slash', function() {
    var trailingAndPrefixedWithSlash = here('/src/');
    expect(trailingAndPrefixedWithSlash).to.equal(slashedSrcDir);
  });

  it('should resolve a longer list of slahshed directories', function() {
    var slashedDirs = here('path/to/dir');
    expect(slashedDirs).to.equal(longDir);
  });

  it('should resolve directories given as additional arguments', function() {
    var argsDirs = here('path', 'to', 'dir');
    expect(argsDirs).to.equal(longDir);
  });
});

