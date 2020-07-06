/*
 * @lc app=leetcode.cn id=970 lang=javascript
 *
 * [970] 强整数
 *
 * https://leetcode-cn.com/problems/powerful-integers/description/
 *
 * algorithms
 * Easy (38.84%)
 * Likes:    35
 * Dislikes: 0
 * Total Accepted:    6.8K
 * Total Submissions: 17.1K
 * Testcase Example:  '2\n3\n10'
 *
 * 给定两个正整数 x 和 y，如果某一整数等于 x^i + y^j，其中整数 i >= 0 且 j >= 0，那么我们认为该整数是一个强整数。
 * 
 * 返回值小于或等于 bound 的所有强整数组成的列表。
 * 
 * 你可以按任何顺序返回答案。在你的回答中，每个值最多出现一次。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：x = 2, y = 3, bound = 10
 * 输出：[2,3,4,5,7,9,10]
 * 解释： 
 * 2 = 2^0 + 3^0
 * 3 = 2^1 + 3^0
 * 4 = 2^0 + 3^1
 * 5 = 2^1 + 3^1
 * 7 = 2^2 + 3^1
 * 9 = 2^3 + 3^0
 * 10 = 2^0 + 3^2
 * 
 * 
 * 示例 2：
 * 
 * 输入：x = 3, y = 5, bound = 15
 * 输出：[2,4,6,8,10,14]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= x <= 100
 * 1 <= y <= 100
 * 0 <= bound <= 10^6
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} y
 * @param {number} bound
 * @return {number[]}
 */
var powerfulIntegers = function(x, y, bound) {
    const cacheXPow = []
    const cacheYPow = []
    let xCnt = Math.log(bound) / Math.log(x) | 0 + 1
    let yCnt = Math.log(bound) / Math.log(y) | 0 + 1
    const max = Math.max(xCnt,yCnt)
    for(let i = 0;i <= max;i++){
        cacheXPow.push(x ** i)
        cacheYPow.push(y ** i)
    }

    let ret = new Set()

    for(let i =0;i <= xCnt;i++){
        for(let j=0;j <= yCnt;j++){
            const num = cacheXPow[i] + cacheYPow[j]
            if(num <= bound){
                ret.add(num)
            }
        }
    }
   
    let res =[]
    ret.forEach((val)=>res.push(val))
    return res.sort((a,b)=>a-b)
};
// @lc code=end

powerfulIntegers(3,5,15)