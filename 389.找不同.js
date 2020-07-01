/*
 * @lc app=leetcode.cn id=389 lang=javascript
 *
 * [389] 找不同
 *
 * https://leetcode-cn.com/problems/find-the-difference/description/
 *
 * algorithms
 * Easy (60.72%)
 * Likes:    132
 * Dislikes: 0
 * Total Accepted:    29.5K
 * Total Submissions: 47.6K
 * Testcase Example:  '"abcd"\n"abcde"'
 *
 * 给定两个字符串 s 和 t，它们只包含小写字母。
 * 
 * 字符串 t 由字符串 s 随机重排，然后在随机位置添加一个字母。
 * 
 * 请找出在 t 中被添加的字母。
 * 
 * 
 * 
 * 示例:
 * 
 * 输入：
 * s = "abcd"
 * t = "abcde"
 * 
 * 输出：
 * e
 * 
 * 解释：
 * 'e' 是那个被添加的字母。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let table = new Array(26).fill(0)
    
    for(const ch of s){
        table[ch.charCodeAt(0) - 'a'.charCodeAt(0)] += 1
    }

    for(const ch of t){
        if(table[ch.charCodeAt(0) - 'a'.charCodeAt(0)] > 0){
            table[ch.charCodeAt(0) - 'a'.charCodeAt(0)] -= 1
        } else {
            return ch
        }
    }

    return ""
};
// @lc code=end

console.log(findTheDifference("abcd","becda"))