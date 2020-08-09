/*
 * @lc app=leetcode.cn id=264 lang=javascript
 *
 * [264] 丑数 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    if(n == 1) return 1
    let q2 = new Array(1).fill(2)
    let q3 = new Array(1).fill(3)
    let q5 = new Array(1).fill(5)
    let x;
    while(n-- > 1){
        x = Math.min(q2[0],q3[0],q5[0])
        if(x == q2[0]){
            q2.shift()
            q2.push(2 * x)
            q3.push(3 * x)
            q5.push(5 * x)
        } else if(x == q3[0]) {
            q3.shift()
            q3.push(3 * x)
            q5.push(5 * x)
        } else {
            q5.shift()
            q5.push(5 * x)
        }
    }
    return x
};
// @lc code=end
console.warn(nthUglyNumber(10))
