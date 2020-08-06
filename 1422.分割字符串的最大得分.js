/*
 * @lc app=leetcode.cn id=1422 lang=javascript
 *
 * [1422] 分割字符串的最大得分
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    let arr = s.split('')
    let cur = arr.slice(0,1).filter(val=>val === '0').length + arr.slice(1).filter(val=>val === "1").length
    let maxScore = cur
    for(let i = 1;i < arr.length;++i){

        if(s[i] == '1'){
            cur -= 1
        } else {
            if(i < arr.length -1){
                cur += 1
            }
        }

        maxScore = Math.max(cur,maxScore)
    }
    return maxScore
};
// @lc code=end

console.log(maxScore("00111"))
console.log(maxScore("1111"))
console.log(maxScore("011101"))
console.log(maxScore("00"))