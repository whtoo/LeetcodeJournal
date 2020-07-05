/*
 * @lc app=leetcode.cn id=1128 lang=javascript
 *
 * [1128] 等价多米诺骨牌对的数量
 *
 * https://leetcode-cn.com/problems/number-of-equivalent-domino-pairs/description/
 *
 * algorithms
 * Easy (41.50%)
 * Likes:    28
 * Dislikes: 0
 * Total Accepted:    6.2K
 * Total Submissions: 13.7K
 * Testcase Example:  '[[1,2],[2,1],[3,4],[5,6]]'
 *
 * 给你一个由一些多米诺骨牌组成的列表 dominoes。
 * 
 * 如果其中某一张多米诺骨牌可以通过旋转 0 度或 180 度得到另一张多米诺骨牌，我们就认为这两张牌是等价的。
 * 
 * 形式上，dominoes[i] = [a, b] 和 dominoes[j] = [c, d] 等价的前提是 a==c 且 b==d，或是 a==d 且
 * b==c。
 * 
 * 在 0 <= i < j < dominoes.length 的前提下，找出满足 dominoes[i] 和 dominoes[j] 等价的骨牌对
 * (i, j) 的数量。
 * 
 * 
 * 
 * 示例：
 * 
 * 输入：dominoes = [[1,2],[2,1],[3,4],[5,6]]
 * 输出：1
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= dominoes.length <= 40000
 * 1 <= dominoes[i][j] <= 9
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {
    if (!dominoes.length) {
        return 0
    }
    var result = 0
    var hashMap = {}
  
    // 1 -> 0
    // 2 -> 1
    // 3 -> 3
    // 4 -> 6
    // 5 -> 10
    // n -> Σ(n-1) -> n * (n - 1) / 2
    for (var i = 0; i < dominoes.length; i++) {
      var stone = dominoes[i]
      var [A, B] = stone
      var key1 = A + ',' + B
      var key2 = B + ',' + A
      if (hashMap[key1]) {
          hashMap[key1] += 1
      } else {
          hashMap[key1] = 1
      }
  
      if (hashMap[key2]) {
          hashMap[key2] += 1
      } else {
          hashMap[key2] = 1
      }
    }
  
    for (var key in hashMap) {
      var num = hashMap[key]
      var A = key.charAt(0)
      var B = key.charAt(2)
      var reverseKey = B + ',' + A
  
      if (A !== B && hashMap[reverseKey]) {
          result += ((num * (num - 1)) / 2)
          hashMap[reverseKey] = 0
      }
  
      // 如果只有一个前后相同的元组
      if (A === B && num > 2) {
          var half = num / 2
          result += ((half * (half - 1)) / 2)
      }
    }
    hashMap = null
    return result
};
// @lc code=end

