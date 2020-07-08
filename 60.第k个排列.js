/*
 * @lc app=leetcode.cn id=60 lang=javascript
 *
 * [60] 第k个排列
 *
 * https://leetcode-cn.com/problems/permutation-sequence/description/
 *
 * algorithms
 * Medium (48.12%)
 * Likes:    174
 * Dislikes: 0
 * Total Accepted:    22.6K
 * Total Submissions: 46.9K
 * Testcase Example:  '3\n3'
 *
 * 给出集合 [1,2,3,…,n]，其所有元素共有 n! 种排列。
 * 
 * 按大小顺序列出所有排列情况，并一一标记，当 n = 3 时, 所有排列如下：
 * 
 * 
 * "123"
 * "132"
 * "213"
 * "231"
 * "312"
 * "321"
 * 
 * 
 * 给定 n 和 k，返回第 k 个排列。
 * 
 * 说明：
 * 
 * 
 * 给定 n 的范围是 [1, 9]。
 * 给定 k 的范围是[1,  n!]。
 * 
 * 
 * 示例 1:
 * 
 * 输入: n = 3, k = 3
 * 输出: "213"
 * 
 * 
 * 示例 2:
 * 
 * 输入: n = 4, k = 9
 * 输出: "2314"
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
    let result = Array.from({ length: n }, (item, index) => index + 1).reverse()
    let frac_arr = []
    let result_temp = []
    getDigit(n, k - 1, result_temp, frac_arr, true)
    for (let i = 0, len = result_temp.length; i < len; i++) {
      let item = result_temp[i]
      let index = item.digit - 1
      let target_index = item.target_digit - 1
      result = [...result.slice(0, index), ...result.slice(index + 1, target_index + 1), ...[result[index]], ...result.slice(target_index + 1)]
    }
    return result.reverse().join('')
  }
  
  function getDigit (n, k, result, frac_arr, first_flag) {
    let flag = 1
    for (let i = 1; i <= n; i++) {
      if (first_flag) {
        flag *= i
        frac_arr.push(flag)
      }
      let item = frac_arr[i - 1] // i-1因为数组0开始
      if (item > k) {
        let digit = i - 1
        let digit_num = frac_arr[i - 2]
        let change_digit = Math.floor(k / digit_num)
        k = k % digit_num
        result.push({
          digit: digit - change_digit + 1,
          target_digit: i
        })
        if (k <= 0) return
        if (first_flag) first_flag = false
        getDigit(n, k, result, frac_arr, first_flag)
        break
      }
    }
  }
// @lc code=end

