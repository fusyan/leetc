class Solution {
public:
    bool eraseChar(string& str, string s, bool isAlice) {
        // s: AAA or BBB
        int pos = str.find(s);
        if (pos != std::string::npos) {
            str.erase(pos, 1);
            return true;
        } else {
            return false;
        }
    }
    
    bool winnerOfGame(string colors) {
        while (1) {
            if (!eraseChar(colors, "AAA", true)) return false;
            if (!eraseChar(colors, "BBB", false)) return true;
        }
    }
};