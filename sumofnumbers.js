/**
 * Solving Experience E26
 * Created by seans on 9/18/2016.
 */
const numList = [1, 2, 3, 4, 5];

function sumFor(nums) {
  'use strict';
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
  }
  return total;
}
console.log(sumFor(numList));

function sumWhile(nums) {
  'use strict';
  let total = 0;
  let i = 0;
  while (i < nums.length) {
    total += nums[i];
    i++;
  }
  return total;
}
console.log(sumWhile(numList));

function sumRecursion(nums) {
  'use strict';
  if (nums.length === 0) {
    return 0;
  }
  return nums[0] + sumRecursion(nums.slice(1, nums.length));
}
console.log(sumRecursion(numList));

function sumTheSimpleWay(nums) {
  return _.reduce(nums, function(memo, num){ return memo + num; }, 0);
}

console.log(sumTheSimpleWay(numList));