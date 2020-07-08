/*
 * @lc app=leetcode.cn id=52 lang=javascript
 *
 * [52] N皇后 II
 *
 * https://leetcode-cn.com/problems/n-queens-ii/description/
 *
 * algorithms
 * Hard (77.17%)
 * Likes:    95
 * Dislikes: 0
 * Total Accepted:    15.6K
 * Total Submissions: 20.3K
 * Testcase Example:  '4'
 *
 * n 皇后问题研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
 * 
 * 
 * 
 * 上图为 8 皇后问题的一种解法。
 * 
 * 给定一个整数 n，返回 n 皇后不同的解决方案的数量。
 * 
 * 示例:
 * 
 * 输入: 4
 * 输出: 2
 * 解释: 4 皇后问题存在如下两个不同的解法。
 * [
 * [".Q..",  // 解法 1
 * "...Q",
 * "Q...",
 * "..Q."],
 * 
 * ["..Q.",  // 解法 2
 * "Q...",
 * "...Q",
 * ".Q.."]
 * ]
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    var obj={}
    var add=[]
    var sub=[]
    var res=0
    trackback(0)
    function trackback(row){
      if(row==n){
        res++
        return
      }
      for(var i=0;i<n;i++){
        if(Object.values(obj).indexOf(i)!=-1||add.indexOf(row+i)!=-1||sub.indexOf(row-i)!=-1)
          continue
        obj[row]=i
        add.push(row+i)
        sub.push(row-i)
        trackback(row+1)
        obj[row]=-1
        add.pop()
        sub.pop()
      }
    }
    return res

};
// @lc code=end

