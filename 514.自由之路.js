/*
 * @lc app=leetcode.cn id=514 lang=javascript
 *
 * [514] 自由之路
 *
 * https://leetcode-cn.com/problems/freedom-trail/description/
 *
 * algorithms
 * Hard (38.15%)
 * Likes:    59
 * Dislikes: 0
 * Total Accepted:    2K
 * Total Submissions: 5K
 * Testcase Example:  '"godding"\n"gd"'
 *
 * 视频游戏“辐射4”中，任务“通向自由”要求玩家到达名为“Freedom Trail Ring”的金属表盘，并使用表盘拼写特定关键词才能开门。
 * 
 * 给定一个字符串 ring，表示刻在外环上的编码；给定另一个字符串 key，表示需要拼写的关键词。您需要算出能够拼写关键词中所有字符的最少步数。
 * 
 * 最初，ring 的第一个字符与12:00方向对齐。您需要顺时针或逆时针旋转 ring 以使 key 的一个字符在 12:00
 * 方向对齐，然后按下中心按钮，以此逐个拼写完 key 中的所有字符。
 * 
 * 旋转 ring 拼出 key 字符 key[i] 的阶段中：
 * 
 * 
 * 您可以将 ring 顺时针或逆时针旋转一个位置，计为1步。旋转的最终目的是将字符串 ring 的一个字符与 12:00
 * 方向对齐，并且这个字符必须等于字符 key[i] 。
 * 如果字符 key[i] 已经对齐到12:00方向，您需要按下中心按钮进行拼写，这也将算作 1 步。按完之后，您可以开始拼写 key
 * 的下一个字符（下一阶段）, 直至完成所有拼写。
 * 
 * 
 * 示例：
 * 
 * 
 * 
 * 
 * 
 * 
 * 输入: ring = "godding", key = "gd"
 * 输出: 4
 * 解释:
 * ⁠对于 key 的第一个字符 'g'，已经在正确的位置, 我们只需要1步来拼写这个字符。 
 * ⁠对于 key 的第二个字符 'd'，我们需要逆时针旋转 ring "godding" 2步使它变成 "ddinggo"。
 * ⁠当然, 我们还需要1步进行拼写。
 * ⁠因此最终的输出是 4。
 * 
 * 
 * 提示：
 * 
 * 
 * ring 和 key 的字符串长度取值范围均为 1 至 100；
 * 两个字符串中都只有小写字符，并且均可能存在重复字符；
 * 字符串 key 一定可以由字符串 ring 旋转拼出。
 * 
 */

// @lc code=start
/**
 * 
 * @param {string[]} ring 
 */
function RingArray(ring) {
    this._nums = ring.map(val=>val)
    this.cur = 0
    this.len = this._nums.length
    this.prev = -1
    return this
}

RingArray.prototype.clockwiseMove = function(step){
    this.prev = this.cur
    this.cur = (this.cur + step) % this.len 
}

RingArray.prototype.unClockwiseMove = function(step){
    this.prev = this.cur
    this.cur = (this.cur + this.len - step) % this.len
}

RingArray.prototype.currentKey = function(){
    return this._nums[this.cur]
}

RingArray.prototype.currentPos = function(){
    return this.cur
}

RingArray.prototype.clone = function(){
    let newRingArr = new RingArray(this._nums)
    newRingArr.cur = this.cur
    newRingArr.len = this.len
    newRingArr.prev = this.prev
    return newRingArr
}

RingArray.prototype.setPos = function(pos){
    this.prev = this.cur
    this.cur = (pos % this.len)
}

RingArray.prototype.restore = function(){
    this.cur = this.prev
    this.prev = -1
}
/**
 * @param {string} ring
 * @param {string} key
 * @return {number}
 */
var findRotateSteps = function(ring, key) {
    let prevDp = []
    let curDp = []

    let temp = {sum:Infinity, index: 0}
    for(let i = 0;i < key.length;++i){
        prevDp = [...curDp]
        curDp = []
        for(let j = 0; j < ring.length;++j){
            if(key[i] == ring[j]){
                if(i === 0){
                    curDp.push({sum: Math.min(j,ring.length - j) + 1,index:j})
                    continue
                }
                temp = {sum:Infinity, index:j}
                prevDp.forEach(ele => {
                    temp.sum  = Math.min(
                        temp.sum,
                        ele.sum + 
                        Math.min(
                            Math.abs(ele.index - j),
                            ring.length - Math.abs(ele.index - j)
                        ) + 1
                    )
                })
                curDp.push(temp)
            }
        }
    }
    curDp.sort((a,b)=> a.sum - b.sum)
    return curDp[0].sum
};
// @lc code=end

console.log(findRotateSteps("iotfo","fioot"))