/*
 * @lc app=leetcode.cn id=680 lang=javascript
 *
 * [680] 验证回文字符串 Ⅱ
 *
 * https://leetcode-cn.com/problems/valid-palindrome-ii/description/
 *
 * algorithms
 * Easy (34.99%)
 * Likes:    218
 * Dislikes: 0
 * Total Accepted:    44.6K
 * Total Submissions: 112.9K
 * Testcase Example:  '"aba"'
 *
 * 给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。
 * 
 * 示例 1:
 * 
 * 
 * 输入: "aba"
 * 输出: True
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: "abca"
 * 输出: True
 * 解释: 你可以删除c字符。
 * 
 * 
 * 注意:
 * 
 * 
 * 字符串只包含从 a-z 的小写字母。字符串的最大长度是50000。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let low = 0, high = s.length - 1
    while (low < high){
        let c1 = s.charAt(low)
        let c2 = s.charAt(high)
        if(c1 == c2){
            low++;
            high--;
        } else {
            let flag1 = true;
            let flag2 = true;
            for(let i = low,j = high -1;i < j;i++,j--){
                let c3 = s.charAt(i)
                let c4 = s.charAt(j)
                if(c3 != c4){
                    flag1 = false;
                    break
                }
            }
            for(let i = low+1,j = high;i < j;i++,j--){
                let c3 = s.charAt(i)
                let c4 = s.charAt(j)
                if(c3 != c4){
                    flag2 = false;
                    break
                }
            }
            return flag1 || flag2
        }
    }
    return true
};
// @lc code=end

console.log(validPalindrome("abca"))