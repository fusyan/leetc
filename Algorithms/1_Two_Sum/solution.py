class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        dict = {}
        
        for i in range(len(nums)):           
            diff = target - nums[i]
            
            if (diff in dict) and (dict[diff] is not i):
                return [dict[diff], i]
            
            dict[nums[i]] = i