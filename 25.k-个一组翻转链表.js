/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
 *
 * https://leetcode-cn.com/problems/reverse-nodes-in-k-group/description/
 *
 * algorithms
 * Hard (56.06%)
 * Likes:    627
 * Dislikes: 0
 * Total Accepted:    81.6K
 * Total Submissions: 131.9K
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * 给你一个链表，每 k 个节点一组进行翻转，请你返回翻转后的链表。
 * 
 * k 是一个正整数，它的值小于或等于链表的长度。
 * 
 * 如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。
 * 
 * 
 * 
 * 示例：
 * 
 * 给你这个链表：1->2->3->4->5
 * 
 * 当 k = 2 时，应当返回: 2->1->4->3->5
 * 
 * 当 k = 3 时，应当返回: 3->2->1->4->5
 * 
 * 
 * 
 * 说明：
 * 
 * 
 * 你的算法只能使用常数的额外空间。
 * 你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。
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
 * @param {number} k
 * @return {ListNode}
 */
function myReverse(head,tail) {
    let prev = tail.next
    let p = head
    while(prev !== tail){
        const nex = p.next
        p.next = prev
        prev = p
        p = nex
    }
    return [tail,head]
}

var reverseKGroup = function(head, k) {
    const dummy = new ListNode(-1)
    dummy.next = head
    let pre = dummy
    while(head){
        let tail = pre;
        // 查看剩余部分长度是否大于等于 k
        for (let i = 0; i < k; ++i) {
            tail = tail.next;
            if (!tail) {
                return dummy.next;
            }
        }

          const nex = tail.next;// ';' bug? 
        //const nex = tail.next;

         [head, tail] = myReverse(head,tail)
        //[head, tail] = myReverse(head, tail);

        pre.next = head;
        tail.next = nex;
        pre = tail;
        head = tail.next;

    }
    return dummy.next
    // let safeG = new ListNode(-1)
    // safeG.next = head
    // if(head == null || k == 1) return head
    // let pre = safeG, cur = head, post = head.next
    // while(cur != null){
    //     post = cur.next
    //     let i = 0
    //     while(i < k && post != null){
    //         let temp = post.next
    //         post.next = cur
    //         cur = post
    //         post = temp
    //         i++
    //     }
    //     if(i != k-1){
    //         let k = 0
    //         let temp = post
    //         post = cur
    //         cur  = temp
    //         while(k < i){
    //             temp = post.next
    //             post.next = cur
    //             cur = post
    //             post = temp
    //             k++
    //         }
    //         break
    //     }
    //     let temp = pre.next
    //     pre.next = cur
    //     temp.next = post
    //     pre = temp
    //     cur = pre.next
    // }
    // head = safeG.next
    // return head
};
// @lc code=end

