class Solution:
    def construct2DArray(self, original: List[int], m: int, n: int) -> List[List[int]]:
        import numpy as np
        
        if len(original) != m*n:
            return []
        
        np_array = np.array(original)
        matlix = np_array.reshape(m, n)
        return matlix