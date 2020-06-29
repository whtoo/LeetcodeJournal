/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
 *
 * https://leetcode-cn.com/problems/palindrome-linked-list/description/
 *
 * algorithms
 * Easy (40.23%)
 * Likes:    535
 * Dislikes: 0
 * Total Accepted:    99.2K
 * Total Submissions: 234.6K
 * Testcase Example:  '[1,2]'
 *
 * 请判断一个链表是否为回文链表。
 * 
 * 示例 1:
 * 
 * 输入: 1->2
 * 输出: false
 * 
 * 示例 2:
 * 
 * 输入: 1->2->2->1
 * 输出: true
 * 
 * 
 * 进阶：
 * 你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
     let slow = head,fast = head;
     while(fast && fast.next) {
         slow = slow.next;
         fast = fast.next.next;
     }
     // 链表为奇数,slow还需要走一步
     if(fast) slow = slow.next;
     let left = head;
     let right = reserve(slow);
     while(right) {
         if(right.val !== left.val) return false;
         right = right.next;
         left = left.next;
     }
     return true;
 };
 const reserve = function(head) {
     let pre = null,cur = head,next = head;
     while(cur !== null) {
         next = cur.next;
         cur.next = pre;
         pre = cur;
         cur = next;
     }
     return pre;
 };

// @lc code=end
