class Solution:
    def capitalizeTitle(self, title: str) -> str:
        words = [s for s in title.split()]
        
        for i in range(len(words)):
            w = words[i]
            if len(w) < 3:
                words[i] = w.lower()
            else:
                words[i] = w.capitalize()
                
        return " ".join(words)