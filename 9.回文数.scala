/*
 * @lc app=leetcode.cn id=9 lang=scala
 *
 * [9] 回文数
 */

// @lc code=start
object Solution {
  def isPalindrome(x: Int): Boolean = {
    if (x < 0) return false
    var ans = 0
    var rem = x
    while (rem > 0) {
      ans *= 10
      ans += rem % 10
      rem = rem / 10
    }

    ans == x
  }
}
// @lc code=end
