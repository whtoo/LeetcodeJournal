/*
 * @lc app=leetcode.cn id=493 lang=javascript
 *
 * [493] 翻转对
 *
 * https://leetcode-cn.com/problems/reverse-pairs/description/
 *
 * algorithms
 * Hard (22.34%)
 * Likes:    103
 * Dislikes: 0
 * Total Accepted:    5.2K
 * Total Submissions: 19.7K
 * Testcase Example:  '[1,3,2,3,1]'
 *
 * 给定一个数组 nums ，如果 i < j 且 nums[i] > 2*nums[j] 我们就将 (i, j) 称作一个重要翻转对。
 * 
 * 你需要返回给定数组中的重要翻转对的数量。
 * 
 * 示例 1:
 * 
 * 
 * 输入: [1,3,2,3,1]
 * 输出: 2
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: [2,4,3,5,1]
 * 输出: 3
 * 
 * 
 * 注意:
 * 
 * 
 * 给定数组的长度不会超过50000。
 * 输入数组中的所有数字都在32位整数的表示范围内。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function(nums) {
    let n = nums.length;
    let c = new Array(n + 1).fill(0);
    let count = 0;
    let lowbit = (x) => {
        return x&(-x);
    }
    let getSum = (x) => {
        let sum = 0;
        while(x <= n){
            sum += c[x];
            x += lowbit(x);
        }
        return sum;
    }
    let update = (x) => {
        while(x){
            c[x] += 1;
            x -= lowbit(x);
        }
    }
    let count_i = (val) => {
        let l = 0,r = sortArr.length - 1,m = 0;
        while(l <= r){
            m = l + ((r - l) >> 1);
            if(sortArr[m] >= val){
                r = m - 1;
            }else{
                l = m + 1;
            }
        }
        return l + 1;
    }
    let sortArr = nums.slice().sort((a,b) => a - b);
    for(let i = 0;i < nums.length;i++){
        count += getSum(count_i(2 * nums[i] + 1));
        update(count_i(nums[i]));
    }
    return count;

};
// @lc code=end

console.log(reversePairs([2,4,3,5,1]))