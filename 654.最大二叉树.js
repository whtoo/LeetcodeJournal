/*
 * @lc app=leetcode.cn id=654 lang=javascript
 *
 * [654] 最大二叉树
 *
 * https://leetcode-cn.com/problems/maximum-binary-tree/description/
 *
 * algorithms
 * Medium (78.86%)
 * Likes:    168
 * Dislikes: 0
 * Total Accepted:    16.8K
 * Total Submissions: 20.6K
 * Testcase Example:  '[3,2,1,6,0,5]'
 *
 * 给定一个不含重复元素的整数数组。一个以此数组构建的最大二叉树定义如下：
 * 
 * 
 * 二叉树的根是数组中的最大元素。
 * 左子树是通过数组中最大值左边部分构造出的最大二叉树。
 * 右子树是通过数组中最大值右边部分构造出的最大二叉树。
 * 
 * 
 * 通过给定的数组构建最大二叉树，并且输出这个树的根节点。
 * 
 * 
 * 
 * 示例 ：
 * 
 * 输入：[3,2,1,6,0,5]
 * 输出：返回下面这棵树的根节点：
 * 
 * ⁠     6
 * ⁠   /   \
 * ⁠  3     5
 * ⁠   \    / 
 * ⁠    2  0   
 * ⁠      \
 * ⁠       1
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 给定的数组的大小在 [1, 1000] 之间。
 * 
 * 
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
    return constructTree(nums, 0, nums.length - 1)
};

function constructTree(nums, l, r) {
    if(l == r) {
        var root = new TreeNode(nums[l])
        return root
    }

    var maxIndex = getMaxIndex(nums, l, r)
    var root = new TreeNode(nums[maxIndex])
    if(maxIndex == l) {
        var rightNode = constructTree(nums, l + 1, r)
        root.right = rightNode
        return root
    } else if(maxIndex == r) {
        var leftNode = constructTree(nums, l, r - 1)
        root.left = leftNode
        return root
    }

    var leftNode = constructTree(nums, l, maxIndex - 1)
    var rightNode = constructTree(nums, maxIndex + 1, r)
    root.left = leftNode
    root.right = rightNode

    return root
}

function getMaxIndex(nums, l, r) {
    var maxIndex = l
    for(var i = l;i <= r;i++) {
       if(nums[i] > nums[maxIndex]) {
           maxIndex = i
       }
    }

    return maxIndex
}

// @lc code=end

