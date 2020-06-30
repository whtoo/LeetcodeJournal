/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
 *
 * https://leetcode-cn.com/problems/remove-linked-list-elements/description/
 *
 * algorithms
 * Easy (43.88%)
 * Likes:    401
 * Dislikes: 0
 * Total Accepted:    85.4K
 * Total Submissions: 186.8K
 * Testcase Example:  '[1,2,6,3,4,5,6]\n6'
 *
 * 删除链表中等于给定值 val 的所有节点。
 * 
 * 示例:
 * 
 * 输入: 1->2->6->3->4->5->6, val = 6
 * 输出: 1->2->3->4->5
 * 
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let cur = head
    let newHead = new ListNode(-1)
    let prev = newHead
    newHead.next = head
    while(cur){
        if(cur.val == val){
            prev.next = cur.next
            cur = prev.next
        }
        else{
            prev = cur
            cur = cur.next
        }
        
    }

    return newHead.next
};
// @lc code=end

