/*
 * @lc app=leetcode.cn id=709 lang=javascript
 *
 * [709] 转换成小写字母
 *
 * https://leetcode-cn.com/problems/to-lower-case/description/
 *
 * algorithms
 * Easy (75.12%)
 * Likes:    118
 * Dislikes: 0
 * Total Accepted:    46.4K
 * Total Submissions: 61.3K
 * Testcase Example:  '"Hello"'
 *
 * 实现函数 ToLowerCase()，该函数接收一个字符串参数 str，并将该字符串中的大写字母转换成小写字母，之后返回新的字符串。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入: "Hello"
 * 输出: "hello"
 * 
 * 示例 2：
 * 
 * 
 * 输入: "here"
 * 输出: "here"
 * 
 * 示例 3：
 * 
 * 
 * 输入: "LOVELY"
 * 输出: "lovely"
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
    let buf =""
    const aCode = 'a'.charCodeAt(0)
    const ACode = 'A'.charCodeAt(0)
    for(const ch of str){
        const diff = ch.charCodeAt(0) - aCode
        if(diff < 0 && Math.abs(diff) < 33 && Math.abs(diff) > 7) {
            buf += String.fromCharCode(ch.charCodeAt(0) - ACode + aCode)
        } else {
            buf += ch
        }
    }

    return buf
};
// @lc code=end

console.log(toLowerCase("Hello"))