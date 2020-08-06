/*
 * @lc app=leetcode.cn id=1441 lang=javascript
 *
 * [1441] 用栈操作构建数组
 */

// @lc code=start
/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
    let result = []
    let j = 0
    for(let i = 1;i <= n;++i){
        if(target[j] == i){
            result.push("Push")
            j++
            if(j == target.length) break
        } else {
            result.push("Push")
            result.push("Pop")
        }
    }

    return result
};
// @lc code=end

//console.log(buildArray([2,3,4],4))
console.log(buildArray([1,2],3))
//console.log(buildArray([1,2],4))