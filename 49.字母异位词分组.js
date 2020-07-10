/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 *
 * https://leetcode-cn.com/problems/group-anagrams/description/
 *
 * algorithms
 * Medium (60.58%)
 * Likes:    387
 * Dislikes: 0
 * Total Accepted:    86.2K
 * Total Submissions: 138K
 * Testcase Example:  '["eat","tea","tan","ate","nat","bat"]'
 *
 * 给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。
 * 
 * 示例:
 * 
 * 输入: ["eat", "tea", "tan", "ate", "nat", "bat"]
 * 输出:
 * [
 * ⁠ ["ate","eat","tea"],
 * ⁠ ["nat","tan"],
 * ⁠ ["bat"]
 * ]
 * 
 * 说明：
 * 
 * 
 * 所有输入均为小写字母。
 * 不考虑答案输出的顺序。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const aCode = 'a'.charCodeAt(0)
    let map = new Map()
    let set = new Set()
    for(const word of strs){
        let hash = new Array(26).fill(0)
        for(const v of word){
            hash[v.charCodeAt(0) - aCode] = (hash[v.charCodeAt(0) - aCode] == undefined)?1:hash[v.charCodeAt(0) - aCode]+1 
        }
        const hashStr = hash.join('')
        set.add(hashStr)
        let acc = null
        if(map.get(hashStr) == undefined){
            acc = []
        } else {
            acc = map.get(hashStr)
        }
        acc.push(word)
        map.set(hashStr,acc)
    }
    let ret = new Array(set.size)
    let nameArr = [...set.values()]
  
    for(let i = 0;i < ret.length;i++){
        if(ret[i] == undefined) {
            ret[i] = new Array()
        }
        ret[i] = map.get(nameArr[i])
    }
    return ret
};
// @lc code=end
console.log(groupAnagrams(["hos","boo","nay","deb","wow","bop","bob","brr","hey","rye","eve","elf","pup","bum","iva","lyx","yap","ugh","hem","rod","aha","nam","gap","yea","doc","pen","job","dis","max","oho","jed","lye","ram","pup","qua","ugh","mir","nap","deb","hog","let","gym","bye","lon","aft","eel","sol","jab"]))
