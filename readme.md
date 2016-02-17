# ext-strip [![Build Status](https://travis-ci.org/dawsonbotsford/ext-strip.svg?branch=master)](https://travis-ci.org/dawsonbotsford/ext-strip) [![npm](https://img.shields.io/npm/v/ext-strip.svg)](https://www.npmjs.com/package/ext-strip)

> Strip filename extension

<br>

## Install

```
npm install --save ext-strip
```


<br>

## Usage

```js
const extStrip = require('ext-strip');

extStrip('index.js');
//=> 'index'

extStrip(['index1.js', 'index2.html']);
//=> ['index1', 'index2']
```


<br>

## API

### extStrip(target)

##### target

Type: `string` || `Array`

Removes the filetype extension and returns the base.

<br>

## License

MIT © [Dawson Botsford](http://dawsonbotsford.com)
