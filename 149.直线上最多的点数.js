/*
 * @lc app=leetcode.cn id=149 lang=javascript
 *
 * [149] 直线上最多的点数
 *
 * https://leetcode-cn.com/problems/max-points-on-a-line/description/
 *
 * algorithms
 * Hard (20.44%)
 * Likes:    159
 * Dislikes: 0
 * Total Accepted:    13.9K
 * Total Submissions: 61K
 * Testcase Example:  '[[1,1],[2,2],[3,3]]'
 *
 * 给定一个二维平面，平面上有 n 个点，求最多有多少个点在同一条直线上。
 * 
 * 示例 1:
 * 
 * 输入: [[1,1],[2,2],[3,3]]
 * 输出: 3
 * 解释:
 * ^
 * |
 * |        o
 * |     o
 * |  o  
 * +------------->
 * 0  1  2  3  4
 * 
 * 
 * 示例 2:
 * 
 * 输入: [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]
 * 输出: 4
 * 解释:
 * ^
 * |
 * |  o
 * |     o        o
 * |        o
 * |  o        o
 * +------------------->
 * 0  1  2  3  4  5  6
 * 
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    if(points.length < 3) return points.length
  let map = new Map()
  let gradient = 0
  let ans = 0
  let count = undefined
  let same = undefined
  for(let i = 0; i < points.length; i++) {
      const p1 = points[i]
      count = 0
      same = 0
      for(let j = i + 1; j < points.length; j++) {
          const p2 = points[j]
          let dx = p1[0] - p2[0]
          let dy = p1[1] - p2[1]
          const g = gcd(dx, dy)
          if(g !== 0) {
              dx /= g
              dy /= g
          }
          if((dy === 0) && (dx === 0)) {
              same++
          }else {
              if(dx === 0) {
                  gradient = Infinity
              } else {
                  if(dy === 0) dx = 1
                  gradient = `${dx},${dy}`
              }
              let temp = map.get(gradient)
              if(temp === undefined) {
                  temp = 2
              } else temp += 1
              map.set(gradient, temp)
              if(temp > count) count = temp
          }
      }
      if(count === 0) {
          ans = Math.max(ans, same + 1)
      } else{
          ans = Math.max(ans, same + count)
      }
      map = new Map()
  }
return ans
};


function gcd(a, b) {
  if(b === 0) return a
  return gcd(b, a % b)
}
// @lc code=end

