/*
 * @lc app=leetcode.cn id=1528 lang=javascript
 *
 * [1528] 重新排列字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let buf = new Array(s.length).fill(0)
    for(const [i,j] of indices.entries()){
        buf[j] = s[i]
    }
    return buf.join('')
};
// @lc code=end

console.log(restoreString("codeleet",
[4,5,6,7,0,2,1,3]))