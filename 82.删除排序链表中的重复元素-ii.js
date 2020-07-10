/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
 *
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii/description/
 *
 * algorithms
 * Medium (45.66%)
 * Likes:    309
 * Dislikes: 0
 * Total Accepted:    53.4K
 * Total Submissions: 110.6K
 * Testcase Example:  '[1,2,3,3,4,4,5]'
 *
 * 给定一个排序链表，删除所有含有重复数字的节点，只保留原始链表中 没有重复出现 的数字。
 * 
 * 示例 1:
 * 
 * 输入: 1->2->3->3->4->4->5
 * 输出: 1->2->5
 * 
 * 
 * 示例 2:
 * 
 * 输入: 1->1->1->2->3
 * 输出: 2->3
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
var deleteDuplicates = function(head) {
    if(head == null) return head
    let dummy = new ListNode(-1)
    let tail = dummy
    for(let l = head,r = head;l != null;l = r){
        while(r != null && r.val == l.val) r = r.next
        if(l.next == r){
            tail.next = l
            tail = l
            tail.next = null
        }
    }
    return dummy.next
};
// @lc code=end

