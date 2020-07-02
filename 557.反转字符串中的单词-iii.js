/*
 * @lc app=leetcode.cn id=557 lang=javascript
 *
 * [557] 反转字符串中的单词 III
 *
 * https://leetcode-cn.com/problems/reverse-words-in-a-string-iii/description/
 *
 * algorithms
 * Easy (69.21%)
 * Likes:    194
 * Dislikes: 0
 * Total Accepted:    61.8K
 * Total Submissions: 87.1K
 * Testcase Example:  `"Let's take LeetCode contest"`
 *
 * 给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。
 * 
 * 示例 1:
 * 
 * 
 * 输入: "Let's take LeetCode contest"
 * 输出: "s'teL ekat edoCteeL tsetnoc" 
 * 
 * 
 * 注意：在字符串中，每个单词由单个空格分隔，并且字符串中不会有任何额外的空格。
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let reverseStr = ""
    for(let i =0,j =0; i < s.length;){
        const ch  = s[i+j]
        let next = -1        
        if(ch == " " || !ch){
            if(j > 0){
                next = j
                j--
                while(j >= 0){
                    reverseStr = reverseStr + s[i+j]
                    j--
                }
                i += next
                j = 0
                reverseStr += (i+j < s.length)?s[i]:""
                i++
            } else{
                i++
            }
        } else {
            if(i+j < s.length){
                j++
            }
        }
    }

    return reverseStr
};
// @lc code=end
console.log(reverseWords(" "))
