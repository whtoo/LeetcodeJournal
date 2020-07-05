/*
 * @lc app=leetcode.cn id=840 lang=javascript
 *
 * [840] 矩阵中的幻方
 *
 * https://leetcode-cn.com/problems/magic-squares-in-grid/description/
 *
 * algorithms
 * Easy (33.38%)
 * Likes:    35
 * Dislikes: 0
 * Total Accepted:    6K
 * Total Submissions: 17.5K
 * Testcase Example:  '[[4,3,8,4],[9,5,1,9],[2,7,6,2]]'
 *
 * 3 x 3 的幻方是一个填充有从 1 到 9 的不同数字的 3 x 3 矩阵，其中每行，每列以及两条对角线上的各数之和都相等。
 * 
 * 给定一个由整数组成的 grid，其中有多少个 3 × 3 的 “幻方” 子矩阵？（每个子矩阵都是连续的）。
 * 
 * 
 * 
 * 示例：
 * 
 * 输入: [[4,3,8,4],
 * ⁠     [9,5,1,9],
 * ⁠     [2,7,6,2]]
 * 输出: 1
 * 解释: 
 * 下面的子矩阵是一个 3 x 3 的幻方：
 * 438
 * 951
 * 276
 * 
 * 而这一个不是：
 * 384
 * 519
 * 762
 * 
 * 总的来说，在本示例所给定的矩阵中只有一个 3 x 3 的幻方子矩阵。
 * 
 * 
 * 提示:
 * 
 * 
 * 1 <= grid.length <= 10
 * 1 <= grid[0].length <= 10
 * 0 <= grid[i][j] <= 15
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function(grid) {
    let set = new Set
    let count = 0
    for(let i = 1; i < grid.length - 1; i++) {
        let arr = grid[i]
        for(let j = 1 ; j < arr.length - 1; j++) {
            let arrBefore = grid[i - 1]
            let arrNext = grid[i + 1]
            if(arr[j] === 5 && isMagicSquares(arrBefore[j - 1], arrBefore[j], arrBefore[j + 1], arr[j - 1], arr[j], arr[j + 1], arrNext[j - 1], arrNext[j], arrNext[j + 1], set)) count++
        }
    }
    return count
};

const isMagicSquares = function(a, b, c, d, e, f, g, h, i, set) {
    set.clear()
    let isAllValid = [].every.call(arguments, (n) => {
        if(typeof n === 'number') {
            set.add(n)
        } else {
            return true
        }
        return n > 0 && n < 10
    })
    return set.size === 9 && isAllValid && a + b + c === 15 && d + e + f === 15 && g + h + i === 15 && a + d + g === 15 && c + f + i === 15
}
// @lc code=end

