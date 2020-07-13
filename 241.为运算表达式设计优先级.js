/*
 * @lc app=leetcode.cn id=241 lang=javascript
 *
 * [241] 为运算表达式设计优先级
 *
 * https://leetcode-cn.com/problems/different-ways-to-add-parentheses/description/
 *
 * algorithms
 * Medium (70.25%)
 * Likes:    209
 * Dislikes: 0
 * Total Accepted:    12.4K
 * Total Submissions: 17.2K
 * Testcase Example:  '"2-1-1"'
 *
 * 给定一个含有数字和运算符的字符串，为表达式添加括号，改变其运算优先级以求出不同的结果。你需要给出所有可能的组合的结果。有效的运算符号 以及包含 +, -
 * * 。
 * 
 * 示例 1:
 * 
 * 输入: "2-1-1"
 * 输出: [0, 2]
 * 解释: 
 * ((2-1)-1) = 0 
 * (2-(1-1)) = 2
 * 
 * 示例 2:
 * 
 * 输入: "2*3-4*5"
 * 输出: [-34, -14, -10, -10, 10]
 * 解释: 
 * (2*(3-(4*5))) = -34 
 * ((2*3)-(4*5)) = -14 
 * ((2*(3-4))*5) = -10 
 * (2*((3-4)*5)) = -10 
 * (((2*3)-4)*5) = 10
 * 
 */

// @lc code=start
/**
 * @param {string} input
 * @return {number[]}
 */
var diffWaysToCompute = function(input) {
    let result = []
    for(let i = 0;i < input.length; i++){
        const v = input[i]
        if(v === '+' || v === '-' || v === '*'){
            // 分割算式
            let left = diffWaysToCompute(input.slice(0,i))
            let right = diffWaysToCompute(input.slice(i+1))
            for(let j = 0; j < left.length;j++){
                for(let n = 0; n < right.length;n++){
                    switch(v){
                        case '+':
                            result.push(left[j] + right[n])
                            break
                        case '-':
                            result.push(left[j] - right[n])
                            break
                        case '*':
                            result.push(left[j] * right[n])
                            break
                    }
                }
            }
        }
    }
    if(result.length == 0){
        result.push(parseInt(input))
    }
    return result
};
// @lc code=end

