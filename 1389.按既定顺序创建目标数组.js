/*
 * @lc app=leetcode.cn id=1389 lang=javascript
 *
 * [1389] 按既定顺序创建目标数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    let ret = new Array(nums.length).fill(-1)
    for(let i = 0;i < ret.length;++i){
        if(ret[index[i]] == -1) ret[index[i]] = nums[i]
        else {
            let writeVal = nums[i]
            let tmp = ret[index[i]]
            ret[index[i]] = writeVal
            writeVal = tmp
            for(let j = index[i]+1;j < ret.length;++j){
                tmp = ret[j]
                ret[j] = writeVal
                writeVal = tmp
            }
        }
    }
    return ret
};
// @lc code=end

console.log(createTargetArray([0,1,2,3,4],[0,1,2,2,1]))
console.log(createTargetArray([1,2,3,4,0],[0,1,2,3,0]))
console.log(createTargetArray([1],[0]))