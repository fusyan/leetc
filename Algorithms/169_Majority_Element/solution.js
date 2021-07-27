/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
     // 力尽く版
    for (let i=0; i< nums.length; i++) {
        let count = 1;
        for (let j=i+1; j< nums.length; j++) {
            if (nums[i] == nums[j]) {
                count++;
            }
            if (count > nums.length/2) {
                return nums[i];
            }
        }
    }
    return nums[0];
};