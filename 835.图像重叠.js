/*
 * @lc app=leetcode.cn id=835 lang=javascript
 *
 * [835] 图像重叠
 *
 * https://leetcode-cn.com/problems/image-overlap/description/
 *
 * algorithms
 * Medium (57.48%)
 * Likes:    38
 * Dislikes: 0
 * Total Accepted:    2.4K
 * Total Submissions: 4.1K
 * Testcase Example:  '[[1,1,0],[0,1,0],[0,1,0]]\n[[0,0,0],[0,1,1],[0,0,1]]'
 *
 * 给出两个图像 A 和 B ，A 和 B 为大小相同的二维正方形矩阵。（并且为二进制矩阵，只包含0和1）。
 * 
 * 我们转换其中一个图像，向左，右，上，或下滑动任何数量的单位，并把它放在另一个图像的上面。之后，该转换的重叠是指两个图像都具有 1 的位置的数目。
 * 
 * （请注意，转换不包括向任何方向旋转。）
 * 
 * 最大可能的重叠是什么？
 * 
 * 示例 1:
 * 
 * 输入：A = [[1,1,0],
 * ⁠         [0,1,0],
 * [0,1,0]]
 * B = [[0,0,0],
 * [0,1,1],
 * [0,0,1]]
 * 输出：3
 * 解释: 将 A 向右移动一个单位，然后向下移动一个单位。
 * 
 * 注意: 
 * 
 * 
 * 1 <= A.length = A[0].length = B.length = B[0].length <= 30
 * 0 <= A[i][j], B[i][j] <= 1
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number}
 */
var largestOverlap = function(A, B) {
    let N = A.length
    let count = new Array(2 * N + 1)
    for(let i = 0;i < count.length;i++){
        count[i] = new Array(2 * N + 1).fill(0)
    }
    for(let i = 0;i < N;++i){
        for(let j = 0;j < N;++j){
            if(A[i][j] == 1){
                for(let i2 = 0;i2 < N;++i2){
                    for(let j2 = 0;j2 < N;++j2){
                        if(B[i2][j2] == 1){
                            count[i-i2 + N][j-j2 + N] += 1
                        }
                    }
                }
            }
        }
    }
    let ans = 0
    for(const row of count){
        for(const v of row){
            ans = Math.max(ans,v)
        }
    }
    return ans
};
// @lc code=end

