/*
 * @lc app=leetcode.cn id=1347 lang=javascript
 *
 * [1347] 制造字母异位词的最小步骤数
 *
 * https://leetcode-cn.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/description/
 *
 * algorithms
 * Medium (66.89%)
 * Likes:    15
 * Dislikes: 0
 * Total Accepted:    4.4K
 * Total Submissions: 6.2K
 * Testcase Example:  '"bab"\n"aba"'
 *
 * 给你两个长度相等的字符串 s 和 t。每一个步骤中，你可以选择将 t 中的 任一字符 替换为 另一个字符。
 * 
 * 返回使 t 成为 s 的字母异位词的最小步骤数。
 * 
 * 字母异位词 指字母相同，但排列不同（也可能相同）的字符串。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输出：s = "bab", t = "aba"
 * 输出：1
 * 提示：用 'b' 替换 t 中的第一个 'a'，t = "bba" 是 s 的一个字母异位词。
 * 
 * 
 * 示例 2：
 * 
 * 输出：s = "leetcode", t = "practice"
 * 输出：5
 * 提示：用合适的字符替换 t 中的 'p', 'r', 'a', 'i' 和 'c'，使 t 变成 s 的字母异位词。
 * 
 * 
 * 示例 3：
 * 
 * 输出：s = "anagram", t = "mangaar"
 * 输出：0
 * 提示："anagram" 和 "mangaar" 本身就是一组字母异位词。 
 * 
 * 
 * 示例 4：
 * 
 * 输出：s = "xxyyzz", t = "xxyyzz"
 * 输出：0
 * 
 * 
 * 示例 5：
 * 
 * 输出：s = "friend", t = "family"
 * 输出：4
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= s.length <= 50000
 * s.length == t.length
 * s 和 t 只包含小写英文字母
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    let s1 = new Array(26).fill(0)
    let t1= new Array(26).fill(0)
    
    for(let i = 0;i < s.length;i++){
       s1[s[i].charCodeAt(0) - 97]++
       t1[t[i].charCodeAt(0) - 97]++
    }
    let positive = 0
    let negative = 0
    for(let i = 0;i < 26;i++){
        s1[i] -= t1[i]
        if(s1[i] > 0) positive += s1[i]
        else if(s1[i] < -1) negative += s1[i]
    }
    negative *= -1
    return Math.max(positive,negative)
};
// @lc code=end
console.log(minSteps("gctcxyuluxjuxnsvmomavutrrfb","qijrjrhqqjxjtprybrzpyfyqtzf"))
