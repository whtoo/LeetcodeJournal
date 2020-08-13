/*
 * @lc app=leetcode.cn id=1544 lang=javascript
 *
 * [1544] 整理字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    let stack = []
 
    for(let i = 0;i < s.length ;++i){
       stack.push(s[i])
        let n = stack.length
        if(n >= 2 && (stack[n-1].charCodeAt(0) + 32 == stack[n-2].charCodeAt(0) || stack[n-1].charCodeAt(0) -32 == stack[n-2].charCodeAt(0))){
            stack.pop()
            stack.pop()
        }
    }
    return stack.join('')
};
// @lc code=end

console.log(makeGood("abBAcC"))
console.log(makeGood("leEeetcode"))
console.log(makeGood("mC"))
console.log(makeGood("Pp"))