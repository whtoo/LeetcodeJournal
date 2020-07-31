/*
 * @lc app=leetcode.cn id=451 lang=javascript
 *
 * [451] 根据字符出现频率排序
 *
 * https://leetcode-cn.com/problems/sort-characters-by-frequency/description/
 *
 * algorithms
 * Medium (61.74%)
 * Likes:    144
 * Dislikes: 0
 * Total Accepted:    25.6K
 * Total Submissions: 39.6K
 * Testcase Example:  '"tree"'
 *
 * 给定一个字符串，请将字符串里的字符按照出现的频率降序排列。
 * 
 * 示例 1:
 * 
 * 
 * 输入:
 * "tree"
 * 
 * 输出:
 * "eert"
 * 
 * 解释:
 * 'e'出现两次，'r'和't'都只出现一次。
 * 因此'e'必须出现在'r'和't'之前。此外，"eetr"也是一个有效的答案。
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入:
 * "cccaaa"
 * 
 * 输出:
 * "cccaaa"
 * 
 * 解释:
 * 'c'和'a'都出现三次。此外，"aaaccc"也是有效的答案。
 * 注意"cacaca"是不正确的，因为相同的字母必须放在一起。
 * 
 * 
 * 示例 3:
 * 
 * 
 * 输入:
 * "Aabb"
 * 
 * 输出:
 * "bbAa"
 * 
 * 解释:
 * 此外，"bbaA"也是一个有效的答案，但"Aabb"是不正确的。
 * 注意'A'和'a'被认为是两种不同的字符。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let buckect = new Map()
    
    for(const ch of s){
        if(buckect.has(ch)){
            buckect.set(ch,buckect.get(ch)+1)
        } else {
            buckect.set(ch,1)
        }
    }

    const sortMap = [...buckect].sort((a,b)=> b[1] - a[1])

    
    return sortMap.reduce((prev,cur)=> prev + cur[0].repeat(cur[1]),"")
};
// @lc code=end
console.warn(frequencySort("tree"))
