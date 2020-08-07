/*
 * @lc app=leetcode.cn id=1455 lang=javascript
 *
 * [1455] 检查单词是否为句中其他单词的前缀
 */

// @lc code=start
const prefixOfWord = function(s,p){
  
    for(let j = 0;j < p.length;j++){
        if(s[j] !== p[j]) return false
    }
     return true
}
/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function(sentence, searchWord) {
    let lst = sentence.split(' ')
    for(let i = 0; i < lst.length;++i){
        let word = lst[i]
        let flag = prefixOfWord(word,searchWord)
        if(flag) return  i+1
    }
    return -1
};
// @lc code=end

console.log(isPrefixOfWord("i love eating burger"
,"burg"))