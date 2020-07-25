/*
 * @lc app=leetcode.cn id=318 lang=javascript
 *
 * [318] 最大单词长度乘积
 *
 * https://leetcode-cn.com/problems/maximum-product-of-word-lengths/description/
 *
 * algorithms
 * Medium (61.16%)
 * Likes:    95
 * Dislikes: 0
 * Total Accepted:    8.6K
 * Total Submissions: 13.3K
 * Testcase Example:  '["abcw","baz","foo","bar","xtfn","abcdef"]'
 *
 * 给定一个字符串数组 words，找到 length(word[i]) * length(word[j])
 * 的最大值，并且这两个单词不含有公共字母。你可以认为每个单词只包含小写字母。如果不存在这样的两个单词，返回 0。
 * 
 * 示例 1:
 * 
 * 输入: ["abcw","baz","foo","bar","xtfn","abcdef"]
 * 输出: 16 
 * 解释: 这两个单词为 "abcw", "xtfn"。
 * 
 * 示例 2:
 * 
 * 输入: ["a","ab","abc","d","cd","bcd","abcd"]
 * 输出: 4 
 * 解释: 这两个单词为 "ab", "cd"。
 * 
 * 示例 3:
 * 
 * 输入: ["a","aa","aaa","aaaa"]
 * 输出: 0 
 * 解释: 不存在这样的两个单词。
 * 
 */

// @lc code=start
function wordToBit(word){
    let bits = 0
    for(const ch of word){
        bits |= 1 << (ch.charCodeAt(0) - 'a'.charCodeAt(0))
    }
    return bits
}
/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
   let masks = words.map(val => wordToBit(val))
    // 两层遍历挨个比较最大乘积
    var max = 0;
    const n = words.length
    for (var i = 0; i < n; i++) {
        for (var j = i+1; j < n; j++) {
            // 通过逻辑与计算两个二进制数是否存在相同位
            if ((masks[i] & masks[j]) == 0) {
                max = Math.max(max, words[i].length * words[j].length);
            }
        }
    }

   return max
};
// @lc code=end
console.warn(wordToBit("xtfn").toString(2))
console.warn(maxProduct(["abcw","baz","foo","bar","xtfn","abcdef"]))