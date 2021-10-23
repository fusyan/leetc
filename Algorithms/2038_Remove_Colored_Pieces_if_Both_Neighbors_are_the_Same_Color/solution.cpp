class Solution {
public:
    bool winnerOfGame(string colors) {
        int size = colors.size();
        
        if (size < 3) {
            return false;
        }
            
        int countA = 0;
        int countB = 0;
        
        for (int i=1; i<size-1; i++) {
            if (colors[i-1]=='A' and colors[i]=='A' and colors[i+1]=='A') {
                countA++;
            }
            if (colors[i-1]=='B' and colors[i]=='B' and colors[i+1]=='B') {
                countB++;
            }
        }
        
        return countA > countB;
    }
};