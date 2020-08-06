/*
 * @lc app=leetcode.cn id=1385 lang=javascript
 *
 * [1385] 两个数组间的距离值
 */

// @lc code=start
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function(arr1, arr2, d) {
    let cnt = 0
    for(const v of arr1){
        let passed = true
        for(const n of arr2){
            if(Math.abs(v-n) <= d){
                passed = false
                break
            }
        }
        if(passed) cnt++;
    }

    return cnt;
};
// @lc code=end

console.log(findTheDistanceValue([1,4,2,3], [-4,-3,6,10,20,30],3))