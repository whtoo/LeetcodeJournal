/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原IP地址
 *
 * https://leetcode-cn.com/problems/restore-ip-addresses/description/
 *
 * algorithms
 * Medium (45.58%)
 * Likes:    292
 * Dislikes: 0
 * Total Accepted:    50.1K
 * Total Submissions: 106.6K
 * Testcase Example:  '"25525511135"'
 *
 * 给定一个只包含数字的字符串，复原它并返回所有可能的 IP 地址格式。
 * 
 * 有效的 IP 地址正好由四个整数（每个整数位于 0 到 255 之间组成），整数之间用 '.' 分隔。
 * 
 * 
 * 
 * 示例:
 * 
 * 输入: "25525511135"
 * 输出: ["255.255.11.135", "255.255.111.35"]
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    let result = [];
    function helper(s, last, segments){
        if(segments == 3){
            if(s.length <= 3 && parseInt(s.slice(0,3)) <= 255){
                if(s.length >= 2 && s.charAt(0) == "0"){
                    return
                }
                let item = last.concat(s)
                result.push(item);
                return
            }
        }
        if(segments < 3){
            let item = last.concat(s.slice(0,1)).concat(".");
            helper(s.slice(1), item, segments+1)
            if(s.charAt(0) != "0"){
                item = last.concat(s.slice(0,2)).concat(".")
                helper(s.slice(2), item, segments+1)
                if(parseInt(s.slice(0,3)) <= 255){
                    item = last.concat(s.slice(0,3)).concat(".")
                    helper(s.slice(3), item, segments+1);
                }
            }
        }
    }
    helper(s, "", 0);
    return result;
};
// @lc code=end

