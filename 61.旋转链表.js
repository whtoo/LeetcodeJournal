/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
 *
 * https://leetcode-cn.com/problems/rotate-list/description/
 *
 * algorithms
 * Medium (39.85%)
 * Likes:    291
 * Dislikes: 0
 * Total Accepted:    70.7K
 * Total Submissions: 174.8K
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * 给定一个链表，旋转链表，将链表每个节点向右移动 k 个位置，其中 k 是非负数。
 * 
 * 示例 1:
 * 
 * 输入: 1->2->3->4->5->NULL, k = 2
 * 输出: 4->5->1->2->3->NULL
 * 解释:
 * 向右旋转 1 步: 5->1->2->3->4->NULL
 * 向右旋转 2 步: 4->5->1->2->3->NULL
 * 
 * 
 * 示例 2:
 * 
 * 输入: 0->1->2->NULL, k = 4
 * 输出: 2->0->1->NULL
 * 解释:
 * 向右旋转 1 步: 2->0->1->NULL
 * 向右旋转 2 步: 1->2->0->NULL
 * 向右旋转 3 步: 0->1->2->NULL
 * 向右旋转 4 步: 2->0->1->NULL
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
 * @param {number} k
 * @return {ListNode}
 */


 var rotateRight = function(head, K) {
    // 模仿数组旋转思路,先确定链表长度
    const dummyHead = new ListNode(-1)
    dummyHead.next = head

    let cur = dummyHead
    let len = 0
    
    while(cur.next){
        len++
        cur = cur.next
    }
    let k = K % len
    let end = dummyHead
    let t = len - k
    while(t) {
        end = end.next
        t--
    }
    dummyHead.next = end.next
    end.next = null
    let point = dummyHead
    while(k) {
        point = point.next
        k--
    }
    point.next = head
    return dummyHead.next
};
// @lc code=end

