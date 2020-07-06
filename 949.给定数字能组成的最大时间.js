/*
 * @lc app=leetcode.cn id=949 lang=javascript
 *
 * [949] 给定数字能组成的最大时间
 *
 * https://leetcode-cn.com/problems/largest-time-for-given-digits/description/
 *
 * algorithms
 * Easy (34.40%)
 * Likes:    43
 * Dislikes: 0
 * Total Accepted:    5.2K
 * Total Submissions: 14.8K
 * Testcase Example:  '[1,2,3,4]'
 *
 * 给定一个由 4 位数字组成的数组，返回可以设置的符合 24 小时制的最大时间。
 * 
 * 最小的 24 小时制时间是 00:00，而最大的是 23:59。从 00:00 （午夜）开始算起，过得越久，时间越大。
 * 
 * 以长度为 5 的字符串返回答案。如果不能确定有效时间，则返回空字符串。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：[1,2,3,4]
 * 输出："23:41"
 * 
 * 
 * 示例 2：
 * 
 * 输入：[5,5,5,5]
 * 输出：""
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * A.length == 4
 * 0 <= A[i] <= 9
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {string}
 */
var largestTimeFromDigits = function(A) {
        let maxNumber = -1;
        let result = '';
        for (let i = 0; i < 4; i++) {
          for (let j = 0; j < 4; j++) {
            const hour = String(A[i]) + String(A[j]);
            if (j !== i && A[i] <= 2 && Number(hour) < 24) {
              for (let k = 0; k < 4; k++) {
                const minute = String(A[k]) + String(A[6 - i - j - k]);
                if (k !== i && k !== j && Number(minute) < 60) {
                  if (Number(hour + minute) > maxNumber) {
                    maxNumber = Number(hour + minute);
                    result = hour + ':' + minute;
                  }
                }
              }
            }
          }
        }
        return result;
};
// @lc code=end

