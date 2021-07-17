/**
 * @param {string} command
 * @return {string}
 */
 var interpret = function(command) {
    let result = '';
    
    for (let i=0; i<command.length; i++) {
        if (command.charAt(i) == 'G') {
            result = result.concat('G');
        } else {
            if (command.charAt(i+1) == ')') {
                result = result.concat('o');
                i += 1; // ignore ')'
            } else {
                result = result.concat('al');
                i += 3; // ignore 'al)'
            }
        }
    }
    
    return result;
};