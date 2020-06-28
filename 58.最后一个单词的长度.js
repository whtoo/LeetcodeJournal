/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 *
 * https://leetcode-cn.com/problems/length-of-last-word/description/
 *
 * algorithms
 * Easy (32.30%)
 * Likes:    206
 * Dislikes: 0
 * Total Accepted:    100.1K
 * Total Submissions: 300.3K
 * Testcase Example:  '"Hello World"'
 *
 * 给定一个仅包含大小写字母和空格 ' ' 的字符串 s，返回其最后一个单词的长度。如果字符串从左向右滚动显示，那么最后一个单词就是最后出现的单词。
 * 
 * 如果不存在最后一个单词，请返回 0 。
 * 
 * 说明：一个单词是指仅由字母组成、不包含任何空格字符的 最大子字符串。
 * 
 * 
 * 
 * 示例:
 * 
 * 输入: "Hello World"
 * 输出: 5
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let count = 0
    const reg = new RegExp(/[a-zA-Z]/)


    for(let i = s.length - 1; i >= 0; i--){
        const ch = s[i]
        if(ch == " "){
            // 1. 如果已经记录过一个单词的长度,则直接终止
            if(count > 0) break
            count = 0
        } else if(reg.test(ch)) {
            count++
        }
        // 2. 如果串消耗完毕,则终止
    }

    return count
};
// @lc code=end

console.log(lengthOfLastWord("Hello World"))