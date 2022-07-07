/*
 * @lc app=leetcode.cn id=283 lang=scala
 *
 * [283] 移动零
 */

// @lc code=start
object Solution {
  @annotation.tailrec
  def swap(k: Int, index: Int, arr: Array[Int]): Unit = {
    if (index == nums.length) return
    else if (arr(index) == 0) swap(k + 1, index + 1, arr)
    else {
      if (k > 0) {
        arr(index - k) = arr(index)
        arr(index) = 0
      }
      swap(k, index + 1, arr)
    }
  }

  swap(0, 0, nums)
}
// @lc code=end
