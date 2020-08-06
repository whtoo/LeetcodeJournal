/*
 * @lc app=leetcode.cn id=1331 lang=javascript
 *
 * [1331] 数组序号转换
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    if(arr.length == 0) return []
    if(arr.length == 1) return [1]
    let min = Math.min(...arr)
    if(min < 0) arr = arr.map(val=>val + Math.abs(min))
    let max = Math.max(...arr);

    let bucktes = new Array(max+1).fill(0);
    for(const val of arr){
        bucktes[val]++
    }
    const map = new Map()
    let i = 1
    for(const [idx,val] of bucktes.entries()){
        if(val > 0){
            map.set(idx,i++)
        }
    }
    let ranks = []
    for(const val of arr){
        ranks.push(map.get(val))
    }
    return ranks
};
// @lc code=end

console.log(arrayRankTransform([-10,33,20]))