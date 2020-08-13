/*
 * @lc app=leetcode.cn id=1436 lang=javascript
 *
 * [1436] 旅行终点站
 */

// @lc code=start
/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    let from = new Set()
    let to = new Set()
    for(const path of paths){
       from.add(path[0])
       to.add(path[1])
    }
    for(const val of from){
        if(to.has(val)) to.delete(val)
    }
    return [...to.values()][0]
};
// @lc code=end

console.log(destCity([["B","C"],["D","B"],["C","A"]]))
console.log(destCity( [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]))