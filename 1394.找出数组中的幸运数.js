/*
 * @lc app=leetcode.cn id=1394 lang=javascript
 *
 * [1394] 找出数组中的幸运数
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    let buckets = new Array(501).fill(0)
    let cnt = -1
    for(const v of arr){
        buckets[v]++
    }

    buckets = buckets.filter((val,idx)=> val != 0 && val == idx)
    cnt = buckets.length > 0 && buckets[0] > 0 ? buckets[buckets.length - 1] : -1
    return cnt
};
// @lc code=end

console.log(findLucky([2,2,3,4]))