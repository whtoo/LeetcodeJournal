/*
 * @lc app=leetcode.cn id=140 lang=javascript
 *
 * [140] 单词拆分 II
 *
 * https://leetcode-cn.com/problems/word-break-ii/description/
 *
 * algorithms
 * Hard (37.72%)
 * Likes:    197
 * Dislikes: 0
 * Total Accepted:    17.7K
 * Total Submissions: 46.4K
 * Testcase Example:  '"catsanddog"\n["cat","cats","and","sand","dog"]'
 *
 * 给定一个非空字符串 s 和一个包含非空单词列表的字典
 * wordDict，在字符串中增加空格来构建一个句子，使得句子中所有的单词都在词典中。返回所有这些可能的句子。
 * 
 * 说明：
 * 
 * 
 * 分隔时可以重复使用字典中的单词。
 * 你可以假设字典中没有重复的单词。
 * 
 * 
 * 示例 1：
 * 
 * 输入:
 * s = "catsanddog"
 * wordDict = ["cat", "cats", "and", "sand", "dog"]
 * 输出:
 * [
 * "cats and dog",
 * "cat sand dog"
 * ]
 * 
 * 
 * 示例 2：
 * 
 * 输入:
 * s = "pineapplepenapple"
 * wordDict = ["apple", "pen", "applepen", "pine", "pineapple"]
 * 输出:
 * [
 * "pine apple pen apple",
 * "pineapple pen apple",
 * "pine applepen apple"
 * ]
 * 解释: 注意你可以重复使用字典中的单词。
 * 
 * 
 * 示例 3：
 * 
 * 输入:
 * s = "catsandog"
 * wordDict = ["cats", "dog", "sand", "and", "cat"]
 * 输出:
 * []
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
    let dp = new Array(s.length + 1).fill(false)
    dp[0] = true
    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j <= i; j++) {
            if (dp[j] && wordDict.indexOf(s.slice(j, i)) >= 0) {
                dp[i] = true
                break
            }
        }
    }
    if(!dp[s.length]) return []
    let ans = []
    function backTrack(cur, str) {
        if(str.length == 0) {
            ans.push(cur)
            return
        }
        for(let i = 0; i < str.length; i++) {
            if(wordDict.indexOf(str.slice(0, i + 1)) >= 0) {
                if(cur.length > 0) backTrack(cur + ' ' + str.slice(0, i + 1), str.slice(i + 1))
                else backTrack(str.slice(0, i + 1), str.slice(i + 1))
            }
        }
    }
    backTrack('', s)
    return ans
};
// @lc code=end

