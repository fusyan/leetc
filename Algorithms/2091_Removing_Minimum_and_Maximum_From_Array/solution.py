class Solution:
    def minimumDeletions(self, nums: List[int]) -> int:
        if len(nums) == 1:
            return 1
        
        n_max = max(nums)
        n_min = min(nums)
        i_max = nums.index(n_max)
        i_min = nums.index(n_min)
        
        front = 0
        back = 0
        
        # 最小値と最大値のindexを比較し、前後を判断
        if i_max > i_min:
            front = i_min
            back = i_max
        else:
            front = i_max
            back = i_min
        
        # 連続で前から消す: 後ろ側の数字を前から消す数
        only_front = back + 1
        
        # 連続で後ろから消す: 前側の数字を後ろから消す数
        only_back = len(nums) - front
        
        # 前と後ろから消す
        both = (front + 1) + (len(nums) - back)
        
        return min(only_front, only_back, both)