/**
 * @param {number} n
 * @return {number}
 */
 var subtractProductAndSum = function(n) {
    const str = n.toString();
    let product = 1;
    let sum = 0;
    
    for(let i=0; i<str.length; i++)  {
        const num = str.charAt(i);
        product *= Number(num);
        sum += Number(num);
    }
    return product - sum;
};