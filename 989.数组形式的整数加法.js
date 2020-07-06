/*
 * @lc app=leetcode.cn id=989 lang=javascript
 *
 * [989] 数组形式的整数加法
 *
 * https://leetcode-cn.com/problems/add-to-array-form-of-integer/description/
 *
 * algorithms
 * Easy (42.89%)
 * Likes:    62
 * Dislikes: 0
 * Total Accepted:    13.9K
 * Total Submissions: 31.5K
 * Testcase Example:  '[1,2,0,0]\n34'
 *
 * 对于非负整数 X 而言，X 的数组形式是每位数字按从左到右的顺序形成的数组。例如，如果 X = 1231，那么其数组形式为 [1,2,3,1]。
 * 
 * 给定非负整数 X 的数组形式 A，返回整数 X+K 的数组形式。
 * 
 * 
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：A = [1,2,0,0], K = 34
 * 输出：[1,2,3,4]
 * 解释：1200 + 34 = 1234
 * 
 * 
 * 示例 2：
 * 
 * 输入：A = [2,7,4], K = 181
 * 输出：[4,5,5]
 * 解释：274 + 181 = 455
 * 
 * 
 * 示例 3：
 * 
 * 输入：A = [2,1,5], K = 806
 * 输出：[1,0,2,1]
 * 解释：215 + 806 = 1021
 * 
 * 
 * 示例 4：
 * 
 * 输入：A = [9,9,9,9,9,9,9,9,9,9], K = 1
 * 输出：[1,0,0,0,0,0,0,0,0,0,0]
 * 解释：9999999999 + 1 = 10000000000
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= A.length <= 10000
 * 0 <= A[i] <= 9
 * 0 <= K <= 10000
 * 如果 A.length > 1，那么 A[0] != 0
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function(A, K) {
    let KArr = []
    while(K != 0){
        KArr.unshift(K % 10)
        K = K / 10 | 0
    }
    let carry = 0
    let ret = 0
    let buf = []

    for(let i = A.length - 1, j = KArr.length - 1;i>=0 || j>= 0 ;){
        let kVal = 0
        kVal = KArr[j] != undefined? KArr[j]: 0
        vVal = A[i] != undefined? A[i]:0
        ret = vVal + kVal + carry
        carry = ret / 10 | 0
        ret %= 10
        buf.unshift(ret)
        if(i >= 0)--i
        if(j >= 0)--j
    }

    if(carry > 0) buf.unshift(1)

    return buf    
};
// @lc code=end

console.log(addToArrayForm([9]
    ,516))