/*
 * @lc app=leetcode.cn id=859 lang=javascript
 *
 * [859] 亲密字符串
 *
 * https://leetcode-cn.com/problems/buddy-strings/description/
 *
 * algorithms
 * Easy (27.82%)
 * Likes:    95
 * Dislikes: 0
 * Total Accepted:    14.3K
 * Total Submissions: 49K
 * Testcase Example:  '"ab"\n"ba"'
 *
 * 给定两个由小写字母构成的字符串 A 和 B ，只要我们可以通过交换 A 中的两个字母得到与 B 相等的结果，就返回 true ；否则返回 false
 * 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入： A = "ab", B = "ba"
 * 输出： true
 * 
 * 
 * 示例 2：
 * 
 * 输入： A = "ab", B = "ab"
 * 输出： false
 * 
 * 
 * 示例 3:
 * 
 * 输入： A = "aa", B = "aa"
 * 输出： true
 * 
 * 
 * 示例 4：
 * 
 * 输入： A = "aaaaaaabc", B = "aaaaaaacb"
 * 输出： true
 * 
 * 
 * 示例 5：
 * 
 * 输入： A = "", B = "aa"
 * 输出： false
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 <= A.length <= 20000
 * 0 <= B.length <= 20000
 * A 和 B 仅由小写字母构成。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function(A, B) {
    var LenA = A.length;
    var LenB = B.length;
    // 长度不等 false
    if (A.length !== B.length) { return false; }
    // 如果字符串相等，看字符串中相同的字符个数是否>=2
    if (A === B) {
        // 求A中相同字符的个数
        return A.length - (new Set(A.split('')).size) >= 1;
    }
    // 如果字符串不等，看不同的部分字符个数是否==2
    var diffsA = [];
    var diffsB = [];
    for (var i = 0; i < LenA; i ++) {
        if (A[i] !== B[i]) {
            diffsA.push(A[i]);
            diffsB.push(B[i]);
        }
    }
    if (diffsA.length !== 2) { return false; }
    return diffsA.join('') === diffsB.reverse().join('');

};
// @lc code=end

