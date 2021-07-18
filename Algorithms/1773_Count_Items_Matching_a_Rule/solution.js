/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
 var countMatches = function(items, ruleKey, ruleValue) {
    let result =  0;

    items.forEach (item => {
        switch (ruleKey) {
            case 'type':
                if(item[0] == ruleValue) {
                    result++;
                }
                break;
            case 'color':
                if(item[1] == ruleValue) {
                    result++;
                }
                break;
            case 'name':
                if(item[2] == ruleValue) {
                    result++;
                }
                break;
        }
    })

    return result;
};