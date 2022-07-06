/*
 * @lc app=leetcode.cn id=977 lang=scala
 *
 * [977] 有序数组的平方
 */

// @lc code=start
object Solution {
    def sortedSquares(nums: Array[Int]): Array[Int] = {
        nums.map( x => x * x).sortWith(_ < _)
    }
}
// @lc code=end

