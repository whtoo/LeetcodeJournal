/*
 * @lc app=leetcode.cn id=630 lang=javascript
 *
 * [630] 课程表 III
 *
 * https://leetcode-cn.com/problems/course-schedule-iii/description/
 *
 * algorithms
 * Hard (28.81%)
 * Likes:    71
 * Dislikes: 0
 * Total Accepted:    2.8K
 * Total Submissions: 9K
 * Testcase Example:  '[[100,200],[200,1300],[1000,1250],[2000,3200]]'
 *
 * 这里有 n 门不同的在线课程，他们按从 1 到 n 编号。每一门课程有一定的持续上课时间（课程时间）t 以及关闭时间第 d 天。一门课要持续学习 t
 * 天直到第 d 天时要完成，你将会从第 1 天开始。
 * 
 * 给出 n 个在线课程用 (t, d) 对表示。你的任务是找出最多可以修几门课。
 * 
 * 
 * 
 * 示例：
 * 
 * 
 * 输入: [[100, 200], [200, 1300], [1000, 1250], [2000, 3200]]
 * 输出: 3
 * 解释: 
 * 这里一共有 4 门课程, 但是你最多可以修 3 门:
 * 首先, 修第一门课时, 它要耗费 100 天，你会在第 100 天完成, 在第 101 天准备下门课。
 * 第二, 修第三门课时, 它会耗费 1000 天，所以你将在第 1100 天的时候完成它, 以及在第 1101 天开始准备下门课程。
 * 第三, 修第二门课时, 它会耗时 200 天，所以你将会在第 1300 天时完成它。
 * 第四门课现在不能修，因为你将会在第 3300 天完成它，这已经超出了关闭日期。
 * 
 * 
 * 
 * 提示:
 * 
 * 
 * 整数 1 <= d, t, n <= 10,000 。
 * 你不能同时修两门课程。
 * 
 * 
 * 
 * 
 */

// @lc code=start
class PriorityQueue {
    constructor(
      compare = (a, b) => a > b 
      ){
      this.data = []
      this.size = 0
      this.compare = compare
    }
  
    peek() {
      return this.size === 0 ? null : this.data[0] 
    }
  
    offer(val) {
      this.data.push(val)
      this._shifUp(this.size++)
    }
  
    poll() {
      if(this.size === 0) { return null }
      this._swap(0, --this.size)
      this._shifDown(0)
      return this.data.pop()
    }
  
    _parent(index) {
      return index - 1 >> 1
    }
    
    _child(index) {
      return (index << 1) + 1
    }
  
    _shifDown(index) {
      while(this._child(index) < this.size) {
        let child = this._child(index)
        if(child + 1 < this.size 
          && this.compare(this.data[child + 1], this.data[child])) {
            child = child + 1
        }
        if(this.compare(this.data[index], this.data[child])){
          break
        }
        this._swap(index, child)
        index = child
      }
    }
  
    _shifUp(index) {
      while(this._parent(index) >= 0 
      && this.compare(this.data[index], this.data[this._parent(index)])) {
        this._swap(index, this._parent(index))
        index = this._parent(index)
      }
    }
  
    _swap(a, b) {
      [this.data[a], this.data[b]] = [this.data[b], this.data[a]]
    }
  }
  
/**
 * @param {number[][]} courses
 * @return {number}
 */
var scheduleCourse = function(courses) {
    // /// 最后截止时间
    // let maxD = -1
    // let cnt = 0

    // for(const [t,d] of courses){
    //     maxD = Math.max(maxD,d)
    // }
    // courses.sort((a,b)=>{
    //     if(a[1] - b[1] == 0){
    //         return a[0] - b[0]
    //     } else{
    //         return a[1] - b[1]
    //     }
    // })
    // let day = 0
    // let ans = []
    // for(const [t,d] of courses){
    //     if(day + t <= d && maxD > 0 && maxD >= t){
    //         day += t
    //         maxD -= t
    //         cnt++
    //         ans.push([t,d])
    //     }
    // }
    // console.log(ans)
    // return cnt
     // 先根据课程 deadline 排序 先学 deadline 小的课程
  courses.sort((a, b) => a[1] - b[1])
  let queue = new PriorityQueue()
  let startTime = 0 
  for(let i = 0, l = courses.length; i < l; i++) {
    // 判断该课程是否可选 (起始时间 + 课程时长 <= 课程结束时间)
    if(startTime + courses[i][0] <= courses[i][1]){
      // 将课程放入优先队列
      queue.offer(courses[i][0])
      // 设定下节课的合法起始时间
      startTime += courses[i][0]
    } else if(queue.size && queue.peek() > courses[i][0]) { // 如果该课程不可选就判断 优先队列头节点(课程时间最大) 课程时间 是否比 当前课程大
      // 重新计算下节课的起始时间
      startTime += courses[i][0] - queue.poll()
      // 将课程放入优先队列
      queue.offer(courses[i][0])
    }
  }
  // 在优先队列中的课程数量就是答案 其实就是优先队列中的课程加起来总时长最短 
  return queue.size
};
// @lc code=end

console.log(scheduleCourse([[5,5],[4,6],[2,6]]))