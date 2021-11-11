class Solution:
    def kthDistinct(self, arr: List[str], k: int) -> str:
        uniques = [s for s in arr if arr.count(s) == 1]
        if len(uniques) < k:
            return ""
        else:
            return uniques[k-1]