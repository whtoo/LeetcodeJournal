/*
 * @lc app=leetcode.cn id=44 lang=javascript
 *
 * [44] 通配符匹配
 *
 * https://leetcode-cn.com/problems/wildcard-matching/description/
 *
 * algorithms
 * Hard (26.36%)
 * Likes:    266
 * Dislikes: 0
 * Total Accepted:    18.8K
 * Total Submissions: 71.3K
 * Testcase Example:  '"aa"\n"a"'
 *
 * 给定一个字符串 (s) 和一个字符模式 (p) ，实现一个支持 '?' 和 '*' 的通配符匹配。
 * 
 * '?' 可以匹配任何单个字符。
 * '*' 可以匹配任意字符串（包括空字符串）。
 * 
 * 
 * 两个字符串完全匹配才算匹配成功。
 * 
 * 说明:
 * 
 * 
 * s 可能为空，且只包含从 a-z 的小写字母。
 * p 可能为空，且只包含从 a-z 的小写字母，以及字符 ? 和 *。
 * 
 * 
 * 示例 1:
 * 
 * 输入:
 * s = "aa"
 * p = "a"
 * 输出: false
 * 解释: "a" 无法匹配 "aa" 整个字符串。
 * 
 * 示例 2:
 * 
 * 输入:
 * s = "aa"
 * p = "*"
 * 输出: true
 * 解释: '*' 可以匹配任意字符串。
 * 
 * 
 * 示例 3:
 * 
 * 输入:
 * s = "cb"
 * p = "?a"
 * 输出: false
 * 解释: '?' 可以匹配 'c', 但第二个 'a' 无法匹配 'b'。
 * 
 * 
 * 示例 4:
 * 
 * 输入:
 * s = "adceb"
 * p = "*a*b"
 * 输出: true
 * 解释: 第一个 '*' 可以匹配空字符串, 第二个 '*' 可以匹配字符串 "dce".
 * 
 * 
 * 示例 5:
 * 
 * 输入:
 * s = "acdcb"
 * p = "a*c?b"
 * 输入: false
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    let memo = {}

    let dp = function(i,j){

        if(memo[i+','+j] != undefined) {
            return memo[i+','+j]
        }

        if(i == s.length && p[j] != p.length) {
            /// 如果目标串已经匹配完毕,而当前模式串指针在‘*’位置,则跳过所有的‘*‘.
            /// 若此时模式串到了末尾,成功;否则,失败.
            while(p[j] == '*') j++
            return  j == p.length
        }

        let firstMatch = (i < s.length) && (s[i] == p[j] || p[j] == '?' )
        let res = 0
        if(!firstMatch && p[j] == '*') {
            ///  如果当前元素是*,
            ///  a. *与s在当前位置匹配,i位置向前一位(*是万能匹配)
            ///  b. *与s在当前位置需要表示为空串,j位置向前一位
            res =  dp(i+1,j) || dp(i,j+1)
        } else {
            /// 正常情况,就看目前最左侧的s[i] == p[j]
            res = firstMatch && dp(i + 1,j+1)
        }
        memo[i+','+j] = res

        return res
    }

    return dp(0,0)
};
// @lc code=end

let res = isMatch("h","ho**")
console.log(res)