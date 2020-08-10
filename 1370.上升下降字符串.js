/*
 * @lc app=leetcode.cn id=1370 lang=javascript
 *
 * [1370] 上升下降字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {
    let arr = new Array(26).fill(0)
    let cnt = 0
    let key = []
    for(const c of s){
        if(!key.includes(c.charCodeAt(0) - 97)) key.push(c.charCodeAt(0)-97)
        arr[c.charCodeAt(0) - 97]++
        cnt++
    }
    key.sort((a,b)=>a-b)
    let cur = 0;// Current alpha order
    let result = ""
    let next = 0; // Current key's position
    let clockwise = true;
    while(cnt > 0){
        if(clockwise){
            if(next < key.length){
                next++
            }
        } else {
            if(next >= 0){
                next--
            }
        }
    }
    return result;
};
// @lc code=end

console.log(sortString( "aaaabbbbcccc"))