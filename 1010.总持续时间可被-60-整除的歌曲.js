/*
 * @lc app=leetcode.cn id=1010 lang=javascript
 *
 * [1010] 总持续时间可被 60 整除的歌曲
 *
 * https://leetcode-cn.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/description/
 *
 * algorithms
 * Easy (43.09%)
 * Likes:    95
 * Dislikes: 0
 * Total Accepted:    12.8K
 * Total Submissions: 29.7K
 * Testcase Example:  '[30,20,150,100,40]'
 *
 * 在歌曲列表中，第 i 首歌曲的持续时间为 time[i] 秒。
 * 
 * 返回其总持续时间（以秒为单位）可被 60 整除的歌曲对的数量。形式上，我们希望索引的数字 i 和 j 满足  i < j 且有 (time[i] +
 * time[j]) % 60 == 0。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：[30,20,150,100,40]
 * 输出：3
 * 解释：这三对的总持续时间可被 60 整数：
 * (time[0] = 30, time[2] = 150): 总持续时间 180
 * (time[1] = 20, time[3] = 100): 总持续时间 120
 * (time[1] = 20, time[4] = 40): 总持续时间 60
 * 
 * 
 * 示例 2：
 * 
 * 输入：[60,60,60]
 * 输出：3
 * 解释：所有三对的总持续时间都是 120，可以被 60 整数。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= time.length <= 60000
 * 1 <= time[i] <= 500
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(time) {

    let n = time.length;
    if (time === null || n === 0) return 0;
    let count = new Array(60);
    for (let k = 0; k < 60; k++) {
        count[k] = 0;
    }
    for (let i = 0; i < n; i++) {
        count[time[i] % 60]++;
    }
    let result = 0;
    // 针对余数0和30：
    result += count[0] * (count[0] - 1) / 2 + count[30] * (count[30] - 1) / 2;
    // 针对其他余数， 避免重复，只算1-29的：
    for (let j = 1; j <= 29; j++) {
        result += count[j] * count[60 - j];
    }
    return result;
};
// @lc code=end
console.log(numPairsDivisibleBy60([30,20,150,100,40]))
