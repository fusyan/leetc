/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
 var restoreString = function(s, indices) {
    let result = '';
    
    for (let i=0; i<indices.length; i++) {
        let index = indices.findIndex((element) => element == i);
        result = result.concat(s.charAt(index));
    }
    
    return result;
};