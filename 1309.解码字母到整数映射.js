/*
 * @lc app=leetcode.cn id=1309 lang=javascript
 *
 * [1309] 解码字母到整数映射
 *
 * https://leetcode-cn.com/problems/decrypt-string-from-alphabet-to-integer-mapping/description/
 *
 * algorithms
 * Easy (74.77%)
 * Likes:    29
 * Dislikes: 0
 * Total Accepted:    8.1K
 * Total Submissions: 10.9K
 * Testcase Example:  '"10#11#12"'
 *
 * 给你一个字符串 s，它由数字（'0' - '9'）和 '#' 组成。我们希望按下述规则将 s 映射为一些小写英文字符：
 * 
 * 
 * 字符（'a' - 'i'）分别用（'1' - '9'）表示。
 * 字符（'j' - 'z'）分别用（'10#' - '26#'）表示。 
 * 
 * 
 * 返回映射之后形成的新字符串。
 * 
 * 题目数据保证映射始终唯一。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：s = "10#11#12"
 * 输出："jkab"
 * 解释："j" -> "10#" , "k" -> "11#" , "a" -> "1" , "b" -> "2".
 * 
 * 
 * 示例 2：
 * 
 * 输入：s = "1326#"
 * 输出："acz"
 * 
 * 
 * 示例 3：
 * 
 * 输入：s = "25#"
 * 输出："y"
 * 
 * 
 * 示例 4：
 * 
 * 输入：s = "12345678910#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#"
 * 输出："abcdefghijklmnopqrstuvwxyz"
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= s.length <= 1000
 * s[i] 只包含数字（'0'-'9'）和 '#' 字符。
 * s 是映射始终存在的有效字符串。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
    
    let decrypt = ""
    let aCode = 'a'.charCodeAt(0)
    for(let i = s.length - 1; i >= 0;--i){
        let buf = ''
        if(s[i] == '#'){
            // 连续读入两个字符
            buf = s[--i] + buf
            buf = s[--i] + buf
        } else {
            buf = s[i]
        }
        decrypt = String.fromCharCode(parseInt(buf) -1 + aCode) + decrypt
    }
    return decrypt
};
// @lc code=end

console.log(freqAlphabets("10#11#12"))