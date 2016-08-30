var uniqueRandomArray = require('unique-random-array')
const compliments = require('./compliments.json')

function get(index) {
  if (index < 0 || index > compliments.length) {
    throw new RangeError(
      'The index provided was out of range. Please use a number between 0 and ' + (compliments.length - 1)
    )
  }

  return compliments[index];
}

module.exports = {
  get: get,
  random: uniqueRandomArray(compliments)
};