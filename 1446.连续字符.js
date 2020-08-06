/*
 * @lc app=leetcode.cn id=1446 lang=javascript
 *
 * [1446] 连续字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
    let start = 0
    let end = 0
    let cnt = 0
    let maxLen = 0
    while(end < s.length){
        if(s[start] === s[end]) {
            cnt++
            maxLen = Math.max(maxLen,cnt)
        } else if(s[start] !== s[end]) {
            start = end
            cnt = 1
        }
        end++
    }
    return maxLen
};
// @lc code=end

console.log(maxPower("leetcode"))
console.log(maxPower("abbcccddddeeeeedcba"))
console.log(maxPower("j"))