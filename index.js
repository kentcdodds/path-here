var path = require('path');
module.exports = dir(process.cwd());
module.exports.dir = dir;

function dir(rootDir) {
  return here;

  // from babel.js
  // http://babeljs.io/repl/#?experimental=false&evaluate=false&loose=false&spec=false&playground=true&code=function%20here(...paths)%20%7B%0A%20%20paths.unshift(process.cwd())%3B%0A%20%20console.log(...paths)%3B%0A%7D
  function here() {
    for (var _len = arguments.length, paths = Array(_len), _key = 0; _key < _len; _key++) {
      paths[_key] = arguments[_key];
    }

    paths.unshift(rootDir);
    return path.join.apply(path, paths);
  }
}

