/*
 * @lc app=leetcode.cn id=218 lang=javascript
 *
 * [218] 天际线问题
 *
 * https://leetcode-cn.com/problems/the-skyline-problem/description/
 *
 * algorithms
 * Hard (40.19%)
 * Likes:    230
 * Dislikes: 0
 * Total Accepted:    8.1K
 * Total Submissions: 18.9K
 * Testcase Example:  '[[2,9,10],[3,7,15],[5,12,12],[15,20,10],[19,24,8]]'
 *
 * 
 * 城市的天际线是从远处观看该城市中所有建筑物形成的轮廓的外部轮廓。现在，假设您获得了城市风光照片（图A）上显示的所有建筑物的位置和高度，请编写一个程序以输出由这些建筑物形成的天际线（图B）。
 * 
 * ⁠   
 * 
 * 每个建筑物的几何信息用三元组 [Li，Ri，Hi] 表示，其中 Li 和 Ri 分别是第 i 座建筑物左右边缘的 x 坐标，Hi 是其高度。可以保证 0
 * ≤ Li, Ri ≤ INT_MAX, 0 < Hi ≤ INT_MAX 和 Ri - Li > 0。您可以假设所有建筑物都是在绝对平坦且高度为 0
 * 的表面上的完美矩形。
 * 
 * 例如，图A中所有建筑物的尺寸记录为：[ [2 9 10], [3 7 15], [5 12 12], [15 20 10], [19 24 8] ]
 * 。
 * 
 * 输出是以 [ [x1,y1], [x2, y2], [x3, y3], ... ]
 * 格式的“关键点”（图B中的红点）的列表，它们唯一地定义了天际线。关键点是水平线段的左端点。请注意，最右侧建筑物的最后一个关键点仅用于标记天际线的终点，并始终为零高度。此外，任何两个相邻建筑物之间的地面都应被视为天际线轮廓的一部分。
 * 
 * 例如，图B中的天际线应该表示为：[ [2 10], [3 15], [7 12], [12 0], [15 10], [20 8], [24, 0]
 * ]。
 * 
 * 说明:
 * 
 * 
 * 任何输入列表中的建筑物数量保证在 [0, 10000] 范围内。
 * 输入列表已经按左 x 坐标 Li  进行升序排列。
 * 输出列表必须按 x 位排序。
 * 输出天际线中不得有连续的相同高度的水平线。例如 [...[2 3], [4 5], [7 5], [11 5], [12 7]...]
 * 是不正确的答案；三条高度为 5 的线应该在最终输出中合并为一个：[...[2 3], [4 5], [12 7], ...]
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
var getSkyline = function(buildings) {
    const n = buildings.length
    let output = new Array()
    if(n == 0) return output
    if(n == 1){
        let xStart = buildings[0][0]
        let xEnd = buildings[0][1]
        let y = buildings[0][2]

        output.push([xStart,y])
        output.push([xEnd,0])

        return output
    }

    let leftSkyline, rightSkyline;
    const mid = Math.floor(n / 2)
    leftSkyline = getSkyline(buildings.slice(0,mid))
    rightSkyline = getSkyline(buildings.slice(mid,n))

    return mergeSkylines(leftSkyline,rightSkyline)
};
/**
 * 
 * @param {number[][]} left 
 * @param {number[][]} right 
 * @return {number[][]}
 */
function mergeSkylines(left,right){
    let nL = left.length, nR = right.length;
    let pL = 0,pR = 0;
    let currY = 0, leftY = 0,rightY = 0;
    let x = 0,maxY = 0;
    let output = new Array()

    while(pL < nL && pR < nR){
        let pointL = left[pL];
        let pointR = right[pR];
        if(pointL[0] < pointR[0]){
            x = pointL[0]
            leftY = pointL[1]
            pL++
        } else {
            x = pointR[0]
            rightY = pointR[1]
            pR++
        }
        maxY = Math.max(leftY,rightY);
        if(currY !== maxY){
            updateOutput(output,x,maxY)
            currY = maxY
        }
    }

    appendSkyline(output,left,pL,nL,currY);
    appendSkyline(output,right,pR,nR,currY);

    return output;
}   
/**
 * 
 * @param {number[][]} output 
 * @param {number} x 
 * @param {number} y 
 */
function updateOutput(output,x,y){
    if(output.length == 0 || output[output.length-1][0] != x){
        output.push([x,y])
    } else {
        output[output.length - 1][1] = y
    }
}
/**
 * 
 * @param {number[][]} output 
 * @param {number[][]} skyline 
 * @param {number} p 
 * @param {number} n 
 * @param {number} currY 
 */
function appendSkyline(output,skyline,p,n,currY){
    while(p < n){
        let point = skyline[p]
        const x = point[0]
        const y = point[1]
        p++

        if(currY !== y){
            updateOutput(output,x,y)
            currY = y
        }
    }
}
// @lc code=end
let ret = getSkyline([[2,9,10],[3,7,15],[5,12,12],[15,20,10],[19,24,8]]
    )
console.log(ret)