/*
 * @lc app=leetcode.cn id=925 lang=javascript
 *
 * [925] 长按键入
 *
 * https://leetcode-cn.com/problems/long-pressed-name/description/
 *
 * algorithms
 * Easy (44.93%)
 * Likes:    73
 * Dislikes: 0
 * Total Accepted:    9.9K
 * Total Submissions: 23.7K
 * Testcase Example:  '"alex"\n"aaleex"'
 *
 * 你的朋友正在使用键盘输入他的名字 name。偶尔，在键入字符 c 时，按键可能会被长按，而字符可能被输入 1 次或多次。
 * 
 * 你将会检查键盘输入的字符 typed。如果它对应的可能是你的朋友的名字（其中一些字符可能被长按），那么就返回 True。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：name = "alex", typed = "aaleex"
 * 输出：true
 * 解释：'alex' 中的 'a' 和 'e' 被长按。
 * 
 * 
 * 示例 2：
 * 
 * 输入：name = "saeed", typed = "ssaaedd"
 * 输出：false
 * 解释：'e' 一定需要被键入两次，但在 typed 的输出中不是这样。
 * 
 * 
 * 示例 3：
 * 
 * 输入：name = "leelee", typed = "lleeelee"
 * 输出：true
 * 
 * 
 * 示例 4：
 * 
 * 输入：name = "laiden", typed = "laiden"
 * 输出：true
 * 解释：长按名字中的字符并不是必要的。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * name.length <= 1000
 * typed.length <= 1000
 * name 和 typed 的字符都是小写字母。
 * 
 * 
 * 
 * 
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
    let namePoint=0,typedPoint=0;
    while(namePoint<name.length&&typedPoint<typed.length){
        if(name[namePoint]===typed[typedPoint]){
            namePoint++;
            typedPoint++;
            continue;
        }
        if(name[namePoint]!==typed[typedPoint]){
            if(name[namePoint-1]!==typed[typedPoint]){
                // "alex" "aaleelx" 这种情况
                return false
            }else{
                typedPoint++;
            }
            continue;
        }
    }
    if(typedPoint===typed.length&&namePoint<name.length){
        // type指针走完，name指针还没走完
        return false
    }else{
        if(namePoint===name.length&&typedPoint<typed.length){
            // "alex" "alexxr"  这种情况,判断type剩下的字符是否只等于name的最后一个字符
            return [...new Set(typed.slice(typedPoint))].join('')===name[name.length-1];//字符串去重
        }else{
            return true
        }
    }
};
// @lc code=end

console.log(isLongPressedName("alex","aaleex"))