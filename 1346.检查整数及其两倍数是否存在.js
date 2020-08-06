/*
 * @lc app=leetcode.cn id=1346 lang=javascript
 *
 * [1346] 检查整数及其两倍数是否存在
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    let map = new Map()
    arr.forEach((val,idx)=>map.set(val,idx))
    for(const val of arr){
        if(val % 2 == 0 && (map.has(val / 2) || map.has(val * 2))){
            if(val == 0 && arr.filter(val => val === 0).length > 1){
                return true
            } else if(val !== 0){
                return true
            }

            return false
        }
    }
    return false
};
// @lc code=end

console.log(checkIfExist([-20,8,-6,-14,0,-19,14,4]))
console.log(checkIfExist([-2,0,10,-19,4,6,-8]))
console.log(checkIfExist([0,0]))