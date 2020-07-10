/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
 *
 * https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/description/
 *
 * algorithms
 * Medium (37.40%)
 * Likes:    878
 * Dislikes: 0
 * Total Accepted:    193.4K
 * Total Submissions: 496.5K
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。
 * 
 * 示例：
 * 
 * 给定一个链表: 1->2->3->4->5, 和 n = 2.
 * 
 * 当删除了倒数第二个节点后，链表变为 1->2->3->5.
 * 
 * 
 * 说明：
 * 
 * 给定的 n 保证是有效的。
 * 
 * 进阶：
 * 
 * 你能尝试使用一趟扫描实现吗？
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // let dummy = new ListNode(0)
    // let len = 0
    // let cur = head
    // dummy.next = head
    // while(cur){
    //     ++len
    //     cur = cur.next
    // }
    // len -= n
    // cur = dummy
    // while(len > 0){
    //     len--
    //     cur = cur.next
    // }
    // cur.next = cur.next.next

    // return dummy.next

    let dummy = new ListNode(0)
    dummy.next = head
    let first = dummy
    let second = dummy

    for(let i = 1;i <= n+1;i++){
        first = first.next
    }
    while(first != null){
        first = first.next
        second = second.next
    }
    second.next = second.next.next

    return dummy.next
};
// @lc code=end

