/*
 * @lc app=leetcode.cn id=345 lang=javascript
 *
 * [345] 反转字符串中的元音字母
 *
 * https://leetcode-cn.com/problems/reverse-vowels-of-a-string/description/
 *
 * algorithms
 * Easy (48.97%)
 * Likes:    97
 * Dislikes: 0
 * Total Accepted:    38.5K
 * Total Submissions: 76.9K
 * Testcase Example:  '"hello"'
 *
 * 编写一个函数，以字符串作为输入，反转该字符串中的元音字母。
 * 
 * 示例 1:
 * 
 * 输入: "hello"
 * 输出: "holle"
 * 
 * 
 * 示例 2:
 * 
 * 输入: "leetcode"
 * 输出: "leotcede"
 * 
 * 说明:
 * 元音字母不包含字母"y"。
 * 
 */

// @lc code=start
/**
 * 
 * @param {string} e 
 */
const check = function(e){
    e = e.toLowerCase()
    return e == 'a' || e == 'e' || e == 'i' || e == 'o' || e == 'u'
}
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
   
    let buf = [];
    for(const c of s){
        buf.push(c.charAt(0))
    }
    for(let i = 0,j=s.length-1;i < j;){
        let tmp;
        if(check(buf[i]) && check(buf[j])){
            tmp = buf[i]
            buf[i] = buf[j]
            buf[j] = tmp
            i++
            j--
        } else if(!check(buf[i])) {
            i++
        } else if(!check(buf[j])) {
            j--
        }
    }
    return buf.join("")
};
// @lc code=end
console.log(reverseVowels("hello"))
