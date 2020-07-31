/*
 * @lc app=leetcode.cn id=632 lang=javascript
 *
 * [632] 最小区间
 *
 * https://leetcode-cn.com/problems/smallest-range-covering-elements-from-k-lists/description/
 *
 * algorithms
 * Hard (33.83%)
 * Likes:    112
 * Dislikes: 0
 * Total Accepted:    3.1K
 * Total Submissions: 7.8K
 * Testcase Example:  '[[4,10,15,24,26],[0,9,12,20],[5,18,22,30]]'
 *
 * 你有 k 个升序排列的整数数组。找到一个最小区间，使得 k 个列表中的每个列表至少有一个数包含在其中。
 * 
 * 我们定义如果 b-a < d-c 或者在 b-a == d-c 时 a < c，则区间 [a,b] 比 [c,d] 小。
 * 
 * 示例 1:
 * 
 * 
 * 输入:[[4,10,15,24,26], [0,9,12,20], [5,18,22,30]]
 * 输出: [20,24]
 * 解释: 
 * 列表 1：[4, 10, 15, 24, 26]，24 在区间 [20,24] 中。
 * 列表 2：[0, 9, 12, 20]，20 在区间 [20,24] 中。
 * 列表 3：[5, 18, 22, 30]，22 在区间 [20,24] 中。
 * 
 * 
 * 注意:
 * 
 * 
 * 给定的列表可能包含重复元素，所以在这里升序表示 >= 。
 * 1 <= k <= 3500
 * -10^5 <= 元素的值 <= 10^5
 * 对于使用Java的用户，请注意传入类型已修改为List<List<Integer>>。重置代码模板后可以看到这项改动。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var smallestRange = function(nums) {
    let points = [];
    for(let i = 0;i < nums.length;i++){
        for(let j = 0;j < nums[i].length;j++){
            points.push([nums[i][j],i]);
        }
    }
    points.sort((a,b) => a[0] - b[0]);
    let counts = new Array(nums.length).fill(0);
    let countUnique = 0,minStart = -1,minLen = Number.MAX_SAFE_INTEGER;
    for(let i = 0,j = 0;j < points.length;j++){
        if(counts[points[j][1]]++ === 0) countUnique++;
        while(countUnique === counts.length){
            if(points[j][0] - points[i][0] + 1 < minLen){
                minStart = points[i][0];
                minLen = points[j][0] - points[i][0] + 1;
            }
            let prev = points[i][0];
            while(i <= j && prev === points[i][0]){
                if(--counts[points[i++][1]] === 0) countUnique--;
            }
        }
    }
    return [minStart,minStart + minLen - 1];
};
// @lc code=end

console.log(smallestRange([[4,10,15,24,26], [0,9,12,20], [5,18,22,30]]))