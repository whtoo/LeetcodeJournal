/*
 * @lc app=leetcode.cn id=1147 lang=javascript
 *
 * [1147] 段式回文
 *
 * https://leetcode-cn.com/problems/longest-chunked-palindrome-decomposition/description/
 *
 * algorithms
 * Hard (50.83%)
 * Likes:    14
 * Dislikes: 0
 * Total Accepted:    1.7K
 * Total Submissions: 3.3K
 * Testcase Example:  '"ghiabcdefhelloadamhelloabcdefghi"'
 *
 * 段式回文 其实与 一般回文 类似，只不过是最小的单位是 一段字符 而不是 单个字母。
 * 
 * 举个例子，对于一般回文 "abcba" 是回文，而 "volvo" 不是，但如果我们把 "volvo" 分为 "vo"、"l"、"vo"
 * 三段，则可以认为 “(vo)(l)(vo)” 是段式回文（分为 3 段）。
 * 
 * 
 * 
 * 给你一个字符串 text，在确保它满足段式回文的前提下，请你返回 段 的 最大数量 k。
 * 
 * 如果段的最大数量为 k，那么存在满足以下条件的 a_1, a_2, ..., a_k：
 * 
 * 
 * 每个 a_i 都是一个非空字符串；
 * 将这些字符串首位相连的结果 a_1 + a_2 + ... + a_k 和原始字符串 text 相同；
 * 对于所有1 <= i <= k，都有 a_i = a_{k+1 - i}。
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：text = "ghiabcdefhelloadamhelloabcdefghi"
 * 输出：7
 * 解释：我们可以把字符串拆分成 "(ghi)(abcdef)(hello)(adam)(hello)(abcdef)(ghi)"。
 * 
 * 
 * 示例 2：
 * 
 * 输入：text = "merchant"
 * 输出：1
 * 解释：我们可以把字符串拆分成 "(merchant)"。
 * 
 * 
 * 示例 3：
 * 
 * 输入：text = "antaprezatepzapreanta"
 * 输出：11
 * 解释：我们可以把字符串拆分成 "(a)(nt)(a)(pre)(za)(tpe)(za)(pre)(a)(nt)(a)"。
 * 
 * 
 * 示例 4：
 * 
 * 输入：text = "aaa"
 * 输出：3
 * 解释：我们可以把字符串拆分成 "(a)(a)(a)"。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * text 仅由小写英文字符组成。
 * 1 <= text.length <= 1000
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} text
 * @return {number}
 */
var longestDecomposition = function(text) {
    let i=0,j=text.length-1;
    let word1="",word2="";
    let ans=0;
    while(i<j){
        word1+=text[i++];
        word2=text[j--]+word2;
        if(word1===word2){
            ans+=2;
            word1=word2=""
        }
    }
    //如果i===j表示这段字符串为计数，最中间必定独自为一段
    //如果word1.length>0最后word1+word2必定独自为一段
    return ans+(word1.length>0 || i===j ?1:0);

    // let leftSet = new Set()
    // let rightSet = new Set()
    // let bagCnt = 0
    // for(let i =0,j = text.length - 1;i < j;i++,j--){
    //     const l = text[i]
    //     const r = text[j]

    //     leftSet.add(l)
    //     rightSet.add(r)

    //     if(leftSet.has(r)){
    //         leftSet.delete(r)
    //         rightSet.delete(r)
    //     }
    //     if(rightSet.has(l)){
    //         leftSet.delete(l)
    //         rightSet.delete(l)
    //     }

      
    //     if(leftSet.size == 0 && rightSet.size == 0){
    //         bagCnt++
    //     }
    // }
    // // "(ghi)(abcdef)(hello)(adam)(hello)(abcdef)(ghi)"
    // return bagCnt
};
// @lc code=end

console.log(longestDecomposition("ghiabcdefhelloadamhelloabcdefghi"))