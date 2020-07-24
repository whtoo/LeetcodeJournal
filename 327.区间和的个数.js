/*
 * @lc app=leetcode.cn id=327 lang=javascript
 *
 * [327] 区间和的个数
 *
 * https://leetcode-cn.com/problems/count-of-range-sum/description/
 *
 * algorithms
 * Hard (32.12%)
 * Likes:    106
 * Dislikes: 0
 * Total Accepted:    4.4K
 * Total Submissions: 12.6K
 * Testcase Example:  '[-2,5,-1]\n-2\n2'
 *
 * 给定一个整数数组 nums，返回区间和在 [lower, upper] 之间的个数，包含 lower 和 upper。
 * 区间和 S(i, j) 表示在 nums 中，位置从 i 到 j 的元素之和，包含 i 和 j (i ≤ j)。
 * 
 * 说明:
 * 最直观的算法复杂度是 O(n^2) ，请在此基础上优化你的算法。
 * 
 * 示例:
 * 
 * 输入: nums = [-2,5,-1], lower = -2, upper = 2,
 * 输出: 3 
 * 解释: 3个区间分别是: [0,0], [2,2], [0,2]，它们表示的和分别为: -2, -1, 2。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
// sum[j] - sum[i] < [lower, upper]  (j > i) ==> sum[i] < [sum[j]-upper,sum[j]-lower] 
var countRangeSum = function(nums, lower, upper) {
    let n = nums.length;
    let sum = new Array(n+1).fill(0);
    let sumall = [];
    sum[0] = 0;
    sumall.push(0, lower, upper);
    for(let i = 1;i <= n;i ++) {
        sum[i] = sum[i-1] + nums[i-1];
        sumall.push(sum[i], sum[i]+lower, sum[i]+upper);
    }
    // 排序，方便离散化
    sumall.sort((a,b)=>{
        if (a < b) return -1;
        else if (a > b) return 1;
        else return 0;
    });
    // 离散化
    let mapping = new Map();
    let index = 1;
    mapping.set(sumall[0], 1);
    for (let i = 1;i < sumall.length;i ++) {
        if (sumall[i] === sumall[i-1]) continue;
        mapping.set(sumall[i], ++index);
    }
    // 树状数组操作
    let bit = new Array(mapping.size+1).fill(0);
    function update(bit, index, MAXLEN) {
        while(index <= MAXLEN) {
            bit[index] += 1;
            index += (index&(-index));
        }
    }
    function query(bit, index) {
        let s = 0;
        while(index > 0) {
            s += bit[index];
            index -= (index&(-index));
        }
        return s;
    }
    let ans = 0;
    for (let i = n; i >= 0;i --) {
        ans += (query(bit, mapping.get(sum[i]+upper)) - query(bit, mapping.get(sum[i]+lower)-1));
        update(bit, mapping.get(sum[i]), mapping.size);
    }
    return ans;
};
// @lc code=end

