'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function InverseFizzBuzz(input) {
  var listCollection = [];
  if (input.length === 0) {
    console.log('No input was given.');
  } else {
    var _ret = function () {
      var fizzBuzz = function fizzBuzz(num) {
        if (num % 3 === 0 && num % 5 === 0) {
          return 'fizzbuzz';
        } else if (num % 3 === 0) {
          return 'fizz';
        } else if (num % 5 === 0) {
          return 'buzz';
        } else {
          return 0;
        }
      };

      var getSmallestDistance = function getSmallestDistance() {
        for (var k = 1; k < 100; k++) {
          for (var _i3 = 0; _i3 < resultCollector.length; _i3++) {
            for (var _j = 0; _j < resultCollector.length; _j++) {
              if (resultCollector[_i3][_j] === k) {
                return [_i3, _j];
              }
            }
          }
        }
      };

      ;
      for (var i = 1; i <= 100; i++) {
        listCollection.push(fizzBuzz(i));
      }

      var collector = [];

      var _loop = function _loop(_i) {
        collector[_i] = [];
        listCollection.forEach(function (elem, index) {
          if (elem === input[_i]) {
            collector[_i].push(index + 1);
          }
        });
      };

      for (var _i = 0; _i < input.length; _i++) {
        _loop(_i);
      }

      var result = [];
      for (var _i2 = 0; _i2 < collector[0].length; _i2++) {
        result[_i2] = [];
        for (var j = 0; j < collector[1].length; j++) {
          if (collector[0][_i2] && collector[1][j] > collector[0][_i2]) {
            result[_i2].push([collector[0][_i2], collector[1][j]]);
          }
        }
      }

      var resultCollector = [];
      result.forEach(function (pairs) {
        var newPairs = pairs.map(function (pairs) {
          return pairs[1] - pairs[0];
        });
        resultCollector.push(newPairs);
      });

      var _getSmallestDistance = getSmallestDistance(),
          _getSmallestDistance2 = _slicedToArray(_getSmallestDistance, 2),
          x = _getSmallestDistance2[0],
          y = _getSmallestDistance2[1];

      return {
        v: result[x][y]
      };
    }();

    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
  }
}

console.log(InverseFizzBuzz(['buzz', 'fizz']));
console.log(InverseFizzBuzz(['fizz', 'buzz']));
console.log(InverseFizzBuzz(['buzz', 'buzz']));
console.log(InverseFizzBuzz(['fizz', 'fizz']));
