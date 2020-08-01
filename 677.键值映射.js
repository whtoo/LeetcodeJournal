/*
 * @lc app=leetcode.cn id=677 lang=javascript
 *
 * [677] 键值映射
 *
 * https://leetcode-cn.com/problems/map-sum-pairs/description/
 *
 * algorithms
 * Medium (60.44%)
 * Likes:    49
 * Dislikes: 0
 * Total Accepted:    7.7K
 * Total Submissions: 12.6K
 * Testcase Example:  '["MapSum", "insert", "sum", "insert", "sum"]\n' +
  '[[], ["apple",3], ["ap"], ["app",2], ["ap"]]'
 *
 * 实现一个 MapSum 类里的两个方法，insert 和 sum。
 * 
 * 对于方法 insert，你将得到一对（字符串，整数）的键值对。字符串表示键，整数表示值。如果键已经存在，那么原来的键值对将被替代成新的键值对。
 * 
 * 对于方法 sum，你将得到一个表示前缀的字符串，你需要返回所有以该前缀开头的键的值的总和。
 * 
 * 示例 1:
 * 
 * 输入: insert("apple", 3), 输出: Null
 * 输入: sum("ap"), 输出: 3
 * 输入: insert("app", 2), 输出: Null
 * 输入: sum("ap"), 输出: 5
 * 
 * 
 */

// @lc code=start
/**
 * 
 * @param {string} str1 
 * @param {string} str2 
 * @returns {string[]}
 */
function lcp(str1,str2) {
    let i = 0;
    while(i < str1.length && i < str2.length){
        if(str1[i] == str2[i]) i++
        else break
    }    
    return [str1.slice(0,i),str1.slice(i),str2.slice(i)]
}

var Patricia = function(val){
    this.value = (val != undefined?val: 0)
    this.children = new Map()
}
/**
 * 
 * @param {Patricia} t 
 * @param {string} key 
 * @param {number} value 
 */
Patricia.prototype.insert = function(t,key,value){
    if(t == null){
        t = new Patricia()
    }
    let node = t;
    while(true){
        let match = false;
        for(let [k,tr] of node.children){
            if(key == k){
                // 覆盖原先内容
                tr.value = value
                return t
            }
            let [prefix,k1,k2] = lcp(key,k)
            if(prefix !== ""){
                match = true
                if(k2 == ""){
                    node = tr
                    key = k1
                    break
                } else {
                    node.children.set(prefix,this.branch(k1,new Patricia(value),k2,tr))
                    node.children.delete(k)
                    return t
                }
            }
        }
        if(!match){
            node.children.set(key,new Patricia(value))
            return t
        }
    }

    return t
}
/**
 * 
 * @param {Patricia} t 
 * @param {string} key 
 */
Patricia.prototype.search = function(t,key){
    if(t == null){
        return null
    }

    while(true){
        let match = false
        for(let [k,tr] of t.children){
            if(k == key){
                return tr.value
            }
            let [prefix,k1,k2] = lcp(key,k)
            if(prefix != "" && k2 == ""){
                match = true;
                key = k1;
                t = tr;
                break
            }
        }
        if(!match){
            return null
        }
    }
}
/**
 * 
 * @param {string} key
 */
Patricia.prototype.startWith = function(t,key){
    if(t == null){
        return null
    }

    while(true){
        let match = false
        for(let [k,tr] of t.children){
            if(k.length >= key.length && k.startsWith(key)){
                return tr.value
            }
            let [prefix,k1,k2] = lcp(key,k)
            if(prefix != "" && k2 == ""){
                match = true;
                key = k1;
                t = tr;
                break
            }
        }
        if(!match){
            return 0
        }
    }
}
/**
 * 
 * @param {string} key1
 * @param {Patricia} tree1
 * @param {string} key2
 * @param {Patricia} tree2
 */
Patricia.prototype.branch = function(key1,tree1,key2,tree2){
    if(key1 === ""){
        tree1.children.set(key2,tree2)
        tree1.value += tree2.value
        return tree1
    }
    let t = new Patricia()
    t.value = tree1.value + tree2.value;
    t.children.set(key1,tree1)
    t.children.set(key2,tree2)
    return t;
}
var MapSum = function() {
    this.root = {};
  };
  
  /**
   * @param {string} key
   * @param {number} val
   * @return {void}
   */
  MapSum.prototype.insert = function(key, val) {
    let obj = this.root;
    for (let char of key) {
      if (!obj[char]) {
        obj[char] = {};
      }
      obj = obj[char];
    }
    obj.val = val;
  };
  
  /**
   * @param {string} prefix
   * @return {number}
   */
  MapSum.prototype.sum = function(prefix) {
    let obj = this.root;
    for (let char of prefix) {
      if (obj[char]) {
        obj = obj[char];
      } else {
        obj = {};
      }
    }
    return objSum(obj);
  };
  
  function objSum(obj) {
  
    let res = 0;
    if (obj.val !== undefined) {
      res += obj.val;
    }
    for (let key in obj) {
      res += objSum(obj[key]);
    }
    return res;
  }
// @lc code=end

var mapSum = new MapSum()
mapSum.insert("aa",3)
mapSum.insert("a",2)
console.log(mapSum.sum("ap"))
console.log(mapSum.sum("apple"))
mapSum.insert("app",2)

console.log(mapSum.sum("ap"))
console.log(mapSum.sum("app"))
