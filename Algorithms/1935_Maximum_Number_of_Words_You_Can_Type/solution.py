class Solution:
    def canBeTypedWords(self, text: str, brokenLetters: str) -> int:
        words = text.split()        
        for ng_chr in brokenLetters:
            words = [word for word in words if (ng_chr not in word)]
        
        return len(words)
