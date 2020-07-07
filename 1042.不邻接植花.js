/*
 * @lc app=leetcode.cn id=1042 lang=javascript
 *
 * [1042] 不邻接植花
 *
 * https://leetcode-cn.com/problems/flower-planting-with-no-adjacent/description/
 *
 * algorithms
 * Easy (46.82%)
 * Likes:    58
 * Dislikes: 0
 * Total Accepted:    6K
 * Total Submissions: 12K
 * Testcase Example:  '3\n[[1,2],[2,3],[3,1]]'
 *
 * 有 N 个花园，按从 1 到 N 标记。在每个花园中，你打算种下四种花之一。
 * 
 * paths[i] = [x, y] 描述了花园 x 到花园 y 的双向路径。
 * 
 * 另外，没有花园有 3 条以上的路径可以进入或者离开。
 * 
 * 你需要为每个花园选择一种花，使得通过路径相连的任何两个花园中的花的种类互不相同。
 * 
 * 以数组形式返回选择的方案作为答案 answer，其中 answer[i] 为在第 (i+1) 个花园中种植的花的种类。花的种类用  1, 2, 3, 4
 * 表示。保证存在答案。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：N = 3, paths = [[1,2],[2,3],[3,1]]
 * 输出：[1,2,3]
 * 
 * 
 * 示例 2：
 * 
 * 输入：N = 4, paths = [[1,2],[3,4]]
 * 输出：[1,2,1,2]
 * 
 * 
 * 示例 3：
 * 
 * 输入：N = 4, paths = [[1,2],[2,3],[3,4],[4,1],[1,3],[2,4]]
 * 输出：[1,2,3,4]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= N <= 10000
 * 0 <= paths.size <= 20000
 * 不存在花园有 4 条或者更多路径可以进入或离开。
 * 保证存在答案。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} N
 * @param {number[][]} paths
 * @return {number[]}
 */
var gardenNoAdj = function(N, paths) {
    // 1. 构造通道，索引 0 对应花园 1
  const gardenPath = Array.from(Array(N), () => []);
  
  // 2. 填充数据
  for (let i = 0; i < paths.length; i++) {
    gardenPath[paths[i][0] - 1].push(paths[i][1]);
    gardenPath[paths[i][1] - 1].push(paths[i][0]);
  }
  
  // 3. 开始挖坑，拿好花种
  const result = Array.from(Array(N), () => '');
  const flowers = [1, 2, 3, 4];

  // 4. 开始填坑
  for (let i = 0; i < gardenPath.length; i++) {
    const path = gardenPath[i].map(item => result[item - 1]);
    const canUse = Array.from(new Set([...flowers].filter(item => !path.includes(item))));
    result[i] = canUse[0];
  }

  // 5. 去掉没用的坑
  return result;
};
// @lc code=end

