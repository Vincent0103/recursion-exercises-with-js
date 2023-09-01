function fibsWithLoop(n) {
  if (n <= 0) return [];

  let fibArray = (n > 1) ? [0, 1] : [0];
  for (let i = 2; i < n; i++) {
    fibArray.push(fibArray[i - 2] + fibArray[i - 1]);
  }
  return fibArray;
}

function fibsRecurse(n) {
  // ONE-LINE VERSION
  return (n <= 0) ? [] : (n > 2) ? [].concat(fibsRecurse(n - 1), fibsRecurse(n - 1)[(fibsRecurse(n - 1).length) - 1] + fibsRecurse(n - 1)[(fibsRecurse(n - 1).length) - 2]) : (n > 1) ? [0, 1] : [0];

  // ORIGINAL ALGORITHM
  // if (n <= 0) return [];
  // else if (n > 2) {
  //   const result = fibsRecurse(n - 1);
  //   const length = result.length;
  //   return [].concat(result, result[length - 1] + result[length - 2]);
  // }
  // else if (n > 1) return [0, 1];
  // else if (n > 0) return [0];
}

fibsRecurse(13); // [ 0,  1,  1,  2,  3,  5, 8, 13, 21, 34, 55, 89, 144]
fibsWithLoop(13); // [ 0,  1,  1,  2,  3,  5, 8, 13, 21, 34, 55, 89, 144]