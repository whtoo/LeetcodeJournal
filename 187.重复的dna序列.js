/*
 * @lc app=leetcode.cn id=187 lang=javascript
 *
 * [187] 重复的DNA序列
 *
 * https://leetcode-cn.com/problems/repeated-dna-sequences/description/
 *
 * algorithms
 * Medium (43.47%)
 * Likes:    101
 * Dislikes: 0
 * Total Accepted:    18.8K
 * Total Submissions: 42K
 * Testcase Example:  '"AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"'
 *
 * 所有 DNA 都由一系列缩写为 A，C，G 和 T 的核苷酸组成，例如：“ACGAATTCCG”。在研究 DNA 时，识别 DNA
 * 中的重复序列有时会对研究非常有帮助。
 * 
 * 编写一个函数来查找目标子串，目标子串的长度为 10，且在 DNA 字符串 s 中出现次数超过一次。
 * 
 * 
 * 
 * 示例：
 * 
 * 输入：s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
 * 输出：["AAAAACCCCC", "CCCCCAAAAA"]
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    const L = 10, n = s.length
    if(n <= L){
        return []
    }
    const bitMap = {'A':0,'C':1,'G':2,'T':3}
    const nums = s.split('').map(val=>bitMap[val])
    let bitmask = 0
    let seen = new Set(), output = new Set()
    for(let start = 0; start < n-L+1;++start){
        if(start != 0){
            bitmask <<= 2
            bitmask |= nums[start + L - 1]
            bitmask &= ~(3 << (2 * L))
        } else {
            for(let i = 0;i < L;++i){
                bitmask <<= 2
                bitmask |= nums[i]
            }
        }
        if(seen.has(bitmask)){
            output.add(s.slice(start,start+L))
        }
        seen.add(bitmask)
    }
    let ret = []
    for(const v of output) ret.push(v)
    return ret
};
// @lc code=end

console.warn(findRepeatedDnaSequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"))
