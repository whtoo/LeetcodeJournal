/*
 * @lc app=leetcode.cn id=1534 lang=javascript
 *
 * [1534] 统计好三元组
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var countGoodTriplets = function(arr, a, b, c) {
    let distance = new Map()
    for(let i = 0;i < arr.length-1;++i){
        distance.set(i,[])
        let lst = distance.get(i)
        for(let j=i+1;j <arr.length;++j){
           lst.push(Math.abs(arr[i] - arr[j]))
        }
    }
    let cnt = 0
    for(const [key,diffs] of distance){
       if(key < arr.length - 2){
            for(const [idx,diff] of diffs.entries()){
                if(diff <= a){
                    let midDiffs = distance.get(key+idx+1)
                    if(midDiffs == undefined) continue
                    for(const [midIdx,midDiff] of midDiffs.entries()){
                        if(midDiff <= b){
                            if(diffs[idx + midIdx + 1] <= c){
                                cnt++
                            }
                        }
                    }
                }
            }
       }
    }
    return cnt
};
// @lc code=end

console.log(countGoodTriplets([3,0,1,1,9,7],7,2,3))
console.log(countGoodTriplets([1,1,2,2,3],0,0,1))