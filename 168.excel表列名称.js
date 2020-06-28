/*
 * @lc app=leetcode.cn id=168 lang=javascript
 *
 * [168] Excel表列名称
 *
 * https://leetcode-cn.com/problems/excel-sheet-column-title/description/
 *
 * algorithms
 * Easy (36.48%)
 * Likes:    231
 * Dislikes: 0
 * Total Accepted:    28.5K
 * Total Submissions: 75.1K
 * Testcase Example:  '1'
 *
 * 给定一个正整数，返回它在 Excel 表中相对应的列名称。
 * 
 * 例如，
 * 
 * ⁠   1 -> A
 * ⁠   2 -> B
 * ⁠   3 -> C
 * ⁠   ...
 * ⁠   26 -> Z
 * ⁠   27 -> AA
 * ⁠   28 -> AB 
 * ⁠   ...
 * 
 * 
 * 示例 1:
 * 
 * 输入: 1
 * 输出: "A"
 * 
 * 
 * 示例 2:
 * 
 * 输入: 28
 * 输出: "AB"
 * 
 * 
 * 示例 3:
 * 
 * 输入: 701
 * 输出: "ZY"
 * 
 * 
 */

// @lc code=start
var convertToTitle = function(n) {
    let buf = ""
    let assciA = 64
    let rem
    while(n > 0){
        n--

        rem = n % 26 + 1

        buf =  String.fromCharCode(rem + assciA).concat(buf)
        
        n = Math.floor((n / 26))
        
    }

    return buf
};
// @lc code=end
console.log(convertToTitle(26 * 26 + 26))
