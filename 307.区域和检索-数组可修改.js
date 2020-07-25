/*
 * @lc app=leetcode.cn id=307 lang=javascript
 *
 * [307] 区域和检索 - 数组可修改
 *
 * https://leetcode-cn.com/problems/range-sum-query-mutable/description/
 *
 * algorithms
 * Medium (53.48%)
 * Likes:    146
 * Dislikes: 0
 * Total Accepted:    11.5K
 * Total Submissions: 20.5K
 * Testcase Example:  '["NumArray","sumRange","update","sumRange"]\n[[[1,3,5]],[0,2],[1,2],[0,2]]'
 *
 * 给定一个整数数组  nums，求出数组从索引 i 到 j  (i ≤ j) 范围内元素的总和，包含 i,  j 两点。
 * 
 * update(i, val) 函数可以通过将下标为 i 的数值更新为 val，从而对数列进行修改。
 * 
 * 示例:
 * 
 * Given nums = [1, 3, 5]
 * 
 * sumRange(0, 2) -> 9
 * update(1, 2)
 * sumRange(0, 2) -> 8
 * 
 * 
 * 说明:
 * 
 * 
 * 数组仅可以在 update 函数下进行修改。
 * 你可以假设 update 函数与 sumRange 函数的调用次数是均匀分布的。
 * 
 * 
 */

// @lc code=start
function lowBit(x){
    return x & -x
}
/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this._nums = nums.map(val=>val)
    this._accArr = new Array(nums.length+1).fill(0)
    this.n = nums.length
    for(const [idx,n] of nums.entries()){
        this.add(idx+1,n)
    }
};
NumArray.prototype.add = function(i, val) {
    
   while(i <= this.n){
       this._accArr[i] += val;
       i += lowBit(i)
   }
};
/** 
 * @param {number} i 
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(i, val) {
    this.add(i+1,val - this._nums[i])
    this._nums[i] = val
};

NumArray.prototype.sum = function(x){
    let ret = 0
    if(x == 0) return ret
    while(x > 0){
        ret += this._accArr[x];
        x -= lowBit(x)
    }
    return ret
}
/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {

    return this.sum(j+1) - this.sum(i) 
}
/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(i,val)
 * var param_2 = obj.sumRange(i,j)
 */
// @lc code=end

var nums = [-1]
var obj = new NumArray(nums)
console.warn(obj.sumRange(0,0))
obj.update(0,1)
console.warn(obj.sumRange(0,0))