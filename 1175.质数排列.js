/*
 * @lc app=leetcode.cn id=1175 lang=javascript
 *
 * [1175] 质数排列
 *
 * https://leetcode-cn.com/problems/prime-arrangements/description/
 *
 * algorithms
 * Easy (46.16%)
 * Likes:    18
 * Dislikes: 0
 * Total Accepted:    4K
 * Total Submissions: 8.5K
 * Testcase Example:  '5'
 *
 * 请你帮忙给从 1 到 n 的数设计排列方案，使得所有的「质数」都应该被放在「质数索引」（索引从 1 开始）上；你需要返回可能的方案总数。
 * 
 * 让我们一起来回顾一下「质数」：质数一定是大于 1 的，并且不能用两个小于它的正整数的乘积来表示。
 * 
 * 由于答案可能会很大，所以请你返回答案 模 mod 10^9 + 7 之后的结果即可。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：n = 5
 * 输出：12
 * 解释：举个例子，[1,2,5,4,3] 是一个有效的排列，但 [5,2,3,4,1] 不是，因为在第二种情况里质数 5 被错误地放在索引为 1
 * 的位置上。
 * 
 * 
 * 示例 2：
 * 
 * 输入：n = 100
 * 输出：682289015
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= n <= 100
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numPrimeArrangements = function(n) {
    var table = [2];
    var primecount = 1;
    var n_primecount = 1;
    var product = 1;
    for(var i=3; i<=n; i++){
        var length = table.length;
        for(var j=0; j<length; j++){
            if(i%table[j]==0) break;
        }
        if(j==length){
            table.push(i);
            primecount++;
            product=(product*primecount)%(1e+9+7);
        }else{
            n_primecount++;
            product=(product*n_primecount)%(1e+9+7);
        }
    }
    return product%(1e+9+7);

};
// @lc code=end

