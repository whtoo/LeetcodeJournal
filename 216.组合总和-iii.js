/*
 * @lc app=leetcode.cn id=216 lang=javascript
 *
 * [216] 组合总和 III
 *
 * https://leetcode-cn.com/problems/combination-sum-iii/description/
 *
 * algorithms
 * Medium (70.14%)
 * Likes:    133
 * Dislikes: 0
 * Total Accepted:    23.9K
 * Total Submissions: 33.5K
 * Testcase Example:  '3\n7'
 *
 * 找出所有相加之和为 n 的 k 个数的组合。组合中只允许含有 1 - 9 的正整数，并且每种组合中不存在重复的数字。
 * 
 * 说明：
 * 
 * 
 * 所有数字都是正整数。
 * 解集不能包含重复的组合。 
 * 
 * 
 * 示例 1:
 * 
 * 输入: k = 3, n = 7
 * 输出: [[1,2,4]]
 * 
 * 
 * 示例 2:
 * 
 * 输入: k = 3, n = 9
 * 输出: [[1,2,6], [1,3,5], [2,3,4]]
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    let res = [];
    let temp = [];
    let backtrack=(temp,n,start)=>{
       
       if(k===temp.length&&n==0){
           res.push(temp);
           return;
       }
       for(let i=start;i<10;i++){
           temp.push(i)
           backtrack(temp.slice(),n-i,i+1);
           temp.pop();
           }
       }
    
    backtrack(temp,n,1);
    return res;
};
// @lc code=end

