/*
 * @lc app=leetcode.cn id=409 lang=javascript
 *
 * [409] 最长回文串
 *
 * https://leetcode-cn.com/problems/longest-palindrome/description/
 *
 * algorithms
 * Easy (51.80%)
 * Likes:    197
 * Dislikes: 0
 * Total Accepted:    52.1K
 * Total Submissions: 94.5K
 * Testcase Example:  '"abccccdd"'
 *
 * 给定一个包含大写字母和小写字母的字符串，找到通过这些字母构造成的最长的回文串。
 * 
 * 在构造过程中，请注意区分大小写。比如 "Aa" 不能当做一个回文字符串。
 * 
 * 注意:
 * 假设字符串的长度不会超过 1010。
 * 
 * 示例 1: 
 * 
 * 
 * 输入:
 * "abccccdd"
 * 
 * 输出:
 * 7
 * 
 * 解释:
 * 我们可以构造的最长的回文串是"dccaccd", 它的长度是 7。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    if(s.length <= 1) return s.length
    let map = new Map()

    for(const ch of s){
        if(map.has(ch)){
            let cnt = map.get(ch)
            map.set(ch,++cnt)
        } else {
            map.set(ch,1)
        }
    }
    let cnt = 0
    let odd = false
    map.forEach((val,key)=>{
        if(val % 2){
            cnt += val - 1
            map.set(key,1)
            odd = true
        } else{
            cnt += val
            map.set(key,0)
        }
    })

    return odd?cnt+1:cnt
};
// @lc code=end

console.log(longestPalindrome("cc"))