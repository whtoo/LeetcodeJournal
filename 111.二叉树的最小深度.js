/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
 *
 * https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/description/
 *
 * algorithms
 * Easy (41.38%)
 * Likes:    275
 * Dislikes: 0
 * Total Accepted:    85.3K
 * Total Submissions: 199.7K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，找出其最小深度。
 * 
 * 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。
 * 
 * 说明: 叶子节点是指没有子节点的节点。
 * 
 * 示例:
 * 
 * 给定二叉树 [3,9,20,null,null,15,7],
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 返回它的最小深度  2.
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
const Pair = function(a,b){
    this.node = a
    this.depth = b

}
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    /// Recursive 
    // if(root == null) return 0
    // if(root.left == null && root.right == null) return 1
    // let minDepthNum = Number.MAX_SAFE_INTEGER

    // if(root.left) minDepthNum = Math.min(minDepth(root.left),minDepthNum)
    // if(root.right) minDepthNum = Math.min(minDepth(root.right),minDepthNum)

    // return minDepthNum + 1

    // DFS
    // let stack = new Array()
    // if(root == null) return 0
    // else {
    //     stack.push([root,1])
    // }

    // let minDepthNum = Number.MAX_SAFE_INTEGER

    // while(stack.length > 0){
    //     let current = stack.pop()
    //     root = current[0]
    //     let currentDepth = current[1]
    //     if(root.left == null && root.right == null){
    //         minDepthNum = Math.min(minDepthNum,currentDepth)
    //     }
    //     if(root.left) stack.push(new Array(root.left,currentDepth + 1))
    //     if(root.right) stack.push(new Array(root.right,currentDepth + 1))

    // }
    // return minDepthNum

    // BFS <---- Prune extronous branch on search
    // let stack = new Array()
    // if(root == null) return 0
    // else {
    //     stack.push([root,1])
    // }

    // let currentDepth = 0

    // while(stack.length > 0){
    //     let current = stack.shift()
    //     /**
    //      * <Node : Depth>
    //      */
    //     root = current[0]
    //     currentDepth = current[1]

    //     if(root.left == null && root.right == null){
    //         break
    //     }
    //     if(root.left) stack.push(new Array(root.left,currentDepth + 1))
    //     if(root.right) stack.push(new Array(root.right,currentDepth + 1))

    // }
    // return currentDepth

    // Improved BFS

    // if(!root) return 0
    // let level = 0
    // let queue = [root]
    // while(queue.length){
    //     level += 1
    //     // 同一层次查找最早出现的叶子节点
    //     let len = queue.length
    //     while(len--){
    //         let node = queue.shift()
    //         if(!node.left && !node.right){
    //             return level
    //         }
    //         if(node.left) queue.push(node.left)

    //         if(node.right) queue.push(node.right)
    //     }
    // }
    // return level

    let depthList = [];
    if (!root) { return 0 }
    const calcDepth = (curNode, curDepth) => {
        curDepth = curDepth + 1;
        if (!curNode.left && !curNode.right) { depthList.push(curDepth) }
        if (curNode.left) { calcDepth(curNode.left, curDepth) }
        if (curNode.right) { calcDepth(curNode.right, curDepth) }
        return
    }
    calcDepth(root, 0);
    return Math.min(...depthList);


};
// @lc code=end


function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function createTree(byLst,i){
    
    if(i >= byLst.len) return null
    if(byLst[i] == null) return null

    let root = new TreeNode(byLst[i])
    root.left = createTree(byLst,2*i+1)
    root.right = createTree(byLst,2*(i+1))
    console.log(root,root.left,root.right)
    return root 
}

let depth = minDepth(createTree([1,2],0))
console.log(depth)