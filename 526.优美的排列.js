/*
 * @lc app=leetcode.cn id=526 lang=javascript
 *
 * [526] 优美的排列
 *
 * https://leetcode-cn.com/problems/beautiful-arrangement/description/
 *
 * algorithms
 * Medium (59.03%)
 * Likes:    81
 * Dislikes: 0
 * Total Accepted:    6.1K
 * Total Submissions: 9.8K
 * Testcase Example:  '2'
 *
 * 假设有从 1 到 N 的 N 个整数，如果从这 N 个数字中成功构造出一个数组，使得数组的第 i 位 (1 <= i <= N)
 * 满足如下两个条件中的一个，我们就称这个数组为一个优美的排列。条件：
 * 
 * 
 * 第 i 位的数字能被 i 整除
 * i 能被第 i 位上的数字整除
 * 
 * 
 * 现在给定一个整数 N，请问可以构造多少个优美的排列？
 * 
 * 示例1:
 * 
 * 
 * 输入: 2
 * 输出: 2
 * 解释: 
 * 
 * 第 1 个优美的排列是 [1, 2]:
 * ⁠ 第 1 个位置（i=1）上的数字是1，1能被 i（i=1）整除
 * ⁠ 第 2 个位置（i=2）上的数字是2，2能被 i（i=2）整除
 * 
 * 第 2 个优美的排列是 [2, 1]:
 * ⁠ 第 1 个位置（i=1）上的数字是2，2能被 i（i=1）整除
 * ⁠ 第 2 个位置（i=2）上的数字是1，i（i=2）能被 1 整除
 * 
 * 
 * 说明:
 * 
 * 
 * N 是一个正整数，并且不会超过15。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
var countArrangement = function(N) {
    if (N === 0) return 0;
    let ans = 0,
        map = new Map(),
        checkMap = new Map();
    
    // 构建一个 1 - N 的数组
    // 同时构建出一个各个位置可以放置数字的 「位置 -> 可放值数组」 的 map 结构
    for (let i = 1; i <= N; i++) {
      checkMap.set( i, true );
      let temp = [];
      for (let j = 1; j <= N; j++) {
        if (j % i === 0 || i % j === 0) temp.push( j );
      }
      map.set(i, temp);
    }
    
    function backtrack(curr) {
      // 判断满足条件，统计一次，退出此次递归
      if (curr.length === N) {
        ans++;
        return ;
      }
      
      // curr的长度不够，继续拿下一个位置的数
      let need = map.get( curr.length + 1 );
      /*
        这里的过程稍微复杂一点，逐行解释：
        - 首先判断这个数字使用过没有，如果使用过就不能在使用了，直接跳过
        - 把这个数字放到 curr 中
        - 设置这个数字为不可使用
        - 继续递归
        - 要把刚才使用的数字从 curr 中 pop 掉
        - 同时设置这个数字可使用，继续回溯
      */
      for (let i = 0; i < need.length; i++) {
        if (checkMap.get( need[i] ) === false) continue;
        curr.push( need[i] );
        checkMap.set( need[i], false );
        backtrack( curr );
        curr.pop();
        checkMap.set( need[i], true );
      }
      
    };
    backtrack([]);
    
    return ans;

};
// @lc code=end

