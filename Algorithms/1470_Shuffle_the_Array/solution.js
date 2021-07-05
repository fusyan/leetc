/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
 var shuffle = function(nums, n) {
    let result = [];
    let subscript = 0;
    for (let i=0; i<n; i++) {
        result[subscript] = nums[i];
        result[subscript+1] = nums[i+n];
        subscript = subscript + 2;
    }
    return result;
};