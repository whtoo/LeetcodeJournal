/*
 * @lc app=leetcode.cn id=939 lang=javascript
 *
 * [939] 最小面积矩形
 *
 * https://leetcode-cn.com/problems/minimum-area-rectangle/description/
 *
 * algorithms
 * Medium (42.05%)
 * Likes:    41
 * Dislikes: 0
 * Total Accepted:    3K
 * Total Submissions: 7.1K
 * Testcase Example:  '[[1,1],[1,3],[3,1],[3,3],[2,2]]'
 *
 * 给定在 xy 平面上的一组点，确定由这些点组成的矩形的最小面积，其中矩形的边平行于 x 轴和 y 轴。
 * 
 * 如果没有任何矩形，就返回 0。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：[[1,1],[1,3],[3,1],[3,3],[2,2]]
 * 输出：4
 * 
 * 
 * 示例 2：
 * 
 * 输入：[[1,1],[1,3],[3,1],[3,3],[4,1],[4,3]]
 * 输出：2
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= points.length <= 500
 * 0 <= points[i][0] <= 40000
 * 0 <= points[i][1] <= 40000
 * 所有的点都是不同的。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var minAreaRect = function(points) {
    let rows = new Map()
    points.sort((p1,p2)=>p1[0] - p2[0])
    for(const point of points){
        const x = point[0] , y = point[1]
        if(rows.has(x)){
            rows.get(x).push(y)
        } else {
            rows.set(x,[y])
        }
    }
    let ans = Number.MAX_SAFE_INTEGER
    let lastx = new Map()
    for(const x of rows.keys()){
        let row = rows.get(x)
        row.sort((a,b)=>a-b)
        for(let i = 0; i < row.length;++i){
            for(let j = i+1;j < row.length;++j){
                let y1 = row[i], y2 = row[j]
                let code = 40001 * y1 + y2
                if(lastx.has(code)){
                    ans = Math.min(ans,(x - lastx.get(code)) * (y2 - y1))
                }
                lastx.set(code,x)
            }
        }
    }
    return ans < Number.MAX_SAFE_INTEGER ? ans : 0;
};
// @lc code=end

minAreaRect([[0,0],[2,1],[2,4],[2,3],[1,4],[3,4],[1,1],[4,0]]
    )