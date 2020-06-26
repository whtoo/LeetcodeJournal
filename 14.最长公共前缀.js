/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 *
 * https://leetcode-cn.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (36.07%)
 * Likes:    1114
 * Dislikes: 0
 * Total Accepted:    296.1K
 * Total Submissions: 772.3K
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 
 * 如果不存在公共前缀，返回空字符串 ""。
 * 
 * 示例 1:
 * 
 * 输入: ["flower","flow","flight"]
 * 输出: "fl"
 * 
 * 
 * 示例 2:
 * 
 * 输入: ["dog","racecar","car"]
 * 输出: ""
 * 解释: 输入不存在公共前缀。
 * 
 * 
 * 说明:
 * 
 * 所有输入只包含小写字母 a-z 。
 * 
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length <= 0) return "";

    const firstEle = strs[0];
    let prefix = "";

    for(const s of firstEle){
        const tmp = prefix.concat(s);

        for(const ele of strs){
            if(!ele.startsWith(tmp)){
                return prefix;
            }
        }
        prefix = tmp;
    }

    return prefix;
};
// @lc code=end

console.log(longestCommonPrefix(["dog","racecar","car"]))
