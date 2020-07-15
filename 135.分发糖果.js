/*
 * @lc app=leetcode.cn id=135 lang=javascript
 *
 * [135] 分发糖果
 *
 * https://leetcode-cn.com/problems/candy/description/
 *
 * algorithms
 * Hard (41.16%)
 * Likes:    233
 * Dislikes: 0
 * Total Accepted:    24.4K
 * Total Submissions: 55.5K
 * Testcase Example:  '[1,0,2]'
 *
 * 老师想给孩子们分发糖果，有 N 个孩子站成了一条直线，老师会根据每个孩子的表现，预先给他们评分。
 * 
 * 你需要按照以下要求，帮助老师给这些孩子分发糖果：
 * 
 * 
 * 每个孩子至少分配到 1 个糖果。
 * 相邻的孩子中，评分高的孩子必须获得更多的糖果。
 * 
 * 
 * 那么这样下来，老师至少需要准备多少颗糖果呢？
 * 
 * 示例 1:
 * 
 * 输入: [1,0,2]
 * 输出: 5
 * 解释: 你可以分别给这三个孩子分发 2、1、2 颗糖果。
 * 
 * 
 * 示例 2:
 * 
 * 输入: [1,2,2]
 * 输出: 4
 * 解释: 你可以分别给这三个孩子分发 1、2、1 颗糖果。
 * ⁠    第三个孩子只得到 1 颗糖果，这已满足上述两个条件。
 * 
 */

// @lc code=start
/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    // 局部最优解
    let len = ratings.length
    let arr = new Array(len).fill(0)
    for (let i=1; i<len; i++) { 
        // 第1轮左规则从左到右遍历：比左边的小朋友分数高就多发一颗糖果
        if (ratings[i] > ratings[i-1]) {
            arr[i] = arr[i-1] + 1
        }
    }
    for (let j=len-2; j>=0; j--) { 
        // 第2轮右规则从右到左遍历 + 过滤第1轮是否糖果已经比右邻多了，多了则已经满足条件不处理即可。
        if (ratings[j] > ratings[j+1] && arr[j] <= arr[j+1]) {
            arr[j] = arr[j+1] + 1
        }
    }
    return arr.reduce((a, b) => {
        return a+b
    }, 0) + len // 加上基础值每个人都为1，保证即使有眼泪也要默默忍住~
};
// @lc code=end

