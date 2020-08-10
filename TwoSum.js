/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let newObj = {};
  let newArr = [];

  for(let j = 0; j<nums.length; j++){
    let diff = target - nums[j];
    if(diff in newObj){
      newArr.push(nums.indexOf(diff), nums.indexOf(nums[j]));
      
    }
    newObj[nums[j]] = j; 
  }
  return newArr;
};
