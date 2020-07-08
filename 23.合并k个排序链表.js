/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个排序链表
 *
 * https://leetcode-cn.com/problems/merge-k-sorted-lists/description/
 *
 * algorithms
 * Hard (48.69%)
 * Likes:    781
 * Dislikes: 0
 * Total Accepted:    139.7K
 * Total Submissions: 267.7K
 * Testcase Example:  '[[1,4,5],[1,3,4],[2,6]]'
 *
 * 合并 k 个排序链表，返回合并后的排序链表。请分析和描述算法的复杂度。
 * 
 * 示例:
 * 
 * 输入:
 * [
 * 1->4->5,
 * 1->3->4,
 * 2->6
 * ]
 * 输出: 1->1->2->3->4->4->5->6
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if(lists == null) return lists
    const mergeTwoLists = function(l1, l2) {
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
    let header = new ListNode(Number.MIN_SAFE_INTEGER)
    for(let i = 0;i < lists.length;i++){        
        header = mergeTwoLists(header,lists[i])
    }
    return header.next
};
// @lc code=end
function ListNode(val) {
    this.val = val;
    this.next = null;
}
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

let lst = mergeKLists([createLst([1,2,4]),createLst([1,3,4]),createLst([2,6])])
console.log(dump(lst))