# path-here

Status:
[![npm version](https://img.shields.io/npm/v/path-here.svg?style=flat-square)](https://www.npmjs.org/package/path-here)
[![npm downloads](https://img.shields.io/npm/dm/path-here.svg?style=flat-square)](http://npm-stat.com/charts.html?package=path-here&from=2015-08-01)
[![Build Status](https://img.shields.io/travis/kentcdodds/path-here.svg?style=flat-square)](https://travis-ci.org/kentcdodds/path-here)
[![Code Coverage](https://img.shields.io/codecov/c/github/kentcdodds/path-here.svg?style=flat-square)](https://codecov.io/github/kentcdodds/path-here)

This micro-lib will take your code from this:

```javascript
var path = require('path');
var srcDirectory = path.resolve(__dirname, 'src');
```

to this:

```javascript
var here = require('path-here');
var srcDirectory = here('src');
```

It's pretty simple, but it just makes things a little more clear.

# Examples

```javascript
var here = require('path-here');
var srcDir = here('src');
var somePath = here('some/path');
var somePathWithMultipleParams = here('some', 'path'); // <-- same result as previous
var withTrailingSlash = here('src/'); // <-- result has a trailing slash
var withPrefixSlash = here('/src'); // <-- same as here('src');

// specify a different root other than process.cwd()
var there = here.dir('/usr');
var bin = there('bin');
```

# Other info

LICENSE -> MIT

