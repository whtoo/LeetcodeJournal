/*
 * @lc app=leetcode.cn id=224 lang=javascript
 *
 * [224] 基本计算器
 *
 * https://leetcode-cn.com/problems/basic-calculator/description/
 *
 * algorithms
 * Hard (36.85%)
 * Likes:    228
 * Dislikes: 0
 * Total Accepted:    16.5K
 * Total Submissions: 43.3K
 * Testcase Example:  '"1 + 1"'
 *
 * 实现一个基本的计算器来计算一个简单的字符串表达式的值。
 * 
 * 字符串表达式可以包含左括号 ( ，右括号 )，加号 + ，减号 -，非负整数和空格  。
 * 
 * 示例 1:
 * 
 * 输入: "1 + 1"
 * 输出: 2
 * 
 * 
 * 示例 2:
 * 
 * 输入: " 2-1 + 2 "
 * 输出: 3
 * 
 * 示例 3:
 * 
 * 输入: "(1+(4+5+2)-3)+(6+8)"
 * 输出: 23
 * 
 * 说明：
 * 
 * 
 * 你可以假设所给定的表达式都是有效的。
 * 请不要使用内置的库函数 eval。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    let stack = []
    let operand = 0
    let result = 0
    let sign = 1
    let isDigit = /\d/
    for(const v of s){
        if(isDigit.test(v)){
            operand = 10 * operand + v.charCodeAt(0) - '0'.charCodeAt(0)
        } else if(v == "+"){
            result += sign * operand
            sign = 1
            operand = 0
        } else if(v == '-'){
            result += sign * operand
            sign = -1
            operand = 0
        } else if(v == "("){
            stack.push(result)
            stack.push(sign)

            sign = 1
            result = 0
        } else if(v == ")"){
            result += sign * operand
            result *= stack.pop()
            result += stack.pop()
            operand = 0
        }
    }
    return result + (sign * operand)
};
// @lc code=end

