/*
 * @lc app=leetcode.cn id=306 lang=javascript
 *
 * [306] 累加数
 *
 * https://leetcode-cn.com/problems/additive-number/description/
 *
 * algorithms
 * Medium (31.45%)
 * Likes:    51
 * Dislikes: 0
 * Total Accepted:    3.9K
 * Total Submissions: 12.2K
 * Testcase Example:  '"112358"'
 *
 * 累加数是一个字符串，组成它的数字可以形成累加序列。
 * 
 * 一个有效的累加序列必须至少包含 3 个数。除了最开始的两个数以外，字符串中的其他数都等于它之前两个数相加的和。
 * 
 * 给定一个只包含数字 '0'-'9' 的字符串，编写一个算法来判断给定输入是否是累加数。
 * 
 * 说明: 累加序列里的数不会以 0 开头，所以不会出现 1, 2, 03 或者 1, 02, 3 的情况。
 * 
 * 示例 1:
 * 
 * 输入: "112358"
 * 输出: true 
 * 解释: 累加序列为: 1, 1, 2, 3, 5, 8 。1 + 1 = 2, 1 + 2 = 3, 2 + 3 = 5, 3 + 5 = 8
 * 
 * 
 * 示例 2:
 * 
 * 输入: "199100199"
 * 输出: true 
 * 解释: 累加序列为: 1, 99, 100, 199。1 + 99 = 100, 99 + 100 = 199
 * 
 * 进阶:
 * 你如何处理一个溢出的过大的整数输入?
 * 
 */

// @lc code=start
/**
 * 
 * @param {number} start 
 * @param {number} len 
 * @param {string} num 
 */
var isValidNumber = function(start,len,num){
    if(num[start] == '0' && len > 1){
        return false
    }
    return true
}
/**
 * @param {string} num
 * @return {boolean}
 */
var isAdditiveNumber = function (num) {
    let n = num.length
    let sub1
    let sub2
    /**
     * 
     * @param {string} sub1 
     * @param {string} sub2 
     * @param {string} num 
     */
    var isVaid = function(sub1,sub2,num){
        while(num.length > 0){
            let bk = sub1
            sub1 = sub2
            sub2 =  (parseInt(bk) + parseInt(sub2)).toString()

            if(!num.startsWith(sub2)) return false
            num = num.slice(sub2.length)
        }
        return true
    }

    for(let i = 1;i < Math.floor(n / 2) + 1;i++){
        if(num[0] == '0' && i > 1) return false
        sub1 = num.slice(0,i)
        for(let j =1;j < n;j++){
            if(Math.max(i,j) > n-i-j) break
            if(num[i] == '0' && j > 1) break
            sub2 = num.slice(i,i+j)
            if(isVaid(sub1,sub2,num.slice(i+j))) return true
        }
    }
    return false
};
// @lc code=end
let ret = isAdditiveNumber("11102131")
console.log(ret)