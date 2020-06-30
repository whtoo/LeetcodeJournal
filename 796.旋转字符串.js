/*
 * @lc app=leetcode.cn id=796 lang=javascript
 *
 * [796] 旋转字符串
 *
 * https://leetcode-cn.com/problems/rotate-string/description/
 *
 * algorithms
 * Easy (49.29%)
 * Likes:    88
 * Dislikes: 0
 * Total Accepted:    10.7K
 * Total Submissions: 21.1K
 * Testcase Example:  '"abcde"\n"cdeab"'
 *
 * 给定两个字符串, A 和 B。
 * 
 * A 的旋转操作就是将 A 最左边的字符移动到最右边。 例如, 若 A = 'abcde'，在移动一次之后结果就是'bcdea'
 * 。如果在若干次旋转操作之后，A 能变成B，那么返回True。
 * 
 * 
 * 示例 1:
 * 输入: A = 'abcde', B = 'cdeab'
 * 输出: true
 * 
 * 示例 2:
 * 输入: A = 'abcde', B = 'abced'
 * 输出: false
 * 
 * 注意：
 * 
 * 
 * A 和 B 长度不超过 100。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function(A, B) {

    // if(A.length != B.length) return false
    // if(A.length == 0) return true
 
    // const ListNode = function(val,next){
    //     this.val = val
    //     this.next = !next?null:next
    // }
    // let guard = new ListNode(-1)
    // let head = guard
    // for(const ch of A){
    //     head.next = new ListNode(ch)
    //     head  = head.next
    // }
    // head.next = guard.next
    // guard  = guard.next
    // const firstEle = B[0]
    // let cnt = A.length
    // while(guard.val != firstEle && cnt > 0){
    //     guard = guard.next
    //     cnt--
    // }
    
    // if(guard.val != firstEle) return false
    
    // for(const ch of B){
        
    // }

    return A.length<=B.length && (A+A).includes(B)
}
// @lc code=end

console.log(rotateString("bbbacddceeb",'ceebbbbacdd'))