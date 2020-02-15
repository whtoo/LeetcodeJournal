/**
 * 题目-NOIP2015普及组第三题
 * ```
 * 山洞里有 M 株不同的草药，采每一株都需要一些时间  ，每一株也有它自身的价值  。
 * 我会给你一段时间 T，在这段时间里，你可以采到一些草药。让采到的草药的总价值最大。
 * ```
 */

/**
 * 
 * @param {number} t 
 * @param {number} m 
 * @param {number[]} w 
 * @param {number[]} v 
 */
 var greedyMine = function(t,m,w,v){
    let result = new Array(m+1).fill(0)
    for(let i = 1; i <= m;i++){
        for(let j=t;j>=w[i];j--){
            if(t >= w[i]){
                result[j] = Math.max(result[j - w[i]]+v[i],result[j])
            }
        }
    }
 }

