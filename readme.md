<a href="https://github.com/cjpatoilo/rasper"><img width="100%" src="https://cjpatoilo.com/rasper/artwork.png" alt="Rasper - Node.js parse argument options make ease."></a>

> Node.js parse argument options make ease.

[![Travis Status](https://travis-ci.org/cjpatoilo/rasper.svg?branch=master)](https://travis-ci.org/cjpatoilo/rasper?branch=master)
[![AppVeyor Status](https://ci.appveyor.com/api/projects/status/04dg3w2xexquij8k?svg=true)](https://ci.appveyor.com/project/cjpatoilo/rasper)
[![Codacy Status](https://img.shields.io/codacy/grade/3fc1af6f76e044a2bb898f2c780fbfec/master.svg)](https://www.codacy.com/app/cjpatoilo/rasper/dashboard)
[![Dependencies Status](https://david-dm.org/cjpatoilo/rasper.svg)](https://david-dm.org/cjpatoilo/rasper)
[![Version Status](https://badge.fury.io/js/rasper.svg)](https://www.npmjs.com/package/rasper)
[![Download Status](https://img.shields.io/npm/dt/rasper.svg)](https://www.npmjs.com/package/rasper)
[![Gitter Chat](https://img.shields.io/badge/gitter-join_the_chat-4cc61e.svg)](https://gitter.im/cjpatoilo/rasper)

## Why it's awesome

Rasper transforms command arguments into an easy-to-use formatted object. Flags will be converted into key-value. If there is define flag without value the result will be assumed to be true. Boolean-looking arguments always will be returned as booleans. Numeric-looking arguments always will be returned as numbers. `_` contains all arguments that didn't have an flag associated.

## Getting Started

**Install with npm**

```
$ npm install rasper
```

**Install with Yarn**

```
$ yarn add rasper
```

**Run with npx (without installing)**

```
$ npx rasper
```

## Usage

```
// cli.js
const argv = require('rasper')
console.dir(argv)

// console
$ pwa-installer dist/**/*.html -f 3 -n -o 4 foo bar baz --manifest --config=pwa.config.js 2 4 -f=99
{
  _: [ 'dist/**/*.html', 'foo', 'bar', 'baz', 2, 4 ],
  n: true,
  o: 4,
  manifest: true,
  config: 'pwa.config.js',
  f: 99
}
```

Note: If you don't provide an argument `process.argv.slice(1)` is defined by default.

## Contributing

Want to contribute? Follow these [recommendations](https://github.com/cjpatoilo/rasper/contribute).

## License

Designed with ♥ by [CJ Patoilo](https://twitter.com/cjpatoilo). Licensed under the [MIT License](https://cjpatoilo.com/license).
