/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 *
 * https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/description/
 *
 * algorithms
 * Medium (52.35%)
 * Likes:    574
 * Dislikes: 0
 * Total Accepted:    77K
 * Total Submissions: 146.8K
 * Testcase Example:  '"23"'
 *
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。
 * 
 * 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
 * 
 * 
 * 
 * 示例:
 * 
 * 输入："23"
 * 输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 * 
 * 
 * 说明:
 * 尽管上面的答案是按字典序排列的，但是你可以任意选择答案输出的顺序。
 * 
 */

// @lc code=start

var mapV = {
    2:['a','b','c'],
    3:['d','e','f'],
    4:['g','h','i'],
    5:['j','k','l'],
    6:['m','n','o'],
    7:['p','q','r','s'],
    8:['t','u','v'],
    9:['w','x','y','z'],
}
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(digits.length == 0) return []
    let size = digits.length

    let dp = mapV[digits[0]].map(val=>val)
    
    for (let i = 1; i < size; i++) {
        const c = digits[i];
        const d = mapV[c]
        let backup = dp.map(val=>val)
        dp = []
        for(const s of backup){
            for(const e of d){
                dp.push(s+e)
            }        
        }
    }
    return dp
}
//  var letterCombinations = function(digits) {

//     if(digits.length == 0) return []
    
//     if(digits.length == 1){
//         return mapV[digits]
//     }

//     return applyCharacters(mapV[digits.substring(0,1)],letterCombinations(digits.substring(1)))
// };
// var applyCharacters = function(chars,lst){
//     let containers = []
//     for(const c of chars){
//         for(let i=0;i < lst.length;i++){
//             containers.push(c + lst[i])
//         }
//     }
//     return containers
// }
// @lc code=end
let q = letterCombinations('27243429')
console.log(q)
