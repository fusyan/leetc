class Solution:
    def targetIndices(self, nums: List[int], target: int) -> List[int]:
        nums_sorted = sorted(nums)
        return [i for i, num in enumerate(nums_sorted) if num == target]