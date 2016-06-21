var test = require('tape');
var arc = require('./');

var routes = [
  [{ type: 'Point', coordinates: [-122, 48] }, { type: 'Point', coordinates: [-77, 39] }, {'name': 'Seattle to DC'}],
];

var arcs = [
  { geometry: { coordinates: [ [ -122, 48.00000000000001 ], [ -97.72808611752785, 45.75368189927002 ], [ -77, 38.99999999999999 ] ], type: 'LineString' }, properties: { name: 'Seattle to DC' }, type: 'Feature' }
];

test('routes', function(t) {
  routes.forEach(function(route, idx) {
    var line = arc(route[0], route[1], route[2], 3)
    t.deepEqual(line, arcs[idx]);
  });
  t.end();
});
