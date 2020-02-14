/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 *
 * https://leetcode-cn.com/problems/generate-parentheses/description/
 *
 * algorithms
 * Medium (73.17%)
 * Likes:    741
 * Dislikes: 0
 * Total Accepted:    73.5K
 * Total Submissions: 100.4K
 * Testcase Example:  '3'
 *
 * 给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。
 * 
 * 例如，给出 n = 3，生成结果为：
 * 
 * [
 * ⁠ "((()))",
 * ⁠ "(()())",
 * ⁠ "(())()",
 * ⁠ "()(())",
 * ⁠ "()()()"
 * ]
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    if(n == 0) return []
    let dp = ['()']
    let cnt = n - 1
    if(n == 1) return dp
    

    for(let i = 1; i <= cnt;i++){
        let bk = dp.map(val => val)
        dp = insertC('()',bk,cnt).concat(joinC('()',bk))
        let m = new Set(dp)
        dp = new Array()
        m.forEach(val => dp.push(val))
    }
    return dp
};

/**
 * @param {string} s
 * @param {string[]} lst
 * @return {string[]}
 */
var insertC = function(s,lst,n){
    let container = []
    for(const ss of lst){
        let cnt = n
        for(let i = 0;i < ss.length;i++){
            if(cnt == 0){
                break
            }
            if(ss[i] == '('){
                container.push(ss.slice(0,i+1) + '()' + ss.slice(i+1))
                cnt--
            }
        }   
    }
    return container
}


/**
 * @param {str} s
 * @param {string[]} lst
 * @return {string[]}
 */
var joinC = function(s,lst){
    let container = []
    for(const ss of lst){
        container.push(s+ss)
    }
    return container
}


// @lc code=end

let ret = generateParenthesis(5)
console.log(ret)