/*
 * @lc app=leetcode.cn id=821 lang=javascript
 *
 * [821] 字符的最短距离
 *
 * https://leetcode-cn.com/problems/shortest-distance-to-a-character/description/
 *
 * algorithms
 * Easy (66.21%)
 * Likes:    133
 * Dislikes: 0
 * Total Accepted:    13.1K
 * Total Submissions: 19.6K
 * Testcase Example:  '"loveleetcode"\n"e"'
 *
 * 给定一个字符串 S 和一个字符 C。返回一个代表字符串 S 中每个字符到字符串 S 中的字符 C 的最短距离的数组。
 * 
 * 示例 1:
 * 
 * 
 * 输入: S = "loveleetcode", C = 'e'
 * 输出: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]
 * 
 * 
 * 说明:
 * 
 * 
 * 字符串 S 的长度范围为 [1, 10000]。
 * C 是一个单字符，且保证是字符串 S 里的字符。
 * S 和 C 中的所有字母均为小写字母。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
    const len = S.length
    let res = new Array(len)
    let first = S.indexOf(C)
    let second = S.indexOf(C, first+1)
    for(let i = 0;i<len;i++) {
        if(second===-1) {
            res[i] = Math.abs(first - i)
        }else {
            if(first>=i) {
                res[i] = first-i
            }else if(second>i) {
                res[i] = Math.min(i-first,second-i)
            }else{
                first = second
                second = S.indexOf(C, first+1)
                res[i] = 0
            }
        }
        
    }
    return res
};
// @lc code=end

shortestToChar("loveleetcodell",'e')