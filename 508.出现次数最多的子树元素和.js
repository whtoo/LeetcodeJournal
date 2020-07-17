/*
 * @lc app=leetcode.cn id=508 lang=javascript
 *
 * [508] 出现次数最多的子树元素和
 *
 * https://leetcode-cn.com/problems/most-frequent-subtree-sum/description/
 *
 * algorithms
 * Medium (61.55%)
 * Likes:    70
 * Dislikes: 0
 * Total Accepted:    6.7K
 * Total Submissions: 10.3K
 * Testcase Example:  '[5,2,-3]'
 *
 * 给你一个二叉树的根结点，请你找出出现次数最多的子树元素和。一个结点的「子树元素和」定义为以该结点为根的二叉树上所有结点的元素之和（包括结点本身）。
 * 
 * 你需要返回出现次数最多的子树元素和。如果有多个元素出现的次数相同，返回所有出现次数最多的子树元素和（不限顺序）。
 * 
 * 
 * 
 * 示例 1：
 * 输入:
 * 
 * ⁠ 5
 * ⁠/  \
 * 2   -3
 * 
 * 
 * 返回 [2, -3, 4]，所有的值均只出现一次，以任意顺序返回所有值。
 * 
 * 示例 2：
 * 输入：
 * 
 * ⁠ 5
 * ⁠/  \
 * 2   -5
 * 
 * 
 * 返回 [2]，只有 2 出现两次，-5 只出现 1 次。
 * 
 * 
 * 
 * 提示： 假设任意子树元素和均可以用 32 位有符号整数表示。
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
 * @return {number[]}
 */
var findFrequentTreeSum = function(root) {
    let map = {}, ans = [];
  
    function calcuSum(node) {
      if (!node) return 0;
      let left = calcuSum(node.left);
      let right = calcuSum(node.right);
      let sum = node.val + left + right;
      node.val = sum;
      if (map[sum] === undefined) {
        map[sum] = 1;
      } else {
        map[sum] ++;
      }
      return node.val;
    }
    calcuSum(root);
    
    let maxCount = 0;
    for (let key in map) {
      let count = map[key];
      if (count === maxCount) {
        ans.push( Number(key) );
      }
      if (count > maxCount) {
        maxCount = count;
        ans = [Number(key)];
      }
    }
    
    return ans;

};
// @lc code=end

