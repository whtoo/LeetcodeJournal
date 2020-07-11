/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
 *
 * https://leetcode-cn.com/problems/linked-list-cycle-ii/description/
 *
 * algorithms
 * Medium (48.18%)
 * Likes:    532
 * Dislikes: 0
 * Total Accepted:    93K
 * Total Submissions: 182.7K
 * Testcase Example:  '[3,2,0,-4]\n1'
 *
 * 给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。
 * 
 * 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。
 * 
 * 说明：不允许修改给定的链表。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：head = [3,2,0,-4], pos = 1
 * 输出：tail connects to node index 1
 * 解释：链表中有一个环，其尾部连接到第二个节点。
 * 
 * 
 * 
 * 
 * 示例 2：
 * 
 * 输入：head = [1,2], pos = 0
 * 输出：tail connects to node index 0
 * 解释：链表中有一个环，其尾部连接到第一个节点。
 * 
 * 
 * 
 * 
 * 示例 3：
 * 
 * 输入：head = [1], pos = -1
 * 输出：no cycle
 * 解释：链表中没有环。
 * 
 * 
 * 
 * 
 * 
 * 
 * 进阶：
 * 你是否可以不用额外空间解决此题？
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
var detectCycle = function(head) {
    // let first = head
    // let second = head
    // while(first != null && second != null){
    //     first = first.next;
    //     second = second.next;
    //     if(second != null){
    //         second = second.next;
    //         if(first == second){
    //             break;
    //         }
    //     }
    // }
    // if(second == null) return null;
    // first = head
    // while(first != head){
    //     first = first.next;
    //     second = second.next;
    // }
    // return second

    let slowP = head, fastP = head // 都从头节点出发
    while (fastP) {                // head就是null了，没有入环点，直接返回null
      if (fastP.next == null) return null // fastP.next为null也说明无环
      slowP = slowP.next           // 慢指针走一步
      fastP = fastP.next.next      // 快指针走两步
      if (slowP == fastP) {        // 首次相遇
        fastP = head               // 让快指针回到头节点
        while (true) {             // 开启循环，让快慢指针相遇
          if (slowP == fastP) {    // 相遇，地点发生在入环处
            return slowP           // 返回出指针的位置
          }
          fastP = fastP.next       // 快慢指针都走一步
          slowP = slowP.next
        }
      }
    }
    return null
  
};
// @lc code=end

