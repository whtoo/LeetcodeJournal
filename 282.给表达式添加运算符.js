/*
 * @lc app=leetcode.cn id=282 lang=javascript
 *
 * [282] 给表达式添加运算符
 *
 * https://leetcode-cn.com/problems/expression-add-operators/description/
 *
 * algorithms
 * Hard (31.88%)
 * Likes:    116
 * Dislikes: 0
 * Total Accepted:    3.3K
 * Total Submissions: 9.8K
 * Testcase Example:  '"123"\n6'
 *
 * 给定一个仅包含数字 0-9 的字符串和一个目标值，在数字之间添加二元运算符（不是一元）+、- 或 * ，返回所有能够得到目标值的表达式。
 * 
 * 示例 1:
 * 
 * 输入: num = "123", target = 6
 * 输出: ["1+2+3", "1*2*3"] 
 * 
 * 
 * 示例 2:
 * 
 * 输入: num = "232", target = 8
 * 输出: ["2*3+2", "2+3*2"]
 * 
 * 示例 3:
 * 
 * 输入: num = "105", target = 5
 * 输出: ["1*0+5","10-5"]
 * 
 * 示例 4:
 * 
 * 输入: num = "00", target = 0
 * 输出: ["0+0", "0-0", "0*0"]
 * 
 * 
 * 示例 5:
 * 
 * 输入: num = "3456237490", target = 9191
 * 输出: []
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
var addOperators = function(num, target) {
    let res=[],ans=[];
    const backTrack=(num0,val,pre,k)=>{
        if(num0.length<1){
            if(val===target){
                ans.push(res.slice(0,k).join(''));
            }
            return;
        }
        for(let i=0;i<num0.length;i++){
            if(k===0){
                res[k]=(num0.slice(0,i+1));
                backTrack(num0.slice(i+1),Number(res[k]),Number(res[k]),k+1);
            }else{
                res[k]=('+');
                res[k+1]=num0.slice(0,i+1);
                backTrack(num0.slice(i+1),val+Number(res[k+1]),Number(res[k+1]),k+2);
                res[k]=('-');
                res[k+1]=num0.slice(0,i+1);
                backTrack(num0.slice(i+1),val-Number(res[k+1]),-Number(res[k+1]),k+2);
                res[k]=('*');
                res[k+1]=num0.slice(0,i+1);
                backTrack(num0.slice(i+1),val-pre+pre*Number(res[k+1]),pre*Number(res[k+1]),k+2);
            }
            if(num0[0]==='0') break;
        }
    };
    backTrack(num,0,0,0);
    return ans;
};
// /**
//  * 
//  * @param {string} num 
//  * @param {string[]} expr 
//  * @param {number} len 
//  * @param {number} preValue 
//  * @param {number} currValue 
//  * @param {number} pos 
//  * @param {number} target 
//  * @param {string[]} res 
//  */
// function dfs(num,expr,len,prevValue,currValue,pos,target,res){
//     if(pos == num.length){
//         if(currValue == target){
//             res.push(expr.join(''))
//         }
//         return
//     }
//     let n = 0
//     let s = pos
//     let l = len
//     if(s != 0) ++len
//     while(pos < num.length){
//         n = n * 10 + num.charCodeAt(pos) - '0'.charCodeAt(0)
//         if(num.charAt(s) == '0' && pos - s > 0){
//             break
//         }
    
//     if(n > Number.MAX_SAFE_INTEGER) break
//     expr[len] = num.charAt(pos)
//     len++
//     pos++
//     if(s == 0){
//         dfs(num,expr,len,n,n,pos,target,res)
//         continue
//     }
//     expr[l] = '+'
//     dfs(num,expr,  len,n,currValue+n,pos,target,res)
//     expr[l] = '-'
//     dfs(num,expr,  len,-n,currValue-n,pos,target,res)
//     expr[l] = '*';
//     dfs(num, expr, len, prevValue * n, currValue - prevValue + prevValue * n, pos, target, res);
//     }
// }
// @lc code=end

console.log(addOperators('105',5))