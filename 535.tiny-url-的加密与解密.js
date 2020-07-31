/*
 * @lc app=leetcode.cn id=535 lang=javascript
 *
 * [535] TinyURL 的加密与解密
 *
 * https://leetcode-cn.com/problems/encode-and-decode-tinyurl/description/
 *
 * algorithms
 * Medium (80.98%)
 * Likes:    82
 * Dislikes: 0
 * Total Accepted:    9.4K
 * Total Submissions: 11.4K
 * Testcase Example:  '"https://leetcode.com/problems/design-tinyurl"'
 *
 * TinyURL是一种URL简化服务， 比如：当你输入一个URL https://leetcode.com/problems/design-tinyurl
 * 时，它将返回一个简化的URL http://tinyurl.com/4e9iAk.
 * 
 * 要求：设计一个 TinyURL 的加密 encode 和解密 decode
 * 的方法。你的加密和解密算法如何设计和运作是没有限制的，你只需要保证一个URL可以被加密成一个TinyURL，并且这个TinyURL可以用解密方法恢复成原本的URL。
 * 
 */

// @lc code=start
var map = new Map();
var rand = () => (Math.random() * 62) | 0;
var alphabet = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var getRand = ()=>{
    let buffer = ""
    for(let i =0;i < 6;++i){
        buffer += alphabet.charAt(rand())
    }
    return buffer
}
var key = getRand();

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function(longUrl) {
    while(map.has(key)){
        key = getRand();
    }
    map.set(key,longUrl);
    return "http://tinyurl.com/" + key;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    return map.get(shortUrl.replace("http://tinyurl.com/", ""));
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */
// @lc code=end

