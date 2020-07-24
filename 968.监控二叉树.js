/*
 * @lc app=leetcode.cn id=968 lang=javascript
 *
 * [968] 监控二叉树
 *
 * https://leetcode-cn.com/problems/binary-tree-cameras/description/
 *
 * algorithms
 * Hard (35.56%)
 * Likes:    77
 * Dislikes: 0
 * Total Accepted:    3K
 * Total Submissions: 7.7K
 * Testcase Example:  '[0,0,null,0,0]'
 *
 * 给定一个二叉树，我们在树的节点上安装摄像头。
 * 
 * 节点上的每个摄影头都可以监视其父对象、自身及其直接子对象。
 * 
 * 计算监控树的所有节点所需的最小摄像头数量。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 
 * 输入：[0,0,null,0,0]
 * 输出：1
 * 解释：如图所示，一台摄像头足以监控所有节点。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 
 * 输入：[0,0,null,0,null,0,null,null,0]
 * 输出：2
 * 解释：需要至少两个摄像头来监视树的所有节点。 上图显示了摄像头放置的有效位置之一。
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 给定树的节点数的范围是 [1, 1000]。
 * 每个节点的值都是 0。
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
 * @param {TreeNode} root
 * @return {number}
 */
var minCameraCover = function(root) {
    let res = 0
    let lrd = function(node){
        if (node == null) {
			return 1;
		}
		let left=lrd(node.left);
		let right=lrd(node.right);
		if (left == 0 || right == 0) {
			res++;
			return 2;
		}
		if(left==1&&right==1){
			return 0;
		}
		if(left+right>=3){
			return 1;
		}
	
		return -1;
    }
    if(lrd(root) == 0){
        res++
    }
    return res
    

};
// @lc code=end

