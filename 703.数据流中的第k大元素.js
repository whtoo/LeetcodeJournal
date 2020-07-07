/*
 * @lc app=leetcode.cn id=703 lang=javascript
 *
 * [703] 数据流中的第K大元素
 *
 * https://leetcode-cn.com/problems/kth-largest-element-in-a-stream/description/
 *
 * algorithms
 * Easy (42.12%)
 * Likes:    133
 * Dislikes: 0
 * Total Accepted:    22K
 * Total Submissions: 49.6K
 * Testcase Example:  '["KthLargest","add","add","add","add","add"]\n' +
  '[[3,[4,5,8,2]],[3],[5],[10],[9],[4]]'
 *
 * 设计一个找到数据流中第K大元素的类（class）。注意是排序后的第K大元素，不是第K个不同的元素。
 * 
 * 你的 KthLargest 类需要一个同时接收整数 k 和整数数组nums 的构造器，它包含数据流中的初始元素。每次调用
 * KthLargest.add，返回当前数据流中第K大的元素。
 * 
 * 示例:
 * 
 * 
 * int k = 3;
 * int[] arr = [4,5,8,2];
 * KthLargest kthLargest = new KthLargest(3, arr);
 * kthLargest.add(3);   // returns 4
 * kthLargest.add(5);   // returns 5
 * kthLargest.add(10);  // returns 5
 * kthLargest.add(9);   // returns 8
 * kthLargest.add(4);   // returns 8
 * 
 * 
 * 说明: 
 * 你可以假设 nums 的长度≥ k-1 且k ≥ 1。
 * 
 */

// @lc code=start
const swap = (arr,i1,i2) => {
    let temp = arr[i1]
    arr[i1] = arr[i2]
    arr[i2] = temp
}
/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.minHeap = [null]
    this.k = k
    for(let i = 0;i < nums.length;i++){
        this.add(nums[i])
    }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {

    if(this.minHeap.length <= this.k){
        //最小堆没满,放到最小堆
        this.minHeap.push(val)
        this.up(this.minHeap.length - 1)
    } else {
        if( val > this.minHeap[1]){
            // 新的元素比最小堆堆顶大,替换最小堆堆顶
            this.minHeap[1] = val
            this.down(1)
        }
        // 否则直接丢弃这歌元素
    }
    return this.minHeap[1]
};
/**
 * 最小堆上浮操作
 */
/// 在原型链中不能使用lambda代替function,不然this会丢失上下文
KthLargest.prototype.up = function(idx) {
    let parent = Math.floor(idx/2)
    if(parent >= 1 && this.minHeap[parent] > this.minHeap[idx]){
        swap(this.minHeap,parent,idx)
        this.up(parent)
    }
}
/**
 * 下沉操作
 * 
 */
KthLargest.prototype.down = function(idx) {
    let to = idx
    let left = idx * 2
    if(left < this.minHeap.length && this.minHeap[left] < this.minHeap[to]){
        to = left
    }
    let right = idx * 2 + 1
    if(right < this.minHeap.length && this.minHeap[right] < this.minHeap[to]){
        to = right
    }
    if(to != idx){
        swap(this.minHeap, to, idx)
        this.down(to)
    }
}
/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
// @lc code=end
var obj = new KthLargest(3,[4,5,8,2])
var p = obj.add(1)
