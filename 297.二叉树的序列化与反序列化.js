/*
 * @lc app=leetcode.cn id=297 lang=javascript
 *
 * [297] 二叉树的序列化与反序列化
 *
 * https://leetcode-cn.com/problems/serialize-and-deserialize-binary-tree/description/
 *
 * algorithms
 * Hard (44.19%)
 * Likes:    314
 * Dislikes: 0
 * Total Accepted:    41.7K
 * Total Submissions: 81.5K
 * Testcase Example:  '[1,2,3,null,null,4,5]'
 *
 * 
 * 序列化是将一个数据结构或者对象转换为连续的比特位的操作，进而可以将转换后的数据存储在一个文件或者内存中，同时也可以通过网络传输到另一个计算机环境，采取相反方式重构得到原数据。
 * 
 * 请设计一个算法来实现二叉树的序列化与反序列化。这里不限定你的序列 /
 * 反序列化算法执行逻辑，你只需要保证一个二叉树可以被序列化为一个字符串并且将这个字符串反序列化为原始的树结构。
 * 
 * 示例: 
 * 
 * 你可以将以下二叉树：
 * 
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   3
 * ⁠    / \
 * ⁠   4   5
 * 
 * 序列化为 "[1,2,3,null,null,4,5]"
 * 
 * 提示: 这与 LeetCode 目前使用的方式一致，详情请参阅 LeetCode
 * 序列化二叉树的格式。你并非必须采取这种方式，你也可以采用其他的方法解决这个问题。
 * 
 * 说明: 不要使用类的成员 / 全局 / 静态变量来存储状态，你的序列化和反序列化算法应该是无状态的。
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
    const queue = [root]
    let res = []
    while (queue.length) {
      const node = queue.shift()
      if (node) { // 出列的节点 带出子节点入列
        res.push(node.val)
        queue.push(node.left) // 不管是不是null节点都入列
        queue.push(node.right)
      } else {
        res.push('#')
      }
    }
    return res.join(',')
  
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if (data == '#') return null       // 就一个'X'，只有一个null
    const list = data.split(',')       // 序列化字符串转成list数组
    const root = new TreeNode(list[0]) //首项是根节点值，为它创建节点
    const queue = [root] // 初始放入root，待会出列考察
    let cursor = 1       // 从list第二项开始遍历
    while (cursor < list.length) {      // 指针越界就退出
      const node = queue.shift()        // 父节点出列考察
      const leftVal = list[cursor]      // 获取左子节点值
      const rightVal = list[cursor + 1] // 获取右子节点值
      if (leftVal !== '#') {   // 左子节点值是有效值
        const leftNode = new TreeNode(leftVal) // 创建节点
        node.left = leftNode   // 成为当前出列节点的左子节点
        queue.push(leftNode)   // 它是未来的爸爸，入列等待考察
      }
      if (rightVal !== '#') {  // 右子节点值是有效值
        const rightNode = new TreeNode(rightVal) // 创建节点
        node.right = rightNode // 成为当前出列节点的右子节点
        queue.push(rightNode)  // 它是未来的爸爸，入列等待考察
      }
      cursor += 2              // 指针前进2位
    }
    return root // 返回根节点
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end

