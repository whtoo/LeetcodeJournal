/*
 * @lc app=leetcode.cn id=850 lang=javascript
 *
 * [850] 矩形面积 II
 *
 * https://leetcode-cn.com/problems/rectangle-area-ii/description/
 *
 * algorithms
 * Hard (39.31%)
 * Likes:    41
 * Dislikes: 0
 * Total Accepted:    1.1K
 * Total Submissions: 2.5K
 * Testcase Example:  '[[0,0,2,2],[1,0,2,3],[1,0,3,1]]'
 *
 * 我们给出了一个（轴对齐的）矩形列表 rectangles 。 对于 rectangle[i] = [x1, y1, x2,
 * y2]，其中（x1，y1）是矩形 i 左下角的坐标，（x2，y2）是该矩形右上角的坐标。
 * 
 * 找出平面中所有矩形叠加覆盖后的总面积。 由于答案可能太大，请返回它对 10 ^ 9 + 7 取模的结果。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：[[0,0,2,2],[1,0,2,3],[1,0,3,1]]
 * 输出：6
 * 解释：如图所示。
 * 
 * 
 * 示例 2：
 * 
 * 输入：[[0,0,1000000000,1000000000]]
 * 输出：49
 * 解释：答案是 10^18 对 (10^9 + 7) 取模的结果， 即 (10^9)^2 → (-7)^2 = 49 。
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= rectangles.length <= 200
 * rectanges[i].length = 4
 * 0 <= rectangles[i][j] <= 10^9
 * 矩形叠加覆盖后的总面积不会超越 2^63 - 1 ，这意味着可以用一个 64 位有符号整数来保存面积结果。
 * 
 * 
 */

// @lc code=start
var rectangleArea = function (rectangles) {
    const sides = [];
    for (const [x1, y1, x2, y2] of rectangles) {
        const segment = [y1, y2];
        sides.push({ isLeft: true, x: x1, segment });
        sides.push({ isLeft: false, x: x2, segment });
    }
    sides.sort((s1, s2) => s1.x - s2.x);

    const segments = [];
    let area = 0n;
    let prevX = 0;
    for (const { isLeft, x, segment } of sides) {
        if (x != prevX) {
            area += calcPartArea(x);
            prevX = x;
        }
        if (isLeft) {
            insertSegment(segment);
        }
        else {
            removeSegment(segment);
        }
    }

    return area % 1000000007n;

    function insertSegment(segment) {
        const [start, end] = segment;
        const i = segments.findIndex(segment => start < segment[0] || (start == segment[0] && end > segment[1]));
        if (i == -1) {
            segments.push(segment);
        }
        else {
            segments.splice(i, 0, segment);
        }
    }

    function removeSegment(segment) {
        const i = segments.indexOf(segment);
        if (i != -1) {
            segments.splice(i, 1);
        }
    }

    function calcPartArea(x) {
        const combinedSegments = [];
        for (const segment of segments) {
            if (combinedSegments.length == 0) {
                combinedSegments.push(segment.slice());
            }
            else {
                const prevSegment = combinedSegments[combinedSegments.length - 1];
                const end1 = prevSegment[1];
                const [start2, end2] = segment;
                switch (true) {
                    case start2 < end1:
                        prevSegment[1] = Math.max(end1, end2);
                        break;
                    case start2 == end1:
                        prevSegment[1] = end2;
                        break;
                    case start2 > end1:
                        combinedSegments.push(segment.slice());
                        break;
                }
            }
        }
        const width = BigInt(x - prevX);
        return combinedSegments
            .map(([start, end]) => BigInt(end - start))
            .reduce((area, height) => area + width * height, 0n);
    }
};

// @lc code=end

