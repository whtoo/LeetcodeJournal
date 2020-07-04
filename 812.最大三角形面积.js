/*
 * @lc app=leetcode.cn id=812 lang=javascript
 *
 * [812] 最大三角形面积
 *
 * https://leetcode-cn.com/problems/largest-triangle-area/description/
 *
 * algorithms
 * Easy (59.51%)
 * Likes:    57
 * Dislikes: 0
 * Total Accepted:    6.5K
 * Total Submissions: 10.7K
 * Testcase Example:  '[[0,0],[0,1],[1,0],[0,2],[2,0]]'
 *
 * 给定包含多个点的集合，从其中取三个点组成三角形，返回能组成的最大三角形的面积。
 * 
 * 
 * 示例:
 * 输入: points = [[0,0],[0,1],[1,0],[0,2],[2,0]]
 * 输出: 2
 * 解释: 
 * 这五个点如下图所示。组成的橙色三角形是最大的，面积为2。
 * 
 * 
 * 
 * 
 * 注意: 
 * 
 * 
 * 3 <= points.length <= 50.
 * 不存在重复的点。
 * -50 <= points[i][j] <= 50.
 * 结果误差值在 10^-6 以内都认为是正确答案。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function(points) {
    let xMin = -Infinity, xMax = Infinity,
    yMin = -Infinity, yMax = Infinity
points.forEach(p => {
    let [x, y] = p
    xMin = Math.min(xMin, x)
    xMax = Math.max(xMax, x)
    yMin = Math.min(yMin, y)
    yMax = Math.max(yMax, y)
})
points = points.filter(p => {
    let [x, y] = p
    return [xMin, xMax].includes(x) >= 0 || [yMin, yMax].includes(y) >= 0
})
return getMin(points)

function area(p1, p2, p3) {
    let dx1 = p2[0] - p1[0]
    let dx2 = p3[0] - p1[0]
    let dy1 = p2[1] - p1[1]
    let dy2 = p3[1] - p1[1]
    return Math.abs(dx1 * dy2 - dx2 * dy1) / 2
}
function getMin(arr) {
    let len = arr.length, res = 0
    for (let i = 0; i < len - 2; ++i) {
        for (let j = i + 1; j < len - 1; ++j) {
            for (let k = j + 1; k < len; ++k) {
                res = Math.max(res, area(points[i], points[j], points[k]))
            }
        }
    }
    return res
}
};
// @lc code=end

