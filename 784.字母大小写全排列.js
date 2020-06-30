/*
 * @lc app=leetcode.cn id=784 lang=javascript
 *
 * [784] 字母大小写全排列
 *
 * https://leetcode-cn.com/problems/letter-case-permutation/description/
 *
 * algorithms
 * Easy (62.36%)
 * Likes:    181
 * Dislikes: 0
 * Total Accepted:    21.6K
 * Total Submissions: 33.4K
 * Testcase Example:  '"a1b2"'
 *
 * 给定一个字符串S，通过将字符串S中的每个字母转变大小写，我们可以获得一个新的字符串。返回所有可能得到的字符串集合。
 * 
 * 
 * 示例:
 * 输入: S = "a1b2"
 * 输出: ["a1b2", "a1B2", "A1b2", "A1B2"]
 * 
 * 输入: S = "3z4"
 * 输出: ["3z4", "3Z4"]
 * 
 * 输入: S = "12345"
 * 输出: ["12345"]
 * 
 * 
 * 注意：
 * 
 * 
 * S 的长度不超过12。
 * S 仅由数字和字母组成。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function(S) {
    if(S.length == 0) return [""]

    const head = S[0]
    let ret = []
    if(head.match(/[a-zA-Z]/g)){
        for(const s of letterCasePermutation(S.slice(1))){
            ret.push(head.toLowerCase().concat(s))
            ret.push(head.toUpperCase().concat(s))
        }
    } else {
        for(const s of letterCasePermutation(S.slice(1))){
            ret.push(head.concat(s))
        }
    }
    return ret
};
// @lc code=end

console.log(letterCasePermutation("C"))