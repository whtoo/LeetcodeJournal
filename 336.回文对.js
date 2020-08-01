/*
 * @lc app=leetcode.cn id=336 lang=javascript
 *
 * [336] 回文对
 *
 * https://leetcode-cn.com/problems/palindrome-pairs/description/
 *
 * algorithms
 * Hard (32.96%)
 * Likes:    76
 * Dislikes: 0
 * Total Accepted:    4.8K
 * Total Submissions: 14K
 * Testcase Example:  '["abcd","dcba","lls","s","sssll"]'
 *
 * 给定一组唯一的单词， 找出所有不同 的索引对(i, j)，使得列表中的两个单词， words[i] + words[j] ，可拼接成回文串。
 * 
 * 示例 1:
 * 
 * 输入: ["abcd","dcba","lls","s","sssll"]
 * 输出: [[0,1],[1,0],[3,2],[2,4]] 
 * 解释: 可拼接成的回文串为 ["dcbaabcd","abcddcba","slls","llssssll"]
 * 
 * 
 * 示例 2:
 * 
 * 输入: ["bat","tab","cat"]
 * 输出: [[0,1],[1,0]] 
 * 解释: 可拼接成的回文串为 ["battab","tabbat"]
 * 
 */

// @lc code=start
// 社区优秀解法
var palindromePairs = function(words) {
    // 优化算法，基于哈希表保存单词列表的逆串
    // set用于结果去重

    function isPalindrome(str){
        let i = 0,j = str.length - 1;
        while(i < j){
            if(str[i] !== str[j]) return false;
            i ++;
            j --;
        }
        return true;
    }

    let map = new Map();
    let set = new Set();
    let res = [];

    // 单词取反作为键，在单词列表中的索引为值
    words.forEach((word, index) => {
        map.set(Array.from(word).reverse().join(''), index);
    })


    for(let i = 0; i < words.length; i ++){
        let word = words[i];

        // 单词拆分为前缀子串和后缀子串
        for(let j = 0; j <= word.length; j ++){
            let left = word.substring(0, j);
            let right = word.substring(j);

            // 前缀子串回文，后缀子串的逆串是某个单词。下面map.get(right)!==i
            // 是防止word的后缀子串为word本身情况
            if(isPalindrome(left) && map.has(right) && map.get(right) != i){
                const w = [map.get(right), i];

                // join()默认按照逗号","连接数组元素;因此不需要处理形如"1 23"和"12 3"这种情况
                const key = w.join();

                // 去重操作，即[i,j]不能重复
                if(!set.has(key)){
                    res.push(w);
                    set.add(key);
                }
            }


            // 后缀字符串回文，前缀字符串的逆存在与单词表
            if(isPalindrome(right) && map.has(left) && map.get(left) != i){
                const w = [i, map.get(left)];
                const key = w.join();
                if(!set.has(key)){
                    res.push(w);
                    set.add(key);
                }
            }
        }
    }


    return res;
}
// @lc code=end

