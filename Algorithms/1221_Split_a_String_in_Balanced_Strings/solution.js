/**
 * @param {string} s
 * @return {number}
 */
 var balancedStringSplit = function(s) {
    let result = 0;
    let count_r =0;
    let count_l = 0;

    for (let i=0; i<s.length; i++) {
        if (s.charAt(i) == 'R') {
            count_r += 1;
        } else {
            count_l += 1;
        }

        if (count_r == count_l) {
            result += 1;
            count_r = 0;
            count_l = 0;
        }
    }

    return result;
};