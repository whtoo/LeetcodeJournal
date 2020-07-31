/*
 * @lc app=leetcode.cn id=648 lang=javascript
 *
 * [648] 单词替换
 *
 * https://leetcode-cn.com/problems/replace-words/description/
 *
 * algorithms
 * Medium (53.79%)
 * Likes:    71
 * Dislikes: 0
 * Total Accepted:    8.8K
 * Total Submissions: 16.4K
 * Testcase Example:  '["cat","bat","rat"]\n"the cattle was rattled by the battery"'
 *
 * 在英语中，我们有一个叫做 词根(root)的概念，它可以跟着其他一些词组成另一个较长的单词——我们称这个词为
 * 继承词(successor)。例如，词根an，跟随着单词 other(其他)，可以形成新的单词 another(另一个)。
 * 
 * 现在，给定一个由许多词根组成的词典和一个句子。你需要将句子中的所有继承词用词根替换掉。如果继承词有许多可以形成它的词根，则用最短的词根替换它。
 * 
 * 你需要输出替换之后的句子。
 * 
 * 
 * 
 * 示例：
 * 
 * 输入：dict(词典) = ["cat", "bat", "rat"] sentence(句子) = "the cattle was rattled
 * by the battery"
 * 输出："the cat was rat by the bat"
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 输入只包含小写字母。
 * 1 <= dict.length <= 1000
 * 1 <= dict[i].length <= 100
 * 1 <= 句中词语数 <= 1000
 * 1 <= 句中词语长度 <= 1000
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
    let root = this;
    for(const ch of word){
        const idx = ch.charCodeAt(0) - 'a'.charCodeAt(0);
        if(root.next[idx] == null) return false;
        root = root.next[idx];
    }
    return root.is_string;
};
Trie.prototype.searchMin = function(word){
    let root = this;
    let buffer = ""
    const dict = 'abcdefghijklmnopqrstuvwxyz';
    for(const ch of word){
        const idx = ch.charCodeAt(0) - 'a'.charCodeAt(0);
        if(root.next[idx] == null) {
            if(root.is_string) return buffer
            else return ""
        };
        buffer += dict[idx]
        root = root.next[idx];
        if(root.is_string){
            return buffer
        }
    }

    return ""
}
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
String.prototype.replaceAll = function(s1, s2) {
    return this.replace(new RegExp(s1, "gm"), s2);
}
/**
 * @param {string[]} dict
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dict, sentence) {
    var trie = new Trie()
    for(const w of dict){
        trie.insert(w)
    }
    var map = new Map()
    const sentenceLst = sentence.split(' ')
    
    for(const w of sentenceLst){
        if(!map.has(w)){
            const replaceWord = trie.searchMin(w)
            if(replaceWord != ""){
                map.set(w,replaceWord)
            }
        }
    }

    return sentenceLst.map(val => {
        if(map.has(val)) return map.get(val)
        return val
    }).join(' ')
};
// @lc code=end

console.log(replaceWords(["cat", "bat", "rat"],"the cattle was rattled by the battery"))
console.log(replaceWords(["a", "aa", "aaa", "aaaa"],"a aa a aaaa aaa aaa aaa aaaaaa bbb baba ababa"))
console.log(replaceWords(["c","q","ntoso","vz","zy","f","rrq","o","wlzza","k","xm","mvdpx","jxrz","ocnck","gcbnd","fofl","raxbp","g","bbgpb","acac","py","cq","hzey","ku","ubzro","gyuaf","kw","lpi","e","jc","jlr","ggh","qlehz","xj","d","z","cn","h","ki","sddj","uzrbw","izi","aqbge","qxuwp","w","rtvt","y","x","tajl","oo","atxo","zfuh","ej","scmw","zba","yt","n","cm"],
"upy edtugzzrqogog gtrbngzwyndvowhafkmg nefgi hgxejlendtnbx zlnbn xdl ajkrerhmayqyowb lwogzi dltrlimfqqgwuxfprchc lafzxhwedgdqfdxs yegdontzkwwzecpsvktf dyflireintrvq gikipyearazjmanp qo cuwkppjhmzix inlajxyutdoyslnppa fariowbwwbbwimvri zusudhrzjamaacnri hbowv be wfazkdrvsyzxdlsxa bxpaclzffqhvbunintmy v on mxlkzkkqokjx ctlxv hfvvertbklidsngwz yzsn nxmrwrgblkmtahvnlm lqr unx hrimpydqzxduuqj kseummiscbuyksvt mhgdfojqxjwurjk uj bfofauyyesimrttwfqr zduopfg bijxpxfro ntxahkgxrsgvatqnz vbwkwndugjtyrr e cejiyhzbomacum hghsvriqffjwtvptfsbb txqhyareez gsslcguf gvkjbcilxhxs vjywtchdi flekxm vdsesdcqgu vngwketzsqtfgkhu b mmofmrbofr mryvimtcfrd gcmadtxcbmyjdl hlmwbj diadgjwizoeadjaxcp vtjx"))