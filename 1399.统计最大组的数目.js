/*
 * @lc app=leetcode.cn id=1399 lang=javascript
 *
 * [1399] 统计最大组的数目
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function(n) {
    let buckets = new Array(1001).fill(0)

    const dec = function(num){
        let cnt = 0
        while(num > 0){
            cnt += num % 10
            num = num / 10 |  0
        }
        return cnt
    }
    
    for(let i = 1;i <= n;++i){
        buckets[dec(i)]++
    }
    buckets.sort((a,b)=>b-a);
    let guard = buckets[0] > 0 ? buckets[0] : -1;

    return buckets.filter(val => guard == val).length
};
// @lc code=end

console.log(countLargestGroup(24))