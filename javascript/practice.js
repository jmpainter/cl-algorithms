const a = function(x) {
  this.x = x;
  this.getX = function() {
    return this.x;
  };
};

const b = function(x, y) {
  this.y = y;
  a.call(this, x);
  this.getY = function() {
    return this.y;
  };
};

const newB = new b('x', 'y');

console.log(newB.getX());
console.log(newB.getY());

const obj = {
  a: {
    b: {
      c: 1
    }
  }
};

const arr1 = [1, 3, 5, 7, 9];
const arr2 = [2, 5, 7, 12, 100];

function mergeArrays(arr1, arr2) {
  const newArray = [];
  let ptr1 = 0;
  let ptr2 = 0;

  while (ptr1 < arr1.length && ptr2 < arr2.length) {
    if (arr1[ptr1] <= arr2[ptr2]) {
      newArray.push(arr1[ptr1]);
      ptr1++;
    } else {
      newArray.push(arr2[ptr2]);
      ptr2++;
    }
  }

  while (ptr1 < arr1.length) {
    newArray.push(arr1[ptr1]);
    ptr1++;
  }
  while (ptr2 < arr1.length) {
    newArray.push(arr2[ptr2]);
    ptr2++;
  }
  return newArray;
}

console.log(mergeArrays(arr1, arr2));

const obj2 = {
  x: 1,
  getX: function() {
    const inner = function() {
      console.log(this.x);
    };
    inner.call(this);
  }
};

obj2.getX();
