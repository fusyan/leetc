/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    let result = '';
    const first = strs[0];

    loop:
    // i:何文字目か, j:何個目の要素か
    for (let i=0; i<first.length; i++) {
        for (let j=1; j<strs.length; j++) {
            if (first.charAt(i) != strs[j].charAt(i)) {
                break loop;
            }
        }
        result += first.charAt(i);
    }

    return result;
};