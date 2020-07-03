/*
 * @lc app=leetcode.cn id=541 lang=javascript
 *
 * [541] 反转字符串 II
 *
 * https://leetcode-cn.com/problems/reverse-string-ii/description/
 *
 * algorithms
 * Easy (51.63%)
 * Likes:    75
 * Dislikes: 0
 * Total Accepted:    16.9K
 * Total Submissions: 31.3K
 * Testcase Example:  '"abcdefg"\n2'
 *
 * 给定一个字符串 s 和一个整数 k，你需要对从字符串开头算起的每隔 2k 个字符的前 k 个字符进行反转。
 * 
 * 
 * 如果剩余字符少于 k 个，则将剩余字符全部反转。
 * 如果剩余字符小于 2k 但大于或等于 k 个，则反转前 k 个字符，其余字符保持原样。
 * 
 * 
 * 
 * 
 * 示例:
 * 
 * 输入: s = "abcdefg", k = 2
 * 输出: "bacdfeg"
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 该字符串只包含小写英文字母。
 * 给定字符串的长度和 k 在 [1, 10000] 范围内。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    let buf = ""
    let start = 0 ,range = 2 * k
    let remLen = s.length
    if(range >= s.length){
        // 1. 剩余字符不够k个,则全部翻转
        range = remLen
        if(k >= remLen){
            k = remLen
        }
    }
    const end = s.length
    const reverseStrRange = (s) => {
        if(remLen <= 0) return
        // 2. 翻转前k个的过程
        for(let i = start+k - 1;i >= start;i--){
            buf += s[i]
        }
        // 3. 连接区间中剩余字符
        let rangeUpper = start+range <= end ?  start+ range : end
        for(let i = start+k;i < rangeUpper;i++){
            buf += s[i]
        }
        // 4. 区间滑动
        remLen = remLen >= range ? remLen - range:range
        start += range
        range = remLen >= range ? range : remLen
        k = k >= range ? range : k
        reverseStrRange(s)
    }

    reverseStrRange(s)
    return buf
};
// @lc code=end

console.log(reverseStr("abcdefg",1))