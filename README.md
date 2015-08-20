# path-here

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
```

# Other info

LICENSE -> MIT

