/*
 * @lc app=leetcode.cn id=1460 lang=javascript
 *
 * [1460] 通过翻转子数组使两个数组相等
 */

// @lc code=start
/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
    let s1 = new Map()
    let s2 = new Map()
    if(target.length != arr.length) return false

    for(let i = 0;i < target.length;++i){
        s1.set(target[i],s1.has(target[i])?s1.get(target[i]) + 1:1)
        s2.set(arr[i],s2.has(arr[i])?s2.get(arr[i]) + 1:1)
    }
    if(s1.size != s2.size) return false
    for(const key of s1.keys()){
        if(s1.get(key) != s2.get(key)) return false
    }
   
    return true
};
// @lc code=end

console.log(canBeEqual([1,2,3],[3,1,2]))