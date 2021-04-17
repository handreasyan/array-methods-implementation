// Map   ==========================
Array.prototype.myMap = function (func) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    newArr.push(func(this[i], i));
  }

  return newArr;
};

let arr = [1, 2, 3, 4].myMap(function (el, i) {
  return el + 5;
});
console.log(arr);

// Filter   ============================

Array.prototype.myFilter = function (func) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    if (func(this[i], i)) {
      newArr.push(this[i]);
    }
  }
  return newArr;
};
let arr2 = [1, 2, 3, 4, 3, 123, 5, 3, 45, 3].myFilter(function (el, i) {
  return el === 3;
});

console.log(arr2);

// Reduce   ======================================

Array.prototype.myReduce = function (func, aggr) {
  for (let i = 0; i < this.length; i++) {
    if (aggr === undefined) {
      aggr = this[0];
      i++;
    }
    aggr = func(aggr, this[i]);
  }
  return aggr;
};
console.log(
  [1, 2, 3].myReduce((agr, e) => {
    return agr + e;
  },/*10*/)
);
