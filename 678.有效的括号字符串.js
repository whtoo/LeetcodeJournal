/*
 * @lc app=leetcode.cn id=678 lang=javascript
 *
 * [678] 有效的括号字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    let left = []
    let star = []
    let ch = '';
    for(let i = 0;i < s.length;++i){
        ch = s[i];
        if(ch === '(') {
            left.push(i)
        } else if(ch === '*') {
            star.push(i)
        } else {
            if(left > 0) left.pop()
            else if(star > 0) star.pop()
            else return false
        }
    }

    if(left.length > star.length) return false
    while(left.length >  0){
        if(left[left.length - 1] > star[star.length-1]) return false
        left.pop()
        star.pop()
    }

    return true
};
// @lc code=end


checkValidString("((*)")