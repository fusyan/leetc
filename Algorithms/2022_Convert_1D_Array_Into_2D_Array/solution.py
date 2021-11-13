class Solution:
    def construct2DArray(self, original: List[int], m: int, n: int) -> List[List[int]]:
        if len(original) != m*n:
            return []
            
        result = []
        
        for i in range(0, m):
            result.append(original[i*n:i*n+n])
        
        return result