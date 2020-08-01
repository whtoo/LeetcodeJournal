/*
 * @lc app=leetcode.cn id=676 lang=javascript
 *
 * [676] 实现一个魔法字典
 *
 * https://leetcode-cn.com/problems/implement-magic-dictionary/description/
 *
 * algorithms
 * Medium (55.18%)
 * Likes:    52
 * Dislikes: 0
 * Total Accepted:    3K
 * Total Submissions: 5.3K
 * Testcase Example:  '["MagicDictionary", "buildDict", "search", "search", "search", "search"]\n' +
  '[[], [["hello","leetcode"]], ["hello"], ["hhllo"], ["hell"], ["leetcoded"]]'
 *
 * 实现一个带有buildDict, 以及 search方法的魔法字典。
 * 
 * 对于buildDict方法，你将被给定一串不重复的单词来构建一个字典。
 * 
 * 对于search方法，你将被给定一个单词，并且判定能否只将这个单词中一个字母换成另一个字母，使得所形成的新单词存在于你构建的字典中。
 * 
 * 示例 1:
 * 
 * 
 * Input: buildDict(["hello", "leetcode"]), Output: Null
 * Input: search("hello"), Output: False
 * Input: search("hhllo"), Output: True
 * Input: search("hell"), Output: False
 * Input: search("leetcoded"), Output: False
 * 
 * 
 * 注意:
 * 
 * 
 * 你可以假设所有输入都是小写字母 a-z。
 * 为了便于竞赛，测试所用的数据量很小。你可以在竞赛结束后，考虑更高效的算法。
 * 请记住重置MagicDictionary类中声明的类变量，因为静态/类变量会在多个测试用例中保留。 请参阅这里了解更多详情。
 * 
 * 
 */

// @lc code=start
var Trie = function() {
    this.next = new Array(26).fill(null);
    this.is_string = false;
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let root = this;
    for(const ch of word){
        const idx = ch.charCodeAt(0) - 'a'.charCodeAt(0);
        if(root.next[idx] == null) root.next[idx] = new Trie();
        root = root.next[idx];
    }
    root.is_string = true;
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
   return this.searchStartWith(word,0,1,this)
};
/**
 * 
 * @param {string} word 
 * @param {number} i 
 * @param {number} num 
 * @param {Trie} root 
 */
Trie.prototype.searchStartWith = function(word,i,num,root) {
   if(num < 0) {
       return false
   }
   if(i == word.length){
       return num == 0 && root.is_string
   }
   let ch = word[i];
   let idx = ch.charCodeAt(0) - 97;
   for(let j = 0; j < 26;++j){
       if(root.next[j] == null){
           continue;
       }
       if(idx == j){
           if(this.searchStartWith(word,i+1,num,root.next[idx])){
               return true
           }
       } else if(this.searchStartWith(word,i+1,num-1,root.next[j])){
            return true
       }
   }
   return false
};
/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let root = this;
    for(const ch of prefix){
        const idx = ch.charCodeAt(0) - 'a'.charCodeAt(0);
        if(root.next[idx] == null) return false;
        root = root.next[idx];
    }
    return true;
};

/**
 * Initialize your data structure here.
 */
var MagicDictionary = function() {
    this.trie = new Trie()
};

/**
 * Build a dictionary through a list of words 
 * @param {string[]} dict
 * @return {void}
 */
MagicDictionary.prototype.buildDict = function(dict) {
    for(const w of dict){
        this.trie.insert(w)
    }
};

/**
 * Returns if there is any word in the trie that equals to the given word after modifying exactly one character 
 * @param {string} word
 * @return {boolean}
 */
MagicDictionary.prototype.search = function(word) {
    return this.trie.search(word,1)
};

/**
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = new MagicDictionary()
 * obj.buildDict(dict)
 * var param_2 = obj.search(word)
 */
// @lc code=end

let dictionary = new MagicDictionary()
dictionary.buildDict(["hello","hallo","leetcode"])
console.log(dictionary.search("hello"))
console.log(dictionary.search("hhllo"))
console.log(dictionary.search("hell"))
console.log(dictionary.search("leetcoded"))
console.log(dictionary.search("tello"))