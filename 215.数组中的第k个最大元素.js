/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 *
 * https://leetcode-cn.com/problems/kth-largest-element-in-an-array/description/
 *
 * algorithms
 * Medium (60.95%)
 * Likes:    607
 * Dislikes: 0
 * Total Accepted:    167.5K
 * Total Submissions: 260K
 * Testcase Example:  '[3,2,1,5,6,4]\n2'
 *
 * 在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
 * 
 * 示例 1:
 * 
 * 输入: [3,2,1,5,6,4] 和 k = 2
 * 输出: 5
 * 
 * 
 * 示例 2:
 * 
 * 输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
 * 输出: 4
 * 
 * 说明: 
 * 
 * 你可以假设 k 总是有效的，且 1 ≤ k ≤ 数组的长度。
 * 
 */

// @lc code=start

let quick = (arr,left,right) => {
    let index;
    // 如果 左指针 在 右指针的左侧
    if(left < right){
        // 划分的哨兵元素
        index = partition(arr,left,right)
        if(left < index - 1){
            quick(arr,left,index - 1)
        }
        if(index < right){
            quick(arr,index,right)
        }
    }
}
let partition = (arr,left,right) => {
    var datum = arr[Math.floor(Math.random() * (right - left + 1)) + left],
    i = left,
    j = right;
    while(i <= j){
        while(arr[i] < datum){
            i++
        }
        while(arr[j] > datum){
            j--
        }
        if(i <= j){
            swap(arr,i,j)
            i += 1
            j -= 1
        }
    }
    return i

}
let swap = (arr,i,j)=>{
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    quick(nums,0,nums.length-1)
    return nums[nums.length - k]
};
// @lc code=end

let arr = [1,3,2,5,4]
quick(arr,0,arr.length-1)
console.log(arr)