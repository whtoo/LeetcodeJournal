/*
 * @lc app=leetcode.cn id=1417 lang=javascript
 *
 * [1417] 重新格式化字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reformat = function(s) {
    num = []
    alpha = []
    for(const v of s){
        if(isNaN(v)){
            alpha.push(v)
        } else{
            num.push(v)
        }
    }
    
    if(Math.abs(num.length - alpha.length) >= 2) return ""
    let max,min;

    if(num.length > alpha.length){
        max = num;
        min = alpha;
    } else {
        max = alpha;
        min = num;
    }
    let odd = true
    let result = max.length == min.length ? min[min.length -1] : ""
    while(max.length > 0){
        let node;
        if(odd){
           node =  max.shift()
        } else {
           node = min.shift()
        }
        result += node
        odd = !odd
    }
    return result
};
// @lc code=end
console.log(reformat("ec"))
console.log(reformat("covid2019"))
console.log(reformat("a0b1c2"))