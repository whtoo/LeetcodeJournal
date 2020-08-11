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
    let key = []
    for(const c of s){
        arr[c.charCodeAt(0) - 97]++
    }
    let result = ""
    const hasChar = function(arr){
        for(let i =0;i < 26;++i){
            if(arr[i] > 0) return true
        }
        return false
    } 
    const appendChar = function(p){
        if(arr[p]){
            --arr[p];
            result += String.fromCharCode(p+97)
        }
    }
    while(true){
      if(!hasChar(arr)) break
      for(let i = 0;i < 26;++i) appendChar(i)
      for(let i = 25;i >= 0;--i) appendChar(i)
    }
    return result;
};
// @lc code=end

console.log(sortString( "aaaabbbbcccc"))