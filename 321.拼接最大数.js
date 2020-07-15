/*
 * @lc app=leetcode.cn id=321 lang=javascript
 *
 * [321] 拼接最大数
 *
 * https://leetcode-cn.com/problems/create-maximum-number/description/
 *
 * algorithms
 * Hard (26.84%)
 * Likes:    112
 * Dislikes: 0
 * Total Accepted:    3.7K
 * Total Submissions: 12.2K
 * Testcase Example:  '[3,4,6,5]\n[9,1,2,5,8,3]\n5'
 *
 * 给定长度分别为 m 和 n 的两个数组，其元素由 0-9 构成，表示两个自然数各位上的数字。现在从这两个数组中选出 k (k <= m + n)
 * 个数字拼接成一个新的数，要求从同一个数组中取出的数字保持其在原数组中的相对顺序。
 * 
 * 求满足该条件的最大数。结果返回一个表示该最大数的长度为 k 的数组。
 * 
 * 说明: 请尽可能地优化你算法的时间和空间复杂度。
 * 
 * 示例 1:
 * 
 * 输入:
 * nums1 = [3, 4, 6, 5]
 * nums2 = [9, 1, 2, 5, 8, 3]
 * k = 5
 * 输出:
 * [9, 8, 6, 5, 3]
 * 
 * 示例 2:
 * 
 * 输入:
 * nums1 = [6, 7]
 * nums2 = [6, 0, 4]
 * k = 5
 * 输出:
 * [6, 7, 6, 0, 4]
 * 
 * 示例 3:
 * 
 * 输入:
 * nums1 = [3, 9]
 * nums2 = [8, 9]
 * k = 3
 * 输出:
 * [9, 8, 9]
 * 
 */

// @lc code=start
var maxNumber = function (nums1, nums2, k) {
    if (nums1.length > nums2.length) {
        return maxNumber(nums2, nums1, k);
    }

    var array = new Array(k);

    for (var i = 0; i < array.length; i++) {
        array[i] = -1;
    }

    if (nums1.length + nums2.length == k) {
        return mergeCompare(nums1, nums2, array);
    }

    var k1 = getMaxMToK(nums1, k, k > nums2.length ? k - nums2.length : 0);
    var k2 = getMaxMToK(nums2, k, k > nums1.length ? k - nums1.length : 0);

    for (var i = 0; i < k2.length; i++) {
        if (k - i >= k1.length) {
            //k2更长,可能k1取0个,k2取k个
            if (i == k) {
                array = mergeCompare(k1[0], k2[i], array);
            }
        }
        else {
            array = mergeCompare(k1[k - i], k2[i], array);
        }
    }

    return array;
};

//m,m+1,m+2...k个最大的数字,实际返回k个数组,MaxNumber方法中好处理一点
//
//0 :null
//1 :null
//...
//m :[num_1,num_2,....num_m]
//...
//k :[num_1,num_2,....num_k]
var getMaxMToK = function (nums, k, m) {
    if (k == 0) {
        return [];
    }

    if (k > nums.length) {
        k = nums.length;
    }

    //dp[i]=dp[i+1].removeFirstLeftMinRight();
    var dp = new Array(k + 1);

    for (var i = k; i >= m; i--) {
        if (i == k) {
            dp[i] = getMaxK(nums, i);
        }
        else {
            dp[i] = getMaxK(dp[i + 1], i);
        }
    }

    return dp;
}

var getMaxK = function (nums, k) {
    if (k == 0) {
        return [];
    }

    let size = Math.min(nums.length, k) + 1;
    let dp = new Array(k);

    //先填满
    for (let i = nums.length - 1, m = size - 1; i >= 0 && m >= 1; i-- , m--) {
        dp[m - 1] = nums[i];
    }

    for (let j = nums.length - dp.length - 1; j >= 0; j--) {
        if (nums[j] < dp[0]) {
            continue;
        }

        let start = 0;
        let min = dp[0];

        //干掉第一个比右边小的值
        //如 nums[j]=8  dp={7,5,6,3},移除5得到 dp={8,7,6,3}
        for (let i = 1; i < dp.length; i++) {
            if (min < dp[i]) {
                break;
            }

            start = i;
            min = dp[i];
        }

        for (let i = start; i >= 1; i--) {
            dp[i] = dp[i - 1];
        }

        dp[0] = nums[j];
    }

    return dp;
}

//拼接并比较 reutrn new>old?new:old;
var mergeCompare = function (nums1, nums2, array) {
    var i = 0;
    var j = 0;
    var isBigger = false;
    var newArray = new Array();
    var k = nums1.length + nums2.length;

    while (i + j < k) {
        var index = i + j;

        if (i >= nums1.length) {
            newArray.push(nums2[j++]);
        }
        else if (j >= nums2.length) {
            newArray.push(nums1[i++]);
        }
        else if (nums1[i] > nums2[j]) {
            newArray.push(nums1[i++]);
        }
        else if (nums1[i] == nums2[j]) {
            if (isNums1Bigger(nums1, nums2, i + 1, j + 1)) {
                newArray.push(nums1[i++]);
            }
            else {
                newArray.push(nums2[j++]);
            }
        }
        else {
            newArray.push(nums2[j++]);
        }

        if (!isBigger) {
            if (newArray[index] < array[index]) {
                return array;
            }
            else if (newArray[index] > array[index]) {
                isBigger = true;
            }
        }
    }

    return newArray;
}

//return nums1>nums2
var isNums1Bigger = function (nums1, nums2, i, j) {
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] > nums2[j]) {
            return true;
        }

        if (nums1[i] < nums2[j]) {
            return false;
        }

        i++;
        j++;
    }

    return nums1.length - i - (nums2.length - j) > 0;
}

// @lc code=end

console.log(maxNumber([3,4,6,5],
    [9,1,2,5,8,3],
    5))