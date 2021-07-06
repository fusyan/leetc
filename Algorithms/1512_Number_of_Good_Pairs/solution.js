/**
 * @param {number[]} nums
 * @return {number}
 */
 var numIdenticalPairs = function(nums) {
    const length = nums.length;
    let result = 0;
    
    for (let i=0; i<length; i++) {
        for (let j=i+1; j<length; j++) {
            if (nums[i] == nums[j]) {
                result++;
            }
        }
    }
    
    return result;
};