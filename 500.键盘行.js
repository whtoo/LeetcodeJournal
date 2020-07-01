/*
 * @lc app=leetcode.cn id=500 lang=javascript
 *
 * [500] 键盘行
 *
 * https://leetcode-cn.com/problems/keyboard-row/description/
 *
 * algorithms
 * Easy (68.10%)
 * Likes:    97
 * Dislikes: 0
 * Total Accepted:    17.8K
 * Total Submissions: 25.7K
 * Testcase Example:  '["Hello","Alaska","Dad","Peace"]'
 *
 * 给定一个单词列表，只返回可以使用在键盘同一行的字母打印出来的单词。键盘如下图所示。
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 示例：
 * 
 * 输入: ["Hello", "Alaska", "Dad", "Peace"]
 * 输出: ["Alaska", "Dad"]
 * 
 * 
 * 
 * 
 * 注意：
 * 
 * 
 * 你可以重复使用键盘上同一字符。
 * 你可以假设输入的字符串将只包含字母。
 * 
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    const f1 = ["q","w","e","r","t",'y','u','i','o','p']
    const f2 = ['a','s','d','f','g','h','j','k','l']
    const f3 = ['z','x','c','v','b','n','m']
    let table = new Map()
    for(const ch of f1){
        table.set(ch,1)
    }
    for(const ch of f2){
        table.set(ch,2)
    }
    for(const ch of f3){
        table.set(ch,3)
    }
    
    const oneLineFilter = (word) => {
       
        let cur = -1
        for(const ch of word){
            if(cur == -1){
                cur = table.get(ch.toLowerCase())
            } else if(cur != table.get(ch.toLowerCase())){
                return false
            }
        }
        return true
    }
    let lines = words.filter( oneLineFilter )

    return lines
};  
// @lc code=end
console.log(findWords(["asdfghjkl","qwertyuiop","zxcvbnm"]))
