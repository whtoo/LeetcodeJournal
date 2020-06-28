/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 *
 * https://leetcode-cn.com/problems/add-binary/description/
 *
 * algorithms
 * Easy (52.18%)
 * Likes:    418
 * Dislikes: 0
 * Total Accepted:    109.6K
 * Total Submissions: 202K
 * Testcase Example:  '"11"\n"1"'
 *
 * 给你两个二进制字符串，返回它们的和（用二进制表示）。
 * 
 * 输入为 非空 字符串且只包含数字 1 和 0。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 输入: a = "11", b = "1"
 * 输出: "100"
 * 
 * 示例 2:
 * 
 * 输入: a = "1010", b = "1011"
 * 输出: "10101"
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 每个字符串仅由字符 '0' 或 '1' 组成。
 * 1 <= a.length, b.length <= 10^4
 * 字符串如果不是 "0" ，就都不含前导零。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let buffer = ""
    let maxLen = Math.max(a.length,b.length)

    if(a.length < maxLen){
        a  = a.padStart(maxLen,"0")
    } else {
        b  = b.padStart(maxLen ,"0")
    }

    let inc = 0
    for(let j = maxLen - 1; j >= 0; j--){
        const aj = parseInt(a[j]);
        const bj = parseInt(b[j]);

        let ret = aj + bj + inc;
        inc = ret >>> 1
        ret = ret & 1
        buffer = ret.toString().concat(buffer)
    }
    if(inc > 0){
        buffer = inc.toString().concat(buffer) 
    }
    console.log(buffer)
    return buffer
};
// @lc code=end
addBinary(
    "101101",
    "011101"
)
