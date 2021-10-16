class Solution {
public:
    int finalValueAfterOperations(vector<string>& operations) {
        int result = 0;
        for (string operand :operations) {
            if (operand ==  "++X" || operand == "X++") {
                result++;
            } else {
                result--;
            }
        }
        return result;
    }
};