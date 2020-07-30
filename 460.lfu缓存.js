/*
 * @lc app=leetcode.cn id=460 lang=javascript
 *
 * [460] LFU缓存
 *
 * https://leetcode-cn.com/problems/lfu-cache/description/
 *
 * algorithms
 * Hard (33.72%)
 * Likes:    227
 * Dislikes: 0
 * Total Accepted:    15.1K
 * Total Submissions: 35.9K
 * Testcase Example:  '["LFUCache","put","put","get","put","get","get","put","get","get","get"]\n' +
  '[[2],[1,1],[2,2],[1],[3,3],[2],[3],[4,4],[1],[3],[4]]'
 *
 * 请你为 最不经常使用（LFU）缓存算法设计并实现数据结构。它应该支持以下操作：get 和 put。
 * 
 * 
 * get(key) - 如果键存在于缓存中，则获取键的值（总是正数），否则返回 -1。
 * put(key, value) -
 * 如果键已存在，则变更其值；如果键不存在，请插入键值对。当缓存达到其容量时，则应该在插入新项之前，使最不经常使用的项无效。在此问题中，当存在平局（即两个或更多个键具有相同使用频率）时，应该去除最久未使用的键。
 * 
 * 
 * 「项的使用次数」就是自插入该项以来对其调用 get 和 put 函数的次数之和。使用次数会在对应项被移除后置为 0 。
 * 
 * 
 * 
 * 进阶：
 * 你是否可以在 O(1) 时间复杂度内执行两项操作？
 * 
 * 
 * 
 * 示例：
 * 
 * LFUCache cache = new LFUCache( 2 /* capacity (缓存容量) */ );
 * 
 * cache.put(1, 1);
 * cache.put(2, 2);
 * cache.get(1);       // 返回 1
 * cache.put(3, 3);    // 去除 key 2
 * cache.get(2);       // 返回 -1 (未找到key 2)
 * cache.get(3);       // 返回 3
 * cache.put(4, 4);    // 去除 key 1
 * cache.get(1);       // 返回 -1 (未找到 key 1)
 * cache.get(3);       // 返回 3
 * cache.get(4);       // 返回 4
 * 
 */

// @lc code=start
/**
 * 定义节点
 * @param {*} key 
 * @param {*} val 
 */
var Node = function(key, val) {
    this.key = key
    this.val = val
    this.freq = 1 // 当前节点的 key 被使用的频率
    this.pre = null // 前一个节点的指针
    this.post = null // 后一个节点的指针
  }
  
  /**
   * 定义双向链表
   */
  var DoublyLinkedList = function() {
    this.head = new Node() // 头节点
    this.tail = new Node() // 尾节点
    this.head.post = this.tail // 初始化时，头节点的后一个节点为尾节点
    this.tail.pre = this.head // 初始化时，尾节点的前一个节点为头节点
  }
  
  DoublyLinkedList.prototype.removeNode = function(node) {
    // 1. 将当前节点的前一个节点的 post 指针指向当前节点的 post 指针
    node.pre.post = node.post
    // 2. 将当前节点的后一个节点的 pre 指针指向当前节点的 pre 指针
    node.post.pre = node.pre
  }
  
  DoublyLinkedList.prototype.addNode = function(node) {
    // 为了方便理解，不妨设当前只有头尾节点以及需要插入的该节点
    // 总的来说，就是分别处理该节点与头尾节点的 pre/post 指针
    // 1. 将 该节点的后一个节点 设置为 头节点的后一个节点(即尾节点)
    node.post = this.head.post
    // 2. 将 尾节点的前一个节点 设置为 该节点
    this.head.post.pre = node
    // 3. 将头节点的后一个节点设置为该节点
    this.head.post = node
    // 4. 将该节点的前一个节点设置为头节点
    node.pre = this.head
  }
/**
 * @param {number} capacity
 */
var LFUCache = function(capacity) {
    this.capacity = capacity;
    this.size = 0;
    this.minfreq = 0;
    this.cacheMap = new Map();// key -> value
    this.freqMap = new Map();// freq -> (key,value,freq)
};

/** 
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function(key) {
    if(!this.cacheMap.has(key)){
        return -1;
    }
    const node = this.cacheMap.get(key);
    this.incFreq(node);
    return node.val;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function(key, value) {
    if(this.capacity == 0){
        return;
    }

    const node = this.cacheMap.get(key);
    if(node){
        node.val = value;
        this.incFreq(node);
    } else {
        // 如果容量已被使用完，则需要移除 最不经常使用 的节点，以空出容量
    if (this.capacity === this.size) {
        // 获取最小使用频率所对应的双向链表
        const minFreqLinkedList = this.freqMap.get(this.minFreq)
        // 将该链表的尾节点的前一个节点移除(尾节点的前一个节点才是有效节点，尾节点充当哨兵作用)
        this.cacheMap.delete(minFreqLinkedList.tail.pre.key)
        minFreqLinkedList.removeNode(minFreqLinkedList.tail.pre)
        this.size--
      }
      // 将该值封装成节点并放进 cacheMap 中
      const newNode = new Node(key, value)
      this.cacheMap.set(key, newNode)
      // 同时需要将该节点插入 freqMap 中频率最小的双向链表中
      // 获取使用频率为 1 的双向链表
      let linkedList = this.freqMap.get(1)
      // 若使用频率为 1 的双向链表是空的，则创建该链表并放进 freqMap 中
      if (!linkedList) {
        linkedList = new DoublyLinkedList()
        this.freqMap.set(1, linkedList)
      }
      // 将新节点放入双向链表中，同时更新 size / minFreq
      linkedList.addNode(newNode)
      this.size++
      this.minFreq = 1
  
    }
    
};
/**
   * @param {Node} node
   */
  LFUCache.prototype.incFreq = function(node) {
    // 总的来说，把该节点从旧频率对应的链表中移除，然后放进新频率对应的链表中
    // 获取该节点的使用频率
    let freq = node.freq
    // 获取该使用频率(旧频率)对应的链表
    let linkedList = this.freqMap.get(freq)
    // 将该节点从旧频率对应的链表中移除
    linkedList.removeNode(node)
    // 同时满足以下两种情况时，更新 Freq 的值
    // 1. 旧频率等于最小频率
    // 2. 该链表为空链表
    if (freq === this.minFreq && linkedList.head.post === linkedList.tail) {
      this.minFreq = freq + 1
    }
    // 增加该节点的使用频率，姑且称为 新频率
    node.freq++
    // 获取新频率对应的链表
    linkedList = this.freqMap.get(freq + 1)
    // 如果链表为空，则需要新建链表，并将其放入 freqMap
    if (!linkedList) {
      linkedList = new DoublyLinkedList()
      this.freqMap.set(freq + 1, linkedList)
    }
    // 将新频率的节点放进链表中
    linkedList.addNode(node)
  }

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

