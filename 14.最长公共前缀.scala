/*
 * @lc app=leetcode.cn id=14 lang=scala
 *
 * [14] 最长公共前缀
 */

// @lc code=start
object Solution {
    def longestCommonPrefix(strs: Array[String]): String = {
        if (strs.length <= 0) return ""
        var prefix = ""
        var firstElem = strs(0)
        var tmp = ""
        for (s <- firstElem) {
            tmp += s
            for (elem <- strs.drop(1)) {
                if(!elem.startsWith(tmp)) {
                    return prefix
                }
            }
            prefix = tmp
        }

        return prefix
    }
}
// @lc code=end

