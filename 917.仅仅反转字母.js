/*
 * @lc app=leetcode.cn id=917 lang=javascript
 *
 * [917] 仅仅反转字母
 *
 * https://leetcode-cn.com/problems/reverse-only-letters/description/
 *
 * algorithms
 * Easy (52.96%)
 * Likes:    48
 * Dislikes: 0
 * Total Accepted:    13.8K
 * Total Submissions: 24.9K
 * Testcase Example:  '"ab-cd"'
 *
 * 给定一个字符串 S，返回 “反转后的” 字符串，其中不是字母的字符都保留在原地，而所有字母的位置发生反转。
 * 
 * 
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入："ab-cd"
 * 输出："dc-ba"
 * 
 * 
 * 示例 2：
 * 
 * 输入："a-bC-dEf-ghIj"
 * 输出："j-Ih-gfE-dCba"
 * 
 * 
 * 示例 3：
 * 
 * 输入："Test1ng-Leet=code-Q!"
 * 输出："Qedo1ct-eeLg=ntse-T!"
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * S.length <= 100
 * 33 <= S[i].ASCIIcode <= 122 
 * S 中不包含 \ or "
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {
    const isAlpha = (ch) => {
        if(ch == undefined) return false
        const code = ch.charCodeAt(0) 
        if( (code >= 65 && code <= 90) || (code >= 97 && code <= 122)) return true
        else return false
    }
    let ret = []
    for(const v of S){
        ret.push(v)
    }
    for(let i =0,j= ret.length - 1;i <= j;){
        while(!isAlpha(ret[i]) && i <= j) {
            i++
        }
        while(!isAlpha(ret[j]) && i <= j) j--
        if(i > j) break
        let tmp = ret[i]
        ret[i] = ret[j]
        ret[j] = tmp
        i++
        j--
    }
    return ret.join('')
};
// @lc code=end

console.log(reverseOnlyLetters("7_28]"))