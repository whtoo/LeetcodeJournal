/*
 * @lc app=leetcode.cn id=1360 lang=javascript
 *
 * [1360] 日期之间隔几天
 */

// @lc code=start
/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
var daysBetweenDates = function(date1, date2) {
    date1 = date1.split('-').map(val => parseInt(val))
    date2 = date2.split('-').map(val => parseInt(val))
    
    const dateToInt = function(year,month,day){
        let month_length = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
        let ans = day - 1
        while (month != 0){
            month -= 1
            ans += month_length[month]
            if(month == 2 && leapYear(year)){
                ans += 1
            }
        }
           
        ans += 365 * (year - 1971)
        ans += Math.floor((year - 1) / 4) - Math.floor(1971 / 4)
        ans -= Math.floor((year - 1) / 100 )- Math.floor(1971 / 100)
        ans += Math.floor((year - 1) / 400) - Math.floor(1971 / 400)

        return ans
    }

    const leapYear = function(year){
        return ((year % 400 == 0) || (year % 100 != 0 && year % 4 == 0));
    }
    return Math.abs(dateToInt(date1[0],date1[1],date1[2]) - dateToInt(date2[0],date2[1],date2[2]))
};
const dateDiff = function(date1,date2){
    date1 = new Date(date1).getTime() / 1000 / 60 / 60 / 24;
    date2 = new Date(date2).getTime() / 1000 / 60 / 60 / 24;
return Math.abs(date1 - date2);
}
// @lc code=end

console.log(daysBetweenDates("2019-06-29","2019-06-30"))
console.log(daysBetweenDates("1971-06-29","2010-09-23"))
console.log(dateDiff("1971-06-29","2010-09-23"))

