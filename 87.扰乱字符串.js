/*
 * @lc app=leetcode.cn id=87 lang=javascript
 *
 * [87] 扰乱字符串
 *
 * https://leetcode-cn.com/problems/scramble-string/description/
 *
 * algorithms
 * Hard (44.65%)
 * Likes:    136
 * Dislikes: 0
 * Total Accepted:    11K
 * Total Submissions: 23.4K
 * Testcase Example:  '"great"\n"rgeat"'
 *
 * 给定一个字符串 s1，我们可以把它递归地分割成两个非空子字符串，从而将其表示为二叉树。
 * 
 * 下图是字符串 s1 = "great" 的一种可能的表示形式。
 * 
 * ⁠   great
 * ⁠  /    \
 * ⁠ gr    eat
 * ⁠/ \    /  \
 * g   r  e   at
 * ⁠          / \
 * ⁠         a   t
 * 
 * 
 * 在扰乱这个字符串的过程中，我们可以挑选任何一个非叶节点，然后交换它的两个子节点。
 * 
 * 例如，如果我们挑选非叶节点 "gr" ，交换它的两个子节点，将会产生扰乱字符串 "rgeat" 。
 * 
 * ⁠   rgeat
 * ⁠  /    \
 * ⁠ rg    eat
 * ⁠/ \    /  \
 * r   g  e   at
 * ⁠          / \
 * ⁠         a   t
 * 
 * 
 * 我们将 "rgeat” 称作 "great" 的一个扰乱字符串。
 * 
 * 同样地，如果我们继续交换节点 "eat" 和 "at" 的子节点，将会产生另一个新的扰乱字符串 "rgtae" 。
 * 
 * ⁠   rgtae
 * ⁠  /    \
 * ⁠ rg    tae
 * ⁠/ \    /  \
 * r   g  ta  e
 * ⁠      / \
 * ⁠     t   a
 * 
 * 
 * 我们将 "rgtae” 称作 "great" 的一个扰乱字符串。
 * 
 * 给出两个长度相等的字符串 s1 和 s2，判断 s2 是否是 s1 的扰乱字符串。
 * 
 * 示例 1:
 * 
 * 输入: s1 = "great", s2 = "rgeat"
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: s1 = "abcde", s2 = "caebd"
 * 输出: false
 * 
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function(s1, s2) {
/**
   * 感谢 @最初の声は 的讲解
   */
  const n = s1.length;
  const m = s2.length;
  if (n !== m) return false;
  let dp = new Array(n);
  for (let i = 0; i < n; i++) {
    dp[i] = new Array(n);
    for (let j = 0; j < n; j++) {
      dp[i][j] = new Array(n + 1).fill(false);
    }
  }
  /**
   * 初始化单个字符匹配的结果
   */
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      dp[i][j][1] = s1[i] === s2[j];
    }
  }
  // [2, n] 长度匹配
  for (let len = 2; len <= n; len++) {
    // 注意边界，每 len 段都要进行匹配，所以边界为 [0, n - len]
    for (let i = 0; i < n - len + 1; i++) {
      for (let j = 0; j < n - len + 1; j++) {
        // 已经记录过的值就无需再改写
        for (let k = 1; k < len && !dp[i][j][len]; k++) {
          // 两种情况：S1 match T1 && S2 match T2 || S1 match T2 && S2 match T1
          // i: S起始点
          // j: T起始点
          // k: 截取点
          dp[i][j][len] =
            (dp[i][j][k] && dp[i + k][j + k][len - k]) ||
            (dp[i][j + len - k][k] && dp[i + k][j][len - k]);
        }
      }
    }
  }
  // 代表从 S0 T0 开始，长度为 n 的解
  return dp[0][0][n];

};
// @lc code=end

