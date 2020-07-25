/*
 * @lc app=leetcode.cn id=301 lang=javascript
 *
 * [301] 删除无效的括号
 *
 * https://leetcode-cn.com/problems/remove-invalid-parentheses/description/
 *
 * algorithms
 * Hard (45.25%)
 * Likes:    200
 * Dislikes: 0
 * Total Accepted:    11.4K
 * Total Submissions: 24.2K
 * Testcase Example:  '"()())()"'
 *
 * 删除最小数量的无效括号，使得输入的字符串有效，返回所有可能的结果。
 * 
 * 说明: 输入可能包含了除 ( 和 ) 以外的字符。
 * 
 * 示例 1:
 * 
 * 输入: "()())()"
 * 输出: ["()()()", "(())()"]
 * 
 * 
 * 示例 2:
 * 
 * 输入: "(a)())()"
 * 输出: ["(a)()()", "(a())()"]
 * 
 * 
 * 示例 3:
 * 
 * 输入: ")("
 * 输出: [""]
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
 // BFS广度优先,注意题目中只删除最少括号

    // s在任意位置删除一个括号字符，则形成新的层级
    // 最坏情况就是O(2^len),但是会在删除若干字符后退出
    let level=new Set();
    level.add(s)

    while(true){
        const valid=[...level].filter(str=>isValid(str))
        if(valid.length) return valid;

        // 
        let next_level=new Set();
        for(const str of level){
            for(let i=0;i<str.length;i++){
                if(['(',')'].includes(str[i]))
                    next_level.add(str.slice(0,i)+str.slice(i+1))
            }
        }

        level=next_level;
    }

    function isValid(s){
        let cnt = 0
        for(const ch of s){
            if( ch == "(") ++cnt
            else if(ch == ")") --cnt
            if (cnt < 0) return false
        }
        return cnt === 0
    }

};
// @lc code=end

