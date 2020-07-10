/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 *
 * https://leetcode-cn.com/problems/multiply-strings/description/
 *
 * algorithms
 * Medium (41.53%)
 * Likes:    379
 * Dislikes: 0
 * Total Accepted:    71.9K
 * Total Submissions: 169.2K
 * Testcase Example:  '"2"\n"3"'
 *
 * 给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。
 * 
 * 示例 1:
 * 
 * 输入: num1 = "2", num2 = "3"
 * 输出: "6"
 * 
 * 示例 2:
 * 
 * 输入: num1 = "123", num2 = "456"
 * 输出: "56088"
 * 
 * 说明：
 * 
 * 
 * num1 和 num2 的长度小于110。
 * num1 和 num2 只包含数字 0-9。
 * num1 和 num2 均不以零开头，除非是数字 0 本身。
 * 不能使用任何标准库的大数类型（比如 BigInteger）或直接将输入转换为整数来处理。
 * 
 * 
 */

// @lc code=start
const add = function(n1,n2) {
    let min = 0
    let max = 0
    if(n1.length >= n2.length){
        max = n1
        min = n2
    } else {
        max = n2
        min = n1
    }
    let carry = 0
    let acc = 0
    let reg = ""
    for(let i = max.length - 1,j = min.length - 1;i >= 0;i--,j--){
        let a = parseInt(max[i])
        let b = (min[j] != undefined)?parseInt(min[j]):0
        acc = a + b + carry
        carry = acc / 10 | 0
        acc = acc % 10
        reg =  acc + reg
    }
    if(carry > 0){
        reg = carry + reg
    }
    return reg
}
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(n1, n2) {
    // 乘法计算规则
    if(n1 === '0' || n2 === '0') return "0"
    // let minNum = 0
    // let maxNum = 0
    // if(n1.length >= n2.length){
    //     maxNum = n1
    //     minNum = n2
    // } else {
    //     maxNum = n2
    //     minNum = n1
    // }
    // let buf = ""
    // let carry = 0
    // let acc = ""
    // for(let i = maxNum.length - 1;i >= 0 ;i--){
    //     let a = parseInt(maxNum[i])
    //     for(let j = minNum.length - 1; j >= 0 ;j--){
    //         let b = parseInt(minNum[j])
    //         let ret = a * b + carry
    //         carry = ret / 10 | 0
    //         ret = ret % 10
    //         buf = ret + "" + buf
    //     }

    //     buf = buf + "0".repeat(maxNum.length - i - 1)
    //     if(carry > 0){
    //         buf = carry + buf
    //         carry = 0
    //     }
    //     acc = add(acc,buf)
    //     buf = ""
    // }

    // return acc
    const zeroCode = '0'.charCodeAt(0)
    let res = new Array(n1.length + n2.length).fill(0)
    for(let i = n1.length-1;i >= 0;i--){
        const a = n1.charCodeAt(i) - zeroCode
        for(let j = n2.length-1;j >= 0;j--){
            const b = n2.charCodeAt(j) - zeroCode
            const sum = (res[i+j+1] + a * b)
            res[i+j+1] = sum % 10
            res[i+j] += (sum / 10 | 0)
        }
    }
    let result = ''
    for(let i = 0; i < res.length;i++){
        if(i == 0 && res[i] == 0) continue
        result += res[i]
    }
    return result
};
// @lc code=end

console.log(multiply("15221329","1212155"))