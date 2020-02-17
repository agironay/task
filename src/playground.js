function InverseFizzBuzz(input) {
  let listCollection = [];
  if (input.length === 0) {
    console.log('No input was given.')
  } else {
    function fizzBuzz(num) {
      if (num % 3 === 0 && num % 5 === 0) {
        return 'fizzbuzz'
      } else if (num % 3 === 0) {
        return 'fizz'
      } else if (num % 5 === 0) {
        return 'buzz'
      } else {
        return 0;
      }
    };
    for (let i = 1; i <= 100; i++) {
      listCollection.push(fizzBuzz(i));
    }

    let collector = [];
    for (let i = 0; i < input.length; i++) {
      collector[i] = [];
      listCollection.forEach(function (elem, index) {
        if (elem === input[i]) {
          collector[i].push(index + 1)
        }
      });
    }

    let result = [];
    for (let i = 0; i < collector[0].length; i++) {
      result[i] = []
      for (let j = 0; j < collector[1].length; j++) {
        if (collector[0][i] && collector[1][j] > collector[0][i]) {
          result[i].push([collector[0][i], collector[1][j]])
        }
      }
    }

    let resultCollector = [];
    result.forEach(function (pairs) {
      const newPairs = pairs.map(pairs => pairs[1] - pairs[0]);
      resultCollector.push(newPairs)
    })

    function getSmallestDistance() {
      for (let k = 1; k < 100; k++) {
        for (let i = 0; i < resultCollector.length; i++) {
          for (let j = 0; j < resultCollector.length; j++) {
            if (resultCollector[i][j] === k) {
              return [i, j]
            }
          }
        }
      }
    }
    let [x, y] = getSmallestDistance();
    return result[x][y]
  }
}

console.log(InverseFizzBuzz(['buzz', 'fizz']));
console.log(InverseFizzBuzz(['fizz', 'buzz']));
console.log(InverseFizzBuzz(['buzz', 'buzz']));
console.log(InverseFizzBuzz(['fizz', 'fizz']));
