/*
 * @lc app=leetcode.cn id=1356 lang=javascript
 *
 * [1356] 根据数字二进制下 1 的数目排序
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
    arr.sort((a,b)=>a-b)
    let buckets = new Array(Math.ceil(Math.log2(1e4))).fill(0).map(_ => [])
    let sortArr = []
    const bitCnt = function(num) {
        let cnt = 0
        while(num > 0){
            num &= num - 1
            cnt++
        }
        return cnt
    }
    for(const val of arr){
        buckets[bitCnt(val)].push(val)
    }
    sortArr = buckets.reduce((pre,cur)=> pre.concat(cur),sortArr)
    return sortArr
};
// @lc code=end

console.log(sortByBits([8848,4205,113,3764,2376,6352,6372,9927,2990,4286,7783,2121,3749,7800,7479,2723,8305,8276,3598,5776,8016,5053,3113,4395,3595,5079,3065,3158,6141,4187,1328,4900,2120,3239,6474,2218,4892,7993]))
