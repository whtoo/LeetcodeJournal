/*
 * @lc app=leetcode.cn id=421 lang=javascript
 *
 * [421] 数组中两个数的最大异或值
 *
 * https://leetcode-cn.com/problems/maximum-xor-of-two-numbers-in-an-array/description/
 *
 * algorithms
 * Medium (57.90%)
 * Likes:    145
 * Dislikes: 0
 * Total Accepted:    5.3K
 * Total Submissions: 9K
 * Testcase Example:  '[3,10,5,25,2,8]'
 *
 * 给定一个非空数组，数组中元素为 a0, a1, a2, … , an-1，其中 0 ≤ ai < 2^31 。
 * 
 * 找到 ai 和aj 最大的异或 (XOR) 运算结果，其中0 ≤ i,  j < n 。
 * 
 * 你能在O(n)的时间解决这个问题吗？
 * 
 * 示例:
 * 
 * 
 * 输入: [3, 10, 5, 25, 2, 8]
 * 
 * 输出: 28
 * 
 * 解释: 最大的结果是 5 ^ 25 = 28.
 * 
 * 
 */

// @lc code=start
var IntPatricia = function(key,value){
    this.key = key;
    this.value = value;
    this.prefix = this.mask = null;
    this.left = this.right = null;
}
IntPatricia.prototype.setChildren = function(l,r){
    this.left = l;
    this.right = r;
}

IntPatricia.prototype.isLeaf = function(){
    return this.left == null && this.right == null
}

IntPatricia.prototype.replaceChild = function(x,y) {
    if(this.left == x){
        this.left = y;
    } else {
        this.right = y;
    }
}

IntPatricia.prototype.getPrefix = function() {
    if(this.prefix == null){
        return this.key;
    } else {
        return this.prefix;
    }
}

function maskbit(x,mask){
    return x & (~(mask - 1))
}
/**
 * 
 * @param {int} key 
 * @param {IntPatricia} tree 
 */
function match(key,tree){
    return (!tree.isLeaf() && maskbit(key,tree.mask) == tree.getPrefix());
}

function zero(x,mask) {
    return x & (mask >> 1) == 0
}
/**
 * 
 * @param {number} p1 
 * @param {number} p2 
 * @returns {number[]}
 */
function lcp(p1,p2) {
    let diff = (p1 ^ p2);
    let mask = 1
     while(diff != 0){
         diff >>= 1;
         mask <<= 1;
     }
     return [maskbit(p1,mask),mask]
}
/**
 * 
 * @param {IntPatricia} t1 
 * @param {IntPatricia} t2 
 */
function branch(t1,t2){
    let t = new IntPatricia()
    let [prefix,mask] = lcp(t1.getPrefix(),t2.getPrefix())
    t.prefix = prefix;
    t.mask = mask;
    if(zero(t1.getPrefix(),t.mask)){
        t.setChildren(t1,t2);
    } else {
        t.setChildren(t2,t1);
    }
    return t;
}
/**
 * 
 * @param {number} key 
 * @param {number} value 
 */
IntPatricia.prototype.insert = function(key,value){
    let t = this;

    let node = t;
    let parent = null;
    while(true){
        if(match(key,node)){
            parent = node;
            if(zero(key,node.mask)){
                node = node.left;
            } else {
                node = node.right;
            }
        } else {
            if(node.isLeaf() && key == node.key){
                node.value = value;
            } else {
                let newNode = branch(node,new IntPatricia(key,value));
                if(parent == null){
                    t = newNode
                } else {
                    parent.replaceChild(node,newNode)
                }
            }
            break
        }
    }
    return t;
}
/**
 * @param {string} key
 */
IntPatricia.prototype.lookup = function(key){
    let t = this;

    while(!t.isLeaf() && match(key,t)){
        if(zero(key,t.mask)){
            t = t.left;
        } else {
            t = t.right;
        }
    }

    if(t.isLeaf() && t.key == this.key){
        return t.value;
    } else{
        return null
    }
}
var TrieNode = function(){
    this.children = new Map()
}
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function(nums) {

    let res = 0, mask = 0;
    for (let i = 30; i >= 0; i--) {
      mask = mask | (1 << i);
      let set = new Set();
      for (let v of nums) {
        set.add(v & mask);
      }
      let temp = res | (1 << i);
      for (let v of set) {
        if (set.has(v ^ temp)) {
          res = temp;
          break;
        }
      }
    }
    return res;
    // let ans = 0
    // for(let i = 0;i < nums.length;++i){
    //     for(let j = i+1;j < nums.length;++j){
    //         ans = Math.max(ans,nums[i] ^ nums[j])
    //     }
    // }
    // return ans

     // Compute length L of max number in a binary representation
    //  let maxNum = nums[0];
    //  for(const num of nums) maxNum = Math.max(maxNum, num);
    //  let L = ((maxNum).toString(2)).length;
 
    //  // zero left-padding to ensure L bits for each number
    //  let n = nums.length, bitmask = Math.abs(1 << L) >= 2147483647 ? 2147483647:1 << L;
    //  let strNums = new Array().fill(0)
    //  for(let i = 0; i < n; ++i) {
    //    strNums[i] = (bitmask | nums[i]).toString(2).slice(1);
    //  }
 
    //  let trie = new TrieNode();
    //  let maxXor = 0;
    //  for (let num of strNums) {
    //    let node = trie, xorNode = trie;
    //    let currXor = 0;
    //    for (let bit of num) {
    //      // insert new number in trie  
    //      if (node.children.has(bit)) {
    //        node = node.children.get(bit);
    //      } else {
    //        let newNode = new TrieNode();
    //        node.children.set(bit, newNode);
    //        node = newNode;
    //      }
 
    //      // compute max xor of that new number 
    //      // with all previously inserted
    //      let toggledBit = bit == '1' ? '0' : '1';
    //      if (xorNode.children.has(toggledBit)) {
    //        currXor = (currXor << 1) | 1;
    //        xorNode = xorNode.children.get(toggledBit);
    //      } else {
    //        currXor = currXor << 1;
    //        xorNode = xorNode.children.get(bit);
    //      }
    //    }
    //    maxXor = Math.max(maxXor, currXor);
    //  }
    //  return maxXor;
}
// @lc code=end

console.log(findMaximumXOR([2147483647,2147483646]))