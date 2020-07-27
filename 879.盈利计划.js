/*
 * @lc app=leetcode.cn id=879 lang=javascript
 *
 * [879] 盈利计划
 *
 * https://leetcode-cn.com/problems/profitable-schemes/description/
 *
 * algorithms
 * Hard (30.61%)
 * Likes:    32
 * Dislikes: 0
 * Total Accepted:    1.2K
 * Total Submissions: 3.3K
 * Testcase Example:  '5\n3\n[2,2]\n[2,3]'
 *
 * 帮派里有 G 名成员，他们可能犯下各种各样的罪行。
 * 
 * 第 i 种犯罪会产生 profit[i] 的利润，它要求 group[i] 名成员共同参与。
 * 
 * 让我们把这些犯罪的任何子集称为盈利计划，该计划至少产生 P 的利润。
 * 
 * 有多少种方案可以选择？因为答案很大，所以返回它模 10^9 + 7 的值。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：G = 5, P = 3, group = [2,2], profit = [2,3]
 * 输出：2
 * 解释： 
 * 至少产生 3 的利润，该帮派可以犯下罪 0 和罪 1 ，或仅犯下罪 1 。
 * 总的来说，有两种方案。
 * 
 * 
 * 示例 2:
 * 
 * 输入：G = 10, P = 5, group = [2,3,5], profit = [6,7,8]
 * 输出：7
 * 解释：
 * 至少产生 5 的利润，只要他们犯其中一种罪就行，所以该帮派可以犯下任何罪行 。
 * 有 7 种可能的计划：(0)，(1)，(2)，(0,1)，(0,2)，(1,2)，以及 (0,1,2) 。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= G <= 100
 * 0 <= P <= 100
 * 1 <= group[i] <= 100
 * 0 <= profit[i] <= 100
 * 1 <= group.length = profit.length <= 100
 * 
 * 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} G
 * @param {number} P
 * @param {number[]} group
 * @param {number[]} profit
 * @return {number}
 */
var profitableSchemes = function(G, P, group, profit) {
    const MOD = 1e9 + 7;
    const N = group.length
    let cur = Array(P+1).fill(0).map(()=>Array(G+1).fill(0))
    cur[0][0] = 1

    for(let i = 0; i < N;++i){
        let p0 = profit[i]
        let g0 = group[i]

        let cur2 = Array(P+1).fill(0).map((_,i)=>cur[i].slice(0))
        for(let p1 = 0; p1 <= P;++p1){
            let p2 = Math.min(p1+p0,P)
            for(let g1 = 0;g1<= G - g0;++g1){
                let g2= g1 + g0
                cur2[p2][g2] += cur[p1][g1]
                cur2[p2][g2] %= MOD
            }
        }
        cur = cur2
    }
    let ans = 0
    for(const x of cur[P]){
        ans += x
    }
    return ans % MOD

};
// @lc code=end

profitableSchemes(10,
    5,
    [2,3,5],
    [6,7,8])