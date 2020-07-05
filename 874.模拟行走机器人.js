/*
 * @lc app=leetcode.cn id=874 lang=javascript
 *
 * [874] 模拟行走机器人
 *
 * https://leetcode-cn.com/problems/walking-robot-simulation/description/
 *
 * algorithms
 * Easy (32.06%)
 * Likes:    95
 * Dislikes: 0
 * Total Accepted:    9K
 * Total Submissions: 25.1K
 * Testcase Example:  '[4,-1,3]\n[]'
 *
 * 机器人在一个无限大小的网格上行走，从点 (0, 0) 处开始出发，面向北方。该机器人可以接收以下三种类型的命令：
 * 
 * 
 * -2：向左转 90 度
 * -1：向右转 90 度
 * 1 <= x <= 9：向前移动 x 个单位长度
 * 
 * 
 * 在网格上有一些格子被视为障碍物。
 * 
 * 第 i 个障碍物位于网格点  (obstacles[i][0], obstacles[i][1])
 * 
 * 机器人无法走到障碍物上，它将会停留在障碍物的前一个网格方块上，但仍然可以继续该路线的其余部分。
 * 
 * 返回从原点到机器人所有经过的路径点（坐标为整数）的最大欧式距离的平方。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入: commands = [4,-1,3], obstacles = []
 * 输出: 25
 * 解释: 机器人将会到达 (3, 4)
 * 
 * 
 * 示例 2：
 * 
 * 输入: commands = [4,-1,4,-2,4], obstacles = [[2,4]]
 * 输出: 65
 * 解释: 机器人在左转走到 (1, 8) 之前将被困在 (1, 4) 处
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 <= commands.length <= 10000
 * 0 <= obstacles.length <= 10000
 * -30000 <= obstacle[i][0] <= 30000
 * -30000 <= obstacle[i][1] <= 30000
 * 答案保证小于 2 ^ 31
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function(commands, obstacles) {
    var dx = [0,1,0,-1];
    var dy = [1,0,-1,0];
    var di = 0;
    var endX = 0;
    var endY = 0;
    var result = 0;
    var hashObstacle = {};
    for(var r = 0;r<obstacles.length;r++){
        hashObstacle[obstacles[r][0]+'-'+obstacles[r][1]] = true;
    }
    for(var s = 0;s<commands.length;s++){
        if(commands[s] == -2){
            di = (di+3)&3;
        }else if(commands[s] == -1){
            di = (di+1)&3;
        }else{
            // 每次走一步
            for(var z = 1;z <= commands[s];z++){
                var nextX = endX + dx[di];
                var nextY = endY + dy[di];
                // 判断下一步是否为障碍物
                if(hashObstacle[nextX+'-'+nextY]){
                    break;
                }
                endX = nextX;
                endY = nextY;
                result = Math.max(result,endX*endX+endY*endY);
            }
        }
    }
    return result;
};
// @lc code=end

