/*
 * @lc app=leetcode.cn id=914 lang=javascript
 *
 * [914] 卡牌分组
 *
 * https://leetcode-cn.com/problems/x-of-a-kind-in-a-deck-of-cards/description/
 *
 * algorithms
 * Easy (32.74%)
 * Likes:    161
 * Dislikes: 0
 * Total Accepted:    38.9K
 * Total Submissions: 99.3K
 * Testcase Example:  '[1,2,3,4,4,3,2,1]'
 *
 * 给定一副牌，每张牌上都写着一个整数。
 * 
 * 此时，你需要选定一个数字 X，使我们可以将整副牌按下述规则分成 1 组或更多组：
 * 
 * 
 * 每组都有 X 张牌。
 * 组内所有的牌上都写着相同的整数。
 * 
 * 
 * 仅当你可选的 X >= 2 时返回 true。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：[1,2,3,4,4,3,2,1]
 * 输出：true
 * 解释：可行的分组是 [1,1]，[2,2]，[3,3]，[4,4]
 * 
 * 
 * 示例 2：
 * 
 * 输入：[1,1,1,2,2,2,3,3]
 * 输出：false
 * 解释：没有满足要求的分组。
 * 
 * 
 * 示例 3：
 * 
 * 输入：[1]
 * 输出：false
 * 解释：没有满足要求的分组。
 * 
 * 
 * 示例 4：
 * 
 * 输入：[1,1]
 * 输出：true
 * 解释：可行的分组是 [1,1]
 * 
 * 
 * 示例 5：
 * 
 * 输入：[1,1,2,2,2,2]
 * 输出：true
 * 解释：可行的分组是 [1,1]，[2,2]，[2,2]
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= deck.length <= 10000
 * 0 <= deck[i] < 10000
 * 
 * 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
    const count = new Map()
    for(const v of deck){
        if(count.has(v)){
            count.set(v,count.get(v) + 1)
        } else {
            count.set(v,1)
        }
    }

    const gcd = (nums) => {
		let len = nums.length;
		//int t = 0;
		 let i = 0,a = 0,t= 0;  
		 a=nums[0];
		 for(i=0;i<(len-1);i++)
		 {
		  t=0;
		  while(nums[i+1] !=0) 
		  { 
            t=nums[i+1];
            nums[i+1]=a%nums[i+1];
		    a=t;
		  }
		 }
        return a
    }
    let lst = []
    count.forEach((val)=>lst.push(val))
    const times = gcd(lst)
    return times > 1
};
// @lc code=end

console.log(hasGroupsSizeX([1,1,1,2,2,2,3,3]))