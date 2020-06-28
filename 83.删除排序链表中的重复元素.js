/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
 *
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/description/
 *
 * algorithms
 * Easy (49.00%)
 * Likes:    327
 * Dislikes: 0
 * Total Accepted:    110.9K
 * Total Submissions: 219.2K
 * Testcase Example:  '[1,1,2]'
 *
 * 给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。
 * 
 * 示例 1:
 * 
 * 输入: 1->1->2
 * 输出: 1->2
 * 
 * 
 * 示例 2:
 * 
 * 输入: 1->1->2->3->3
 * 输出: 1->2->3
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
    let cur = head
    const header = cur
    while(cur != null && cur.next != null){
        if( cur.val == cur.next.val){
            cur.next = cur.next.next
        }  else {
            cur = cur.next
        }
    }
    return header
};
// @lc code=end

function ListNode(val) {
    this.val = val;
    this.next = null;
 }
/**
 * 
 * @param {Array} arr 
 */
function createLst(arr){
   let preHeader = new ListNode(-1)
    let cursor = preHeader
   for(const v of arr){
        cursor.next = new ListNode(v)
        cursor = cursor.next
    }
    return preHeader.next
}
/**
 * 
 * @param {Array} arr 
 */
function dump(arr){
    let cursor = arr
    let buffer = []
    while(cursor != null){
        buffer.push(cursor.val)
        cursor = cursor.next
    }
    return buffer
}
let lst = deleteDuplicates(createLst([1,1,2]))
console.log(dump(lst))