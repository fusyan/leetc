/**
 * @param {number[][]} edges
 * @return {number}
 */
 var findCenter = function(edges) {
     // ２つだけ調べれば十分
     if(edges[0][0] == edges[1][0]) {
        return edges[0][0];
     } else if (edges[0][0] == edges[1][1]) {
        return edges[0][0];
     } else {
        return edges[0][1];
     }
};