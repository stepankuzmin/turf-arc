# turf-arc

[![build status](https://secure.travis-ci.org/stepankuzmin/turf-arc.png)](http://travis-ci.org/stepankuzmin/turf-arc)

Calculate great circles routes as lines


### `turf.arc(from, to, properties, npoints, options.offset)`

Calculate great circles routes as lines

### Parameters

| parameter        | type   | description                     |
| ---------------- | ------ | ------------------------------- |
| `from`           | Object | source point feature            |
| `to`             | Object | destination point feature       |
| `properties`     | Object | line feature properties         |
| `npoints`        | Number | number of points                |
| `options.offset` | Object | offset from dateline in degrees |


### Example

```js
var arc = require('turf-arc');
var from = { type: 'Point', coordinates: [-122, 48] };
var to = { type: 'Point', coordinates: [-77, 39] };
var line = arc(from, to, { 'name': 'Seattle to DC' }, 100, { offset: 10 });
//=line
```


**Returns** `Object`, arc line feature

## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install turf-arc
```

## Tests

```sh
$ npm test
```


