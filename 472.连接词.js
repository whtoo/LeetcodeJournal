/*
 * @lc app=leetcode.cn id=472 lang=javascript
 *
 * [472] 连接词
 *
 * https://leetcode-cn.com/problems/concatenated-words/description/
 *
 * algorithms
 * Hard (44.50%)
 * Likes:    48
 * Dislikes: 0
 * Total Accepted:    3.4K
 * Total Submissions: 7.7K
 * Testcase Example:  '["cat","cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat"]'
 *
 * 给定一个不含重复单词的列表，编写一个程序，返回给定单词列表中所有的连接词。
 * 
 * 连接词的定义为：一个字符串完全是由至少两个给定数组中的单词组成的。
 * 
 * 示例:
 * 
 * 
 * 输入:
 * ["cat","cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat"]
 * 
 * 输出: ["catsdogcats","dogcatsdog","ratcatdogcat"]
 * 
 * 解释: "catsdogcats"由"cats", "dog" 和 "cats"组成; 
 * ⁠    "dogcatsdog"由"dog", "cats"和"dog"组成; 
 * ⁠    "ratcatdogcat"由"rat", "cat", "dog"和"cat"组成。
 * 
 * 
 * 说明:
 * 
 * 
 * 给定数组的元素总数不超过 10000。
 * 给定数组中元素的长度总和不超过 600000。
 * 所有输入字符串只包含小写字母。
 * 不需要考虑答案输出的顺序。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findAllConcatenatedWordsInADict = function(words) {
    let set = new Set();
    let res = [];
    let getWord = function (word, start) {
      for (let str = '', len = word.length - 1; start <= len; ++start) {
        str += word[start]
        if (set.has(str) && (start === len || getWord(word, start + 1))) {
          return true;
        }
      }
      return false;
    }
    words.sort((a, b) => a.length - b.length);
    set.add(words[0]);
    for (let i = 1, len = words.length; i < len; ++i) {
      if (getWord(words[i], 0)) {
        res.push(words[i])
      } else {
        set.add(words[i])
      }
    }
    return res;

};
// @lc code=end

