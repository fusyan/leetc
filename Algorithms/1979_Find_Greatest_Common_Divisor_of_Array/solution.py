class Solution:
    def findGCD(self, nums: List[int]) -> int:
        max_num = max(nums)
        min_num = min(nums)
        
        if max_num % min_num == 0:
            return min_num
        else:
            for i in range(min_num-1, 0, -1):
                if (max_num % i == 0) and (min_num % i == 0):
                    return i
                