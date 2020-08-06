/*
 * @lc app=leetcode.cn id=1408 lang=javascript
 *
 * [1408] 数组中的字符串匹配
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
    words.sort((a,b)=> b.length - a.length)
    let set = new Set()
    for(let i = 0;i < words.length;++i){
        for(let j = i+1;j < words.length;++j){
            if(words[i].includes(words[j])){
                set.add(words[j])
            }
        }
    }
    return [...set]
};
// @lc code=end

console.log(stringMatching(["mass","as","hero","superhero"]))
console.log(stringMatching(["blue","green","bu"]))
console.log(stringMatching(["leetcode","et","code"]))