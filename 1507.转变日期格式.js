/*
 * @lc app=leetcode.cn id=1507 lang=javascript
 *
 * [1507] 转变日期格式
 */

// @lc code=start
/**
 * @param {string} date
 * @return {string}
 */
var reformatDate = function(date) {
    let arr = date.split(' ')
    const monthDef = {"Jan":"01", "Feb":"02", "Mar":"03", "Apr":"04", "May":"05", "Jun":"06", "Jul":"07", "Aug":"08", "Sep":"09", "Oct":"10", "Nov":"11", "Dec":"12"}
    let day,month,year;
    day = arr[0].replace(/[a-z]+/g,'')
    day = day.length == 2? day : '0'+ day;
    month = monthDef[arr[1]]
    year = arr[2]
    return `${year}-${month}-${day}`;
};
// @lc code=end

