/*
 * @lc app=leetcode.cn id=208 lang=javascript
 *
 * [208] 实现 Trie (前缀树)
 *
 * https://leetcode-cn.com/problems/implement-trie-prefix-tree/description/
 *
 * algorithms
 * Medium (64.27%)
 * Likes:    354
 * Dislikes: 0
 * Total Accepted:    46.6K
 * Total Submissions: 68.5K
 * Testcase Example:  '["Trie","insert","search","search","startsWith","insert","search"]\n' +
  '[[],["apple"],["apple"],["app"],["app"],["app"],["app"]]'
 *
 * 实现一个 Trie (前缀树)，包含 insert, search, 和 startsWith 这三个操作。
 * 
 * 示例:
 * 
 * Trie trie = new Trie();
 * 
 * trie.insert("apple");
 * trie.search("apple");   // 返回 true
 * trie.search("app");     // 返回 false
 * trie.startsWith("app"); // 返回 true
 * trie.insert("app");   
 * trie.search("app");     // 返回 true
 * 
 * 说明:
 * 
 * 
 * 你可以假设所有的输入都是由小写字母 a-z 构成的。
 * 保证所有输入均为非空字符串。
 * 
 * 
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
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
    let root = this;
    for(const ch of word){
        const idx = ch.charCodeAt(0) - 'a'.charCodeAt(0);
        if(root.next[idx] == null) return false;
        root = root.next[idx];
    }
    return root.is_string;
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
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end

let trie = new Trie();

trie.insert("apple");
console.log(trie.search("apple"));   // 返回 true
console.log(trie.search("app"));     // 返回 false
console.log(trie.startsWith("app")); // 返回 true
trie.insert("app");   
console.log(trie.search("app"));     // 返回 true