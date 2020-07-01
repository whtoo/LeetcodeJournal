/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 *
 * https://leetcode-cn.com/problems/intersection-of-two-arrays/description/
 *
 * algorithms
 * Easy (68.02%)
 * Likes:    194
 * Dislikes: 0
 * Total Accepted:    75.3K
 * Total Submissions: 108.1K
 * Testcase Example:  '[1,2,2,1]\n[2,2]'
 *
 * 给定两个数组，编写一个函数来计算它们的交集。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：nums1 = [1,2,2,1], nums2 = [2,2]
 * 输出：[2]
 * 
 * 
 * 示例 2：
 * 
 * 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * 输出：[9,4]
 * 
 * 
 * 
 * 说明：
 * 
 * 
 * 输出结果中的每个元素一定是唯一的。
 * 我们可以不考虑输出结果的顺序。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {

    let minLst = nums1
    let minLen = 0
    let maxLst = null

    if(nums1.length > nums2.length){
        minLen = nums2.length
        minLst = nums2
        maxLst = nums1
    } else {
        minLen = nums1.length
        minLst = nums1
        maxLst = nums2
    }
    // 2. 保证最大的数列必须是有序的
    maxLst.sort((a,b)=> a-b)
    // 3. 将较小的数列中的每一项都在大数列中进行二分查找
    const binSearch = (nums,target)=> {
        let lo = 0
        let hi = nums.length -1
        while(lo <= hi){
            let mid = Math.floor((lo + hi)/2)
            if(nums[mid] == target){
                return mid
            } else if(nums[mid] < target){
                // target在mid的右边,缩小左区间
                lo = mid + 1
            } else {
                // target在mid的左边,缩小右区间
                hi = mid - 1
            }
        }

        return -1
    }

    let set = new Set(minLst.values())
    for(const v of set.values()){
        if(binSearch(maxLst,v) == -1){
            set.delete(v)
        }
    }
    let ret = []
    set.forEach(val => ret.push(val))
    return ret
};
// @lc code=end

console.log(intersection([4,9,5],[9,4,9,8,4]))