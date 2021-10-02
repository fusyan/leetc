class Solution:
    def maximumDifference(self, nums: List[int]) -> int:
        answer = -1
        for i in range(0, len(nums)-1):
            for j in range(i+1, len(nums)):
                if (nums[i] < nums[j]) and ((nums[j] - nums[i]) > answer):
                    answer = nums[j] - nums[i]

        return answer
