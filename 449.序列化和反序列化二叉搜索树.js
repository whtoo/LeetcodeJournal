/*
 * @lc app=leetcode.cn id=449 lang=javascript
 *
 * [449] 序列化和反序列化二叉搜索树
 *
 * https://leetcode-cn.com/problems/serialize-and-deserialize-bst/description/
 *
 * algorithms
 * Medium (50.65%)
 * Likes:    91
 * Dislikes: 0
 * Total Accepted:    6.4K
 * Total Submissions: 12.2K
 * Testcase Example:  '[2,1,3]'
 *
 * 序列化是将数据结构或对象转换为一系列位的过程，以便它可以存储在文件或内存缓冲区中，或通过网络连接链路传输，以便稍后在同一个或另一个计算机环境中重建。
 * 
 * 设计一个算法来序列化和反序列化二叉搜索树。 对序列化/反序列化算法的工作方式没有限制。
 * 您只需确保二叉搜索树可以序列化为字符串，并且可以将该字符串反序列化为最初的二叉搜索树。
 * 
 * 编码的字符串应尽可能紧凑。
 * 
 * 注意：不要使用类成员/全局/静态变量来存储状态。 你的序列化和反序列化算法应该是无状态的。
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
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    if(root == null) return "#!"
    let res = root.val + "!"
    res += serialize(root.left)
    res += serialize(root.right)
    return res
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    let values = data.split('!')
    let queue = []
    queue.push(...values)

    const deserializePostOrder = function(){
        let value = queue.shift()
        if(value === "#"){
            return null
        }
        let head = new TreeNode(parseInt(value))
        head.left = deserializePostOrder()
        head.right = deserializePostOrder()
        return head
    }
    return deserializePostOrder(queue)    
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end

console.log(deserialize("2!1!3!"))