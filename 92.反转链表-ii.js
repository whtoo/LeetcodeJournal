/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
 *
 * https://leetcode-cn.com/problems/reverse-linked-list-ii/description/
 *
 * algorithms
 * Medium (48.89%)
 * Likes:    419
 * Dislikes: 0
 * Total Accepted:    59.4K
 * Total Submissions: 117.2K
 * Testcase Example:  '[1,2,3,4,5]\n2\n4'
 *
 * 反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。
 * 
 * 说明:
 * 1 ≤ m ≤ n ≤ 链表长度。
 * 
 * 示例:
 * 
 * 输入: 1->2->3->4->5->NULL, m = 2, n = 4
 * 输出: 1->4->3->2->5->NULL
 * 
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    // if(head == null) head
    // if(m >= n) return head
    // let stack = []
    // let cnt = 0
    // let cur = head
    // let dummy = new ListNode(-1)
    // dummy.next = head
    // let l = cur
    // let tail = null
    // while(cur){
    //     cnt++
    //     if(cnt == m - 1){
    //         l = cur
    //     } else if(cnt >= m && cnt <= n){
    //         stack.push(cur)
    //     } else if(cnt == n + 1){
    //         tail = cur
    //         let lHead = stack.pop()
    //         let tmp = lHead
    //         while(stack.length > 0){
    //             let r = stack.pop()
    //             tmp.next = r
    //             tmp = r
    //         }
    //         l.next = lHead
    //         tmp.next = tail
    //     }
    //     cur = cur.next
    // }
    // return dummy.next

    let dummy = new ListNode(-1)
    dummy.next = head
    let tmpHead = dummy
    for(let i = 0;i < m - 1;i++){
        tmpHead = tmpHead.next
    }

    let start = tmpHead.next
    let tail = start.next
    for(let i = 0;i < n - m;i++){
        start.next = tail.next
        tail.next = tmpHead.next
        tmpHead.next = tail
        tail = start.next
    }
    return dummy.next
};
// @lc code=end

