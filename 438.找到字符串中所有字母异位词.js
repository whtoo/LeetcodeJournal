/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 *
 * https://leetcode-cn.com/problems/find-all-anagrams-in-a-string/description/
 *
 * algorithms
 * Medium (40.62%)
 * Likes:    327
 * Dislikes: 0
 * Total Accepted:    33.3K
 * Total Submissions: 73.2K
 * Testcase Example:  '"cbaebabacd"\n"abc"'
 *
 * 给定一个字符串 s 和一个非空字符串 p，找到 s 中所有是 p 的字母异位词的子串，返回这些子串的起始索引。
 * 
 * 字符串只包含小写英文字母，并且字符串 s 和 p 的长度都不超过 20100。
 * 
 * 说明：
 * 
 * 
 * 字母异位词指字母相同，但排列不同的字符串。
 * 不考虑答案输出的顺序。
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入:
 * s: "cbaebabacd" p: "abc"
 * 
 * 输出:
 * [0, 6]
 * 
 * 解释:
 * 起始索引等于 0 的子串是 "cba", 它是 "abc" 的字母异位词。
 * 起始索引等于 6 的子串是 "bac", 它是 "abc" 的字母异位词。
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入:
 * s: "abab" p: "ab"
 * 
 * 输出:
 * [0, 1, 2]
 * 
 * 解释:
 * 起始索引等于 0 的子串是 "ab", 它是 "ab" 的字母异位词。
 * 起始索引等于 1 的子串是 "ba", 它是 "ab" 的字母异位词。
 * 起始索引等于 2 的子串是 "ab", 它是 "ab" 的字母异位词。
 * 
 * 
 */

// @lc code=start
var strFingerPrint = function(str){
    let arr = new Array(26).fill(0)
    for(const ch of str){
        arr[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    return arr;
}
var isEqualArr = function(A,B) {
    if(A.length != B.length ) return false
    for(let i = 0;i < A.length;++i){
        if(A[i] != B[i]) return false
    }

    return true
}
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    const w = p.length
    const n = s.length
    let start = 1, tail = w;
    const pfp = strFingerPrint(p)
    let result = []

    let fp = strFingerPrint(s.slice(0,w))
    let flag = isEqualArr(fp,pfp)
    if(flag) result.push(0)

    while(tail < n){
        let prev = s[start-1]
        let next = s[tail]
        
        if(prev != next) {
            let prevPos = prev.charCodeAt(0) - 'a'.charCodeAt(0)
            let nextPos = next.charCodeAt(0) - 'a'.charCodeAt(0)
            fp[prevPos]--;
            fp[nextPos]++;
            flag = isEqualArr(fp,pfp)
        }

        if(flag == true) result.push(start)

        start++;
        tail++;
    }

    return result
};
// @lc code=end

console.warn(findAnagrams("cbaebabacd","abc"))