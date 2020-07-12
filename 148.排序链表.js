/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
 *
 * https://leetcode-cn.com/problems/sort-list/description/
 *
 * algorithms
 * Medium (63.67%)
 * Likes:    618
 * Dislikes: 0
 * Total Accepted:    73.2K
 * Total Submissions: 110.8K
 * Testcase Example:  '[4,2,1,3]'
 *
 * 在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序。
 * 
 * 示例 1:
 * 
 * 输入: 4->2->1->3
 * 输出: 1->2->3->4
 * 
 * 
 * 示例 2:
 * 
 * 输入: -1->5->3->4->0
 * 输出: -1->0->3->4->5
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
 * @return {ListNode}
 */
var sortList = function(head) {
    if(head == null || head.next == null) return head
    let slow = head, fast = head.next
    while(fast != null && fast.next != null){
        fast = fast.next.next
        slow = slow.next
    }
    let mid = slow.next;
    slow.next = null;
    let left = sortList(head)
    let right = sortList(mid)
    let h = new ListNode(0)
    let res = h
    while(left != null && right != null){
        if(left.val < right.val){
            h.next = left
            left = left.next
        } else {
            h.next = right
            right = right.next
        }
        h = h.next
    }
    h.next = (left != null)? left : right
    return res.next

};
// @lc code=end

