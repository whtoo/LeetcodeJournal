/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 *
 * https://leetcode-cn.com/problems/add-strings/description/
 *
 * algorithms
 * Easy (49.31%)
 * Likes:    171
 * Dislikes: 0
 * Total Accepted:    38.1K
 * Total Submissions: 76.1K
 * Testcase Example:  '"0"\n"0"'
 *
 * 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和。
 * 
 * 注意：
 * 
 * 
 * num1 和num2 的长度都小于 5100.
 * num1 和num2 都只包含数字 0-9.
 * num1 和num2 都不包含任何前导零。
 * 你不能使用任何內建 BigInteger 库， 也不能直接将输入的字符串转换为整数形式。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    if(num1.length > num2.length) {
        return addStrings(num2,num1)
    }
    
    let carry = 0
    let ret = ""
    const minLen = num1.length
    const maxLen = num2.length
    let t = 0
    for(let i = minLen - 1,j = maxLen - 1;j >= 0;i--,j--){
        if(i >= 0){
            t = parseInt(num1[i]) + parseInt(num2[j]) + carry
            carry = Math.floor(t / 10)
            t = t % 10
        } else {
            t = parseInt(num2[j]) + carry
            carry = Math.floor(t / 10)
            t = t % 10
        }
        ret = t.toString(10) + ret
    }
    if(carry) {
        ret = carry.toString(10) + ret
        carry = 0
    }
    return ret

};
// @lc code=end
console.log(addStrings("101","98"))
console.log(addStrings("10","98"))