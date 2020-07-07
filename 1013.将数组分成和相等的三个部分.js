/*
 * @lc app=leetcode.cn id=1013 lang=javascript
 *
 * [1013] 将数组分成和相等的三个部分
 *
 * https://leetcode-cn.com/problems/partition-array-into-three-parts-with-equal-sum/description/
 *
 * algorithms
 * Easy (53.96%)
 * Likes:    111
 * Dislikes: 0
 * Total Accepted:    35.6K
 * Total Submissions: 88K
 * Testcase Example:  '[0,2,1,-6,6,-7,9,1,2,0,1]'
 *
 * 给你一个整数数组 A，只有可以将其划分为三个和相等的非空部分时才返回 true，否则返回 false。
 * 
 * 形式上，如果可以找出索引 i+1 < j 且满足 A[0] + A[1] + ... + A[i] == A[i+1] + A[i+2] + ... +
 * A[j-1] == A[j] + A[j-1] + ... + A[A.length - 1] 就可以将数组三等分。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：[0,2,1,-6,6,-7,9,1,2,0,1]
 * 输出：true
 * 解释：0 + 2 + 1 = -6 + 6 - 7 + 9 + 1 = 2 + 0 + 1
 * 
 * 
 * 示例 2：
 * 
 * 输入：[0,2,1,-6,6,7,9,-1,2,0,1]
 * 输出：false
 * 
 * 
 * 示例 3：
 * 
 * 输入：[3,3,6,5,-2,2,5,1,-9,4]
 * 输出：true
 * 解释：3 + 3 = 6 = 5 - 2 + 2 + 5 + 1 - 9 + 4
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 3 <= A.length <= 50000
 * -10^4 <= A[i] <= 10^4
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function(A) {

    let sum = A.reduce((a, b) => {
        return a +b;
    })
    let sum1 = sum /3 ,sum2 = 0, count = 0;
    for(let i = 0; i <A.length;i++) {
        sum2+=A[i];
        if(sum2 == sum1) {
            sum2 = 0;
            count++;
        }
    }
     return (sum!=0 && count==3)||(sum==0 && count>2)

//   // 计算出数组A的和
//   const SumA = A.reduce((per, next) => per + next, 0);
    
//   if (SumA % 3 !== 0) {
//       // 如果余数不等于0，说明没法分成3等份
//       return false;
//   }

//   // 目标值，即每一等份需要凑成的值
//   const Target = SumA / 3;
//   // 当前累加的和
//   let currentSum = 0;
//   // 第一个和为Target的数组的索引终止位置
//   let i = 0;

//   // 递归查找最小的终止索引i
//   while(i < A.length) {
//       // 累计计算截至到当前索引i的数组和
//       currentSum += A[i];

//       // 当当前数组和等于目标值时
//       if(currentSum === Target) {
//           // 退出循环
//           break;
//       }
//       // 否则则继续进行累加
//       i++;
//   }

//   /*
//   关键点1
//   这一步的判断，其实本质上是比较 数组A的和 与 其值的三分之一
//   因为在关键点1中，
//   如果是通过break语句退出循环的，则二者必然相等，不可能执行本处if代码块里的内容。
//   反之，如果不是通过break语句退出的，
//   则意味着整个数组A的项值都被累加进入变量currentSum中
//   */
//   if (currentSum !== Target)  {
//       /*
//       返回false的涵义：
//       请牢记，currentSum是数组A的总和（在if代码块内时），
//       Target是数组A总和的三分之一
//       举例：
//       数组A的和为9，9可以被分成三等份，但是不意味着，数组A就可以被等分成3个值为3的子数组，
//       例如： 当数组A为[1,4,4]时，总和为9，能被3整除，可分成3份后每份值都不等（[1], [4], [4]）
//       */
//       return false;
//   }
//   /*
//   第二个数值的终止索引，
//   由于从索引0到索引i的值以满足Target，
//   则第二个数组的起始值该为i+1
//   */
//   let j = i + 1;

//   /*
//   关键点2
//   while循环最多只到j + 1 < A.length为止
//   因为至少需要留一个项数为1的数组来满足等份三份的需求
//   */
//   while(j + 1 < A.length) {
//       currentSum += A[j];
//       if (currentSum === Target * 2) {
//           /*
//           关键点3
//           如果进入了这个if代码块内，
//           则证明已经有2个数组的和等同于Target了
//           又因为预先保证了至少预留一位的数组（while( j + 1 < A.length)）
//           所以一共有3个数组的满足了Target了，
//           所以可以直接返回true
//           */
//           return true;
//       }
//       j++;
//   }

//   /*
//   这里的返回false是因为满足了第一个while循环，没有满足第二个while循环
//   即只有一个数组的和等于Target
//   */
//   return false;
};
// @lc code=end
console.log(canThreePartsEqualSum(canThreePartsEqualSum([0,2,1,-6,6,-7,9,1,2,0,1])))
