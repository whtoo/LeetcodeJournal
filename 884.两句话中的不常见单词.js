/*
 * @lc app=leetcode.cn id=884 lang=javascript
 *
 * [884] 两句话中的不常见单词
 *
 * https://leetcode-cn.com/problems/uncommon-words-from-two-sentences/description/
 *
 * algorithms
 * Easy (60.23%)
 * Likes:    60
 * Dislikes: 0
 * Total Accepted:    10.7K
 * Total Submissions: 17.1K
 * Testcase Example:  '"this apple is sweet"\n"this apple is sour"'
 *
 * 给定两个句子 A 和 B 。 （句子是一串由空格分隔的单词。每个单词仅由小写字母组成。）
 * 
 * 如果一个单词在其中一个句子中只出现一次，在另一个句子中却没有出现，那么这个单词就是不常见的。
 * 
 * 返回所有不常用单词的列表。
 * 
 * 您可以按任何顺序返回列表。
 * 
 * 
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：A = "this apple is sweet", B = "this apple is sour"
 * 输出：["sweet","sour"]
 * 
 * 
 * 示例 2：
 * 
 * 输入：A = "apple apple", B = "banana"
 * 输出：["banana"]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 <= A.length <= 200
 * 0 <= B.length <= 200
 * A 和 B 都只包含空格和小写字母。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function(A, B) {
    let lstA = A.split(' ')
    let lstB = B.split(' ')
    const ret = []
    const map = new Map()

    for(const v of lstA){
            if(map.has(v)){
                map.set(v,map.get(v)+1)
            } else {
                map.set(v,1)
            }

    }

    for(const v of lstB){
        if(map.has(v)){
            map.set(v,map.get(v)+1)
        } else {
            map.set(v,1)
        }
    }

    for(const [key,val] of map.entries()){
        if(val == 1) ret.push(key)
    }

    return ret

};
// @lc code=end

