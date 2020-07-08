/*
 * @lc app=leetcode.cn id=1036 lang=javascript
 *
 * [1036] 逃离大迷宫
 *
 * https://leetcode-cn.com/problems/escape-a-large-maze/description/
 *
 * algorithms
 * Hard (25.97%)
 * Likes:    28
 * Dislikes: 0
 * Total Accepted:    1.7K
 * Total Submissions: 6.2K
 * Testcase Example:  '[[0,1],[1,0]]\n[0,0]\n[0,2]'
 *
 * 在一个 10^6 x 10^6 的网格中，每个网格块的坐标为 (x, y)，其中 0 <= x, y < 10^6。
 * 
 * 我们从源方格 source 开始出发，意图赶往目标方格 target。每次移动，我们都可以走到网格中在四个方向上相邻的方格，只要该方格不在给出的封锁列表
 * blocked 上。
 * 
 * 只有在可以通过一系列的移动到达目标方格时才返回 true。否则，返回 false。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：blocked = [[0,1],[1,0]], source = [0,0], target = [0,2]
 * 输出：false
 * 解释：
 * 从源方格无法到达目标方格，因为我们无法在网格中移动。
 * 
 * 
 * 示例 2：
 * 
 * 输入：blocked = [], source = [0,0], target = [999999,999999]
 * 输出：true
 * 解释：
 * 因为没有方格被封锁，所以一定可以到达目标方格。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 <= blocked.length <= 200
 * blocked[i].length == 2
 * 0 <= blocked[i][j] < 10^6
 * source.length == target.length == 2
 * 0 <= source[i][j], target[i][j] < 10^6
 * source != target
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} blocked
 * @param {number[]} source
 * @param {number[]} target
 * @return {boolean}
 */
var isEscapePossible = function(blocked, source, target) {
    const blockLen = blocked.length
    if(blockLen == 0){
        return true
    }

    const startVisited = new Set()
    const endVisited = new Set()
    const M = 10 ** 6 - 1
    const startQueue = []
    const endQueue = []
    startQueue.push(source)
    endQueue.push(target)
    startVisited.add(source.join('$'))
    endVisited.add(target.join('$'))
    while( startQueue.length && endQueue.length){
        if(startQueue.length > blockLen && endQueue.length > blockLen){
            return true
        }
        if (endQueue.some(([i, j]) => startQueue.some(([m, n]) => i === m && j === n))) {
            return true;
          }
        addNode(startQueue,startVisited)
        addNode(endQueue,endVisited)
    }
    return false
    
    function addNode(queue,visited){
        const dir = [
            [0,1],
            [0,-1],
            [-1,0],
            [1,0]
        ]
        for(let i = queue.length-1;i >= 0;i--){
            const [r,c] = queue.shift()
            for(let d = 0; d < 4;d++){
                const m = dir[d][0] + r
                const n = dir[d][1] + c
                if(
                    m < 0 || 
                    n <0 || 
                    m>=M || 
                    n >= M || 
                    blocked.some(([i,j])=>i === m && j === n) || 
                visited.has(m + '$' + n)){
                    continue
                }
                queue.push([m,n])
                visited.add(m + '$' + n)
            }
        }
    }
};

// @lc code=end

