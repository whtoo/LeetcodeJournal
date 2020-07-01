/*
 * @lc app=leetcode.cn id=447 lang=javascript
 *
 * [447] 回旋镖的数量
 *
 * https://leetcode-cn.com/problems/number-of-boomerangs/description/
 *
 * algorithms
 * Easy (56.65%)
 * Likes:    93
 * Dislikes: 0
 * Total Accepted:    12.9K
 * Total Submissions: 22.3K
 * Testcase Example:  '[[0,0],[1,0],[2,0]]'
 *
 * 给定平面上 n 对不同的点，“回旋镖” 是由点表示的元组 (i, j, k) ，其中 i 和 j 之间的距离和 i 和 k
 * 之间的距离相等（需要考虑元组的顺序）。
 * 
 * 找到所有回旋镖的数量。你可以假设 n 最大为 500，所有点的坐标在闭区间 [-10000, 10000] 中。
 * 
 * 示例:
 * 
 * 
 * 输入:
 * [[0,0],[1,0],[2,0]]
 * 
 * 输出:
 * 2
 * 
 * 解释:
 * 两个回旋镖为 [[1,0],[0,0],[2,0]] 和 [[1,0],[2,0],[0,0]]
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
    let res = 0;
    for(let i = 0; i < points.length; i++) {
      // points[i] 设置为枢纽点
      // 记录其他点到points[i]之间的距离的频次
      const map = new Map();
      for (let j = 0; j < points.length; j++) {
        if (j != i) {
          // 以两点距离为key
          const d = dis(points[i], points[j]);
          if (map.has(d)) {
            map.set(d, map.get(d) + 1);
          } else {
            map.set(d, 1);
          }
        }
      }
      // 计算频次的组合
      map.forEach((val, key) => {
        res += val * (val - 1);// 计算排列组合个数 n * (n - 1)
      });
    } 
    return res;
  };
  
  function dis(pa, pb) {
    // 求坐标点间的距离 https://baike.baidu.com/item/%E4%B8%A4%E7%82%B9%E9%97%B4%E8%B7%9D%E7%A6%BB%E5%85%AC%E5%BC%8F
    return (pa[0] - pb[0]) * (pa[0] - pb[0]) + (pa[1] - pb[1]) * (pa[1] - pb[1]);
  }

// @lc code=end

