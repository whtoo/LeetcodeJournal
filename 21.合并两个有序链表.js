/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 *
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (59.52%)
 * Likes:    1125
 * Dislikes: 0
 * Total Accepted:    297.9K
 * Total Submissions: 472.6K
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
 * 
 * 
 * 
 * 示例：
 * 
 * 输入：1->2->4, 1->3->4
 * 输出：1->1->2->3->4->4
 * 
 * 
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    const prevHeader = new ListNode(-1);
    let prev = prevHeader
    while(l1 != null && l2 != null){
        if(l1.val <= l2.val){
            prev.next = l1
            l1 = l1.next

        } else if(l1.val > l2.val){
            prev.next = l2
            l2 = l2.next
        }
        prev = prev.next
    }

    prev.next = l1 == null ? l2 : l1;
    return prevHeader.next;
};
// @lc code=end
// let lst = mergeTwoLists([1,2,4].reduce((prev,cur) => {
//     prev.next = new ListNode(cur) 
// },new ListNode(1)),[1,3,4].reduce((prev,cur) => {
//     prev.next = new ListNode(cur) 
// },new ListNode(1)))

// console.log(lst)
function createLst(arr){
    let header;
    let cur;
    for(const num of arr){
        if(header == undefined){
            header = new ListNode(num)
            cur  =  header;
        } else {
            cur.next = new ListNode(num)  
            cur = cur.next
        }
    }    

    return header
}
function dump(lst){
    const buffer = []
    while(lst != null){
        buffer.push(lst.val)
        lst = lst.next
    }
    return buffer
}

let lst = mergeTwoLists(createLst([1,2,4]),createLst([1,3,4]))
console.log(dump(lst))