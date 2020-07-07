/*
 * @lc app=leetcode.cn id=1184 lang=javascript
 *
 * [1184] 公交站间的距离
 *
 * https://leetcode-cn.com/problems/distance-between-bus-stops/description/
 *
 * algorithms
 * Easy (56.17%)
 * Likes:    27
 * Dislikes: 0
 * Total Accepted:    7.4K
 * Total Submissions: 12.9K
 * Testcase Example:  '[1,2,3,4]\n0\n1'
 *
 * 环形公交路线上有 n 个站，按次序从 0 到 n - 1 进行编号。我们已知每一对相邻公交站之间的距离，distance[i] 表示编号为 i
 * 的车站和编号为 (i + 1) % n 的车站之间的距离。
 * 
 * 环线上的公交车都可以按顺时针和逆时针的方向行驶。
 * 
 * 返回乘客从出发点 start 到目的地 destination 之间的最短距离。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 
 * 输入：distance = [1,2,3,4], start = 0, destination = 1
 * 输出：1
 * 解释：公交站 0 和 1 之间的距离是 1 或 9，最小值是 1。
 * 
 * 
 * 
 * 示例 2：
 * 
 * 
 * 
 * 输入：distance = [1,2,3,4], start = 0, destination = 2
 * 输出：3
 * 解释：公交站 0 和 2 之间的距离是 3 或 7，最小值是 3。
 * 
 * 
 * 
 * 
 * 示例 3：
 * 
 * 
 * 
 * 输入：distance = [1,2,3,4], start = 0, destination = 3
 * 输出：4
 * 解释：公交站 0 和 3 之间的距离是 6 或 4，最小值是 4。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= n <= 10^4
 * distance.length == n
 * 0 <= start, destination < n
 * 0 <= distance[i] <= 10^4
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function(distance, start, destination) {
    let total_fn = (arr) => arr.reduce((a,b) => a + b) // 计算路线总和方法
    let arr = distance.slice(Math.min(start,destination),Math.max(start,destination)) // 找到对应区间数组
    return Math.min(total_fn(arr),total_fn(distance) - total_fn(arr)) // 比较区间路程和  与  总路程-区间路程

};
// @lc code=end

