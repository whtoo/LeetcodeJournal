/*
 * @lc app=leetcode.cn id=937 lang=javascript
 *
 * [937] 重新排列日志文件
 *
 * https://leetcode-cn.com/problems/reorder-data-in-log-files/description/
 *
 * algorithms
 * Easy (51.53%)
 * Likes:    33
 * Dislikes: 0
 * Total Accepted:    5.7K
 * Total Submissions: 10.2K
 * Testcase Example:  '["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]'
 *
 * 你有一个日志数组 logs。每条日志都是以空格分隔的字串。
 * 
 * 对于每条日志，其第一个字为字母与数字混合的 标识符。
 * 
 * 
 * 除标识符之外，所有字均由小写字母组成的，称为 字母日志
 * 除标识符之外，所有字均由数字组成的，称为 数字日志
 * 
 * 
 * 题目所用数据保证每个日志在其标识符后面至少有一个字。
 * 
 * 请按下述规则将日志重新排序：
 * 
 * 
 * 所有 字母日志 都排在 数字日志 之前。
 * 字母日志 在内容不同时，忽略标识符后，按内容字母顺序排序；在内容相同时，按标识符排序；
 * 数字日志 应该按原来的顺序排列。
 * 
 * 
 * 返回日志的最终顺序。
 * 
 * 
 * 
 * 示例 ：
 * 
 * 输入：["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo"]
 * 输出：["g1 act car","a8 act zoo","ab1 off key dog","a1 9 2 3 1","zo4 4 7"]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 <= logs.length <= 100
 * 3 <= logs[i].length <= 100
 * logs[i] 保证有一个标识符，并且标识符后面有一个字。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
    let numberArr = []
    let wordArr = []
    // 处理数字和字母标识分开
    for (let i = 0; i < logs.length; i++) {
      if (Number(logs[i].split(' ')[1][0]) || Number(logs[i].split(' ')[1][0]) === 0) {
        numberArr.push(logs[i])
      } else {
        wordArr.push(logs[i])
      }
    }
    wordArr.sort((cNum, nNum) => {
			let cNumIndex = cNum.indexOf(' ')
			let nNumIndex = nNum.indexOf(' ')
      let cSplit1 = cNum.substring(0, cNumIndex)
      let cSplit2 = cNum.substring(cNumIndex, cNum.length)
      let nSplit1 = nNum.substring(0, nNumIndex)
      let nSplit2 = nNum.substring(nNumIndex, nNum.length)
      if (cSplit2 === nSplit2) {
        return cSplit1 < nSplit1 ? -1 : 1
      } else {
        return cSplit2 < nSplit2 ? -1 : 1
      }
    })
    return wordArr.concat(numberArr)
};
// @lc code=end

