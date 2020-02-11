/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    /// 初始化第一列的值
    /// 首先,本题应该考虑路径的双向联通性.这是后面计算的基础.
    /// 其次,应该在上面的基础上,从结果反向考虑,Count(start->finish) === Count(finish->start)
    /// 接着,我们考虑一个简单事实,就是在(0,0)<-(i,j)的dp[i][j] = dp[i-1][j] + dp[i][j-1]
    /// 同时,我们还要考虑一个事实,最左边的列和最顶部的行到start的dp[i][0] == dp[0][j] == 1
    /// 这个时候我们立刻知道,如果有一个dp[m][n],我们只需要沿着列方向,一行一行的计算每一个格子
    /// 里的值.于是,我们得到一个优化计算就是只用一行,但是逐格向右更新每个值即可.
    /// 未更新的格子里面存的是上一行的值,已经更新的是当前行的值
    let accLst = new Array(n).fill(1)
    
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n ; j++) {
            accLst[j] += accLst[j-1]
        }       
    }
   return accLst[n-1]
};

// @lc code=end
console.log(uniquePaths(3,2))
