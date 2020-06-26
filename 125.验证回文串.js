/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 *
 * https://leetcode-cn.com/problems/valid-palindrome/description/
 *
 * algorithms
 * Easy (42.29%)
 * Likes:    239
 * Dislikes: 0
 * Total Accepted:    135.8K
 * Total Submissions: 297.3K
 * Testcase Example:  '"A man, a plan, a canal: Panama"'
 *
 * 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
 * 
 * 说明：本题中，我们将空字符串定义为有效的回文串。
 * 
 * 示例 1:
 * 
 * 输入: "A man, a plan, a canal: Panama"
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: "race a car"
 * 输出: false
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */

 const checkAlphabet = function(x){
     return (x <= 57 && x >= 48) || (x <= 90 && x >= 65) || (x <= 122 && x >= 97);
 }

var isPalindrome = function(str) {
    const s = str.replace(/[^0-9a-zA-Z]/g, '').toLowerCase();
    const n = s.length;
    let left = 0;
    let right = n - 1;
    while (left < right) {
      if (s[left] != s[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true
}
// @lc code=end
console.log(isPalindrome("A man, a plan, a canal: Panama"))
