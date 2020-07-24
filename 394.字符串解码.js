/*
 * @lc app=leetcode.cn id=394 lang=javascript
 *
 * [394] 字符串解码
 *
 * https://leetcode-cn.com/problems/decode-string/description/
 *
 * algorithms
 * Medium (48.32%)
 * Likes:    422
 * Dislikes: 0
 * Total Accepted:    52.5K
 * Total Submissions: 99.5K
 * Testcase Example:  '"3[a]2[bc]"'
 *
 * 给定一个经过编码的字符串，返回它解码后的字符串。
 * 
 * 编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。
 * 
 * 你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。
 * 
 * 此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，例如不会出现像 3a 或 2[4] 的输入。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：s = "3[a]2[bc]"
 * 输出："aaabcbc"
 * 
 * 
 * 示例 2：
 * 
 * 输入：s = "3[a2[c]]"
 * 输出："accaccacc"
 * 
 * 
 * 示例 3：
 * 
 * 输入：s = "2[abc]3[cd]ef"
 * 输出："abcabccdcdcdef"
 * 
 * 
 * 示例 4：
 * 
 * 输入：s = "abc3[cd]xyz"
 * 输出："abccdcdcdxyz"
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let numStack = []            // 存 倍数num 的栈
  let strStack = []            // 存 待拼接的str 的栈
  let num = 0                  // 倍数的“搬运工”
  let result = ''              // 字符串的“搬运工”
  for (const char of s) {      // 逐字符扫描
    if (!isNaN(char)) {        // 遇到数字
      num = num * 10 + Number(char) // 读取数字
    } else if (char === '[') { // 遇到 [
      strStack.push(result)    // result串进入strStack栈等待
      result = ''              // 完成进栈后 清零
      numStack.push(num)       // 倍数num进入栈等待
      num = 0                  // 完成进栈后 清零
    } else if (char === ']') { // 遇到 ]，两个栈的栈顶出栈
      let repeatTimes = numStack.pop() // 获取拷贝次数
      result = strStack.pop() + result.repeat(repeatTimes) // 构建子串
    } else {                   // 遇到字母，追加给result串
      result += char
    }
  }
  return result 
};
// @lc code=end
console.log(decodeString("abc3[cd]xyz"))
