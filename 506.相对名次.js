/*
 * @lc app=leetcode.cn id=506 lang=javascript
 *
 * [506] 相对名次
 *
 * https://leetcode-cn.com/problems/relative-ranks/description/
 *
 * algorithms
 * Easy (53.26%)
 * Likes:    49
 * Dislikes: 0
 * Total Accepted:    9.6K
 * Total Submissions: 17.8K
 * Testcase Example:  '[5,4,3,2,1]'
 *
 * 给出 N 名运动员的成绩，找出他们的相对名次并授予前三名对应的奖牌。前三名运动员将会被分别授予 “金牌”，“银牌” 和“ 铜牌”（"Gold
 * Medal", "Silver Medal", "Bronze Medal"）。
 * 
 * (注：分数越高的选手，排名越靠前。)
 * 
 * 示例 1:
 * 
 * 
 * 输入: [5, 4, 3, 2, 1]
 * 输出: ["Gold Medal", "Silver Medal", "Bronze Medal", "4", "5"]
 * 解释: 前三名运动员的成绩为前三高的，因此将会分别被授予 “金牌”，“银牌”和“铜牌” ("Gold Medal", "Silver Medal"
 * and "Bronze Medal").
 * 余下的两名运动员，我们只需要通过他们的成绩计算将其相对名次即可。
 * 
 * 提示:
 * 
 * 
 * N 是一个正整数并且不会超过 10000。
 * 所有运动员的成绩都不相同。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function(nums) {
    const n = nums.length
    let sortLst = nums.map(val=>val)
    sortLst = sortLst.sort((a,b) => b-a)
    const map = new Map()
    for(let i = 0;i < n;i++){
        map.set(sortLst[i],i)
    }
    let buf = new Array(n)
    const gradeRP = ["Gold Medal", "Silver Medal", "Bronze Medal"]
    for(let i = 0;i < n;i++){
        const grade = nums[i]
        const order = map.get(grade)
        if(order >= 3){
            buf[i] = "" + (order+1)
        } else {
            buf[i] = gradeRP[order]
        }
    }
    return buf
};
// @lc code=end
console.log(findRelativeRanks([10,3,8,9,4]))
