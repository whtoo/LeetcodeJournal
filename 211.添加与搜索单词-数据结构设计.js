/*
 * @lc app=leetcode.cn id=211 lang=javascript
 *
 * [211] 添加与搜索单词 - 数据结构设计
 *
 * https://leetcode-cn.com/problems/add-and-search-word-data-structure-design/description/
 *
 * algorithms
 * Medium (42.55%)
 * Likes:    134
 * Dislikes: 0
 * Total Accepted:    12.6K
 * Total Submissions: 27.8K
 * Testcase Example:  '["WordDictionary","addWord","addWord","addWord","search","search","search","search"]\n' +
  '[[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]'
 *
 * 设计一个支持以下两种操作的数据结构：
 * 
 * void addWord(word)
 * bool search(word)
 * 
 * 
 * search(word) 可以搜索文字或正则表达式字符串，字符串只包含字母 . 或 a-z 。 . 可以表示任何一个字母。
 * 
 * 示例:
 * 
 * addWord("bad")
 * addWord("dad")
 * addWord("mad")
 * search("pad") -> false
 * search("bad") -> true
 * search(".ad") -> true
 * search("b..") -> true
 * 
 * 
 * 说明:
 * 
 * 你可以假设所有单词都是由小写字母 a-z 组成的。
 * 
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */

var TrieNode = function() {
    this.next = {};
    this.isEnd = false;
};

/**
 * Initialize your data structure here.
 */
var WordDictionary = function() {
    this.root = new TrieNode();
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    if (!word.length) return;

    let node = this.root;
    for (let i = 0; i < word.length; ++i) {
        if (!node.next[word[i]]) {
            node.next[word[i]] = new TrieNode();
        }
        node = node.next[word[i]];
    }
    node.isEnd = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    if (!word.length) return false;

    return this.dfs(this.root, word);
};

/**
 * @param {TrieNode} root
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.dfs = function(root, word) {
    const length = word.length;
    let node = root;
    for (let i = 0; i < length; ++i) {
        const ch = word[i];
        // 若是通配符，则尝试遍历所有的情况(DFS)
        if (ch === ".") {
            const keys = Reflect.ownKeys(node.next);
            for (const key of keys) {
                const found = this.dfs(node.next[key], word.slice(i + 1));
                if (found) return true;
            }
            return false;
        }

        if (!node.next[ch]) {
            return false;
        }
        node = node.next[ch];
    }
    return node.isEnd;
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
// @lc code=end

