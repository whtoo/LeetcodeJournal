/*
 * @lc app=leetcode.cn id=941 lang=javascript
 *
 * [941] 有效的山脉数组
 *
 * https://leetcode-cn.com/problems/valid-mountain-array/description/
 *
 * algorithms
 * Easy (34.91%)
 * Likes:    48
 * Dislikes: 0
 * Total Accepted:    10.8K
 * Total Submissions: 30.3K
 * Testcase Example:  '[2,1]'
 *
 * 给定一个整数数组 A，如果它是有效的山脉数组就返回 true，否则返回 false。
 * 
 * 让我们回顾一下，如果 A 满足下述条件，那么它是一个山脉数组：
 * 
 * 
 * A.length >= 3
 * 在 0 < i < A.length - 1 条件下，存在 i 使得：
 * 
 * A[0] < A[1] < ... A[i-1] < A[i] 
 * A[i] > A[i+1] > ... > A[A.length - 1]
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：[2,1]
 * 输出：false
 * 
 * 
 * 示例 2：
 * 
 * 输入：[3,5,5]
 * 输出：false
 * 
 * 
 * 示例 3：
 * 
 * 输入：[0,3,2,1]
 * 输出：true
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 <= A.length <= 10000
 * 0 <= A[i] <= 10000 
 * 
 * 
 * 
 * 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function(A) {
    // if(A.length == 0) return false
    // let max = Math.max(...A)
    // let maxIdx = A.findIndex((val)=>max == val)
    
    // if(maxIdx == 0 || maxIdx == A.length-1) return false
    // let increasingTurn = true
    // for(let i = 0; i < A.length-1;i++){
    //     if(i == maxIdx) increasingTurn = false
    //     if(increasingTurn){
    //         if(i < maxIdx){
    //             if(A[i] >= A[i+1]) return false
    //         }
    //     } else {
    //         if(i >= maxIdx){
    //             if(A[i] <= A[i+1]) return false
    //         }
    //     }
    // }

    // return true
    const N = A.length
    let i = 0
    while(i+1 < N && A[i] < A[i+1]) i++
    if(i == 0 || i == N-1) return false
    while(i+1 <N && A[i] > A[i+1]) i++

    return i == N-1
};
// @lc code=end

console.log(validMountainArray([3,5,5]))