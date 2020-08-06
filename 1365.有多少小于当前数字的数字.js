/*
 * @lc app=leetcode.cn id=1365 lang=javascript
 *
 * [1365] 有多少小于当前数字的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let bucktes = new Array(101).fill(0)
    for(const val of nums)[
        bucktes[val]++
    ]
    let dominiantArr = new Array(101).fill(0)
    for(let i = 1;i < bucktes.length;++i){
        dominiantArr[i] = dominiantArr[i-1] + bucktes[i-1]
    }
    let ret = new Array(nums.length).fill(0)
    for(let i = 0;i < nums.length;++i){
        ret[i] = dominiantArr[nums[i]]
    }
    return ret
};
// @lc code=end

console.log(smallerNumbersThanCurrent([8,1,2,2,3]))
console.log(smallerNumbersThanCurrent([6,5,4,8]))
console.log(smallerNumbersThanCurrent([7,7,7,7]))