var arc = require('arc');

/**
 * Calculate great circles routes as lines
 *
 * @module turf/arc
 * @category helper
 * @param {Object} from source point feature
 * @param {Object} to destination point feature
 * @param {Object} properties line feature properties
 * @param {Number} npoints number of points
 * @param {Object} options.offset offset from dateline in degrees
 * @returns {Object} arc line feature
 * @example
 * var arc = require('turf-arc');
 * var from = { type: 'Point', coordinates: [-122, 48] };
 * var to = { type: 'Point', coordinates: [-77, 39] };
 * var line = arc(from, to, { 'name': 'Seattle to DC' }, 100, { offset: 10 });
 * //=line
 */
module.exports = function(from, to, properties, npoints, options) {
  var start = { x: from.coordinates[0], y: from.coordinates[1] };
  var end = { x: to.coordinates[0], y: to.coordinates[1] };

  var generator = new arc.GreatCircle(start, end, properties);
  var line = generator.Arc(npoints, options);

  return line.json();
};
