/*
 * @lc app=leetcode.cn id=37 lang=javascript
 *
 * [37] 解数独
 *
 * https://leetcode-cn.com/problems/sudoku-solver/description/
 *
 * algorithms
 * Hard (59.33%)
 * Likes:    312
 * Dislikes: 0
 * Total Accepted:    18.5K
 * Total Submissions: 31.1K
 * Testcase Example:  '[["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]'
 *
 * 编写一个程序，通过已填充的空格来解决数独问题。
 * 
 * 一个数独的解法需遵循如下规则：
 * 
 * 
 * 数字 1-9 在每一行只能出现一次。
 * 数字 1-9 在每一列只能出现一次。
 * 数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。
 * 
 * 
 * 空白格用 '.' 表示。
 * 
 * 
 * 
 * 一个数独。
 * 
 * 
 * 
 * 答案被标成红色。
 * 
 * Note:
 * 
 * 
 * 给定的数独序列只包含数字 1-9 和字符 '.' 。
 * 你可以假设给定的数独只有唯一解。
 * 给定数独永远是 9x9 形式的。
 * 
 * 
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    new Sudoku(board).solve()
};

class Sudoku {
    constructor(board){
        this.board = board
        this.rows = new Array(9).fill(0)
        this.columns = new Array(9).fill(0)
        this.boxs = Array.from({length:3}, ()=>new Array(3).fill(0))
        this.emptyCells = new Set()
    }

    solve() {
        for(let i = 0; i < 9;i++){
            for(let j = 0;j < 9;j++){
                let num = this.board[i][j]
                if(num !== "."){
                    const sign = 1 << (Number(num) - 1)
                    this.rows[i] |= sign
                    this.columns[j] |= sign
                    this.boxs[Math.floor(i / 3)][Math.floor(j /3)] |= sign
                } else{
                    this.emptyCells.add((i << 4) | j)
                }
            }
        }
        return this.fillNext()
    }

    fillNext(){
        let cellInfo = this.getEmptyCell()
        if(cellInfo === null){
            return true
        }
        let [i,j,possible] = cellInfo
        while(possible){
            const sign = ((possible -1) & possible ^ possible)
            this.fillCell(i,j,sign)
            if(this.fillNext()){
                return true
            } else {
                possible ^= sign
                this.cleanCell(i,j,sign)
            }
        }
    }
    getEmptyCell() {
        let min = 10;
        let cellInfo = null;
        for (const id of this.emptyCells) {
            const i = id >> 4, j = id & 0b1111;
            const possible = this.getCellPossible(i, j);
            const count = this.countPossible(possible);
            if (min > count) {
                //挑选可能性最少的格子，理论上可减少犯错回溯
                cellInfo = [i, j, possible];
                min = count;
            }
        }
        return cellInfo;
    }
    countPossible(possible) {
        //计算二进制 1 的数量
        let count = 0;
        while (possible) {
            possible &= (possible - 1);
            count++;
        }
        return count;
    }
    fillCell(i, j, sign) {
        //对应位变成1，标记占用
        this.rows[i] |= sign;
        this.columns[j] |= sign;
        this.boxs[Math.floor(i / 3)][Math.floor(j / 3)] |= sign;
        //填入空格
        this.emptyCells.delete((i << 4) | j);
        this.board[i][j] = String(Math.log2(sign) + 1);
    }
    cleanCell(i, j, sign) {
        //对应位变为0，清除占用
        this.rows[i] &= ~sign;
        this.columns[j] &= ~sign;
        this.boxs[Math.floor(i / 3)][Math.floor(j / 3)] &= ~sign;
        //清空格子
        this.emptyCells.add((i << 4) | j)
        this.board[i][j] = ".";
    }
    getCellPossible(i, j) {
        //获取格子可能的取值，二进制1表示可选
        return (this.rows[i] | this.columns[j] | this.boxs[Math.floor(i / 3)][Math.floor(j / 3)]) ^ 0b111111111;
    }
}
// @lc code=end

