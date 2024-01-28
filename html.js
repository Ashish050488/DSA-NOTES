// LEETT CODE QUESTIONS
// QUESTION 1

// Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

// Specifically, ans is the concatenation of two nums arrays.

// Return the array ans.
// Example 1:

// Input: nums = [1,2,1]
// Output: [1,2,1,1,2,1]
// Explanation: The array ans is formed as follows:
// - ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
// - ans = [1,2,1,1,2,1]
// Example 2:

// Input: nums = [1,3,2,1]
// Output: [1,3,2,1,1,3,2,1]
// Explanation: The array ans is formed as follows:
// - ans = [nums[0],nums[1],nums[2],nums[3],nums[0],nums[1],nums[2],nums[3]]
// - ans = [1,3,2,1,1,3,2,1]


// Constraints:

// n == nums.length
// 1 <= n <= 1000
// 1 <= nums[i] <= 1000


/* / ANSWER / */
    //  var nums=[1,2,2];    // IF WE PROVIDE A SPECIFIC ARRAY IT WILL NOT SUITABLE FOR ALL ARRAY AS IT HAS FIXED LENGTH JUST REMOVE THE VARIABLE AND IT WILL BECOME ACCEPTABLE FOR ALL
    //  function concatenateArrays(){
    //      var n = num.length
    //     var ans = new Array(2*n)
    //     for (let i=0;i<n;i++){   //here time and space complexity and be reduced by avoiding the below for loop.It can be done by putting below values in same loop it can be done by [ans[i] = ans[i+n]= num[i]]      // since you will get confused in future i'll let you know that i<n is used because n stores n.length and iteration starts from 0 so it will go upto 2 index if i<=n is used then it will iterate to 0,1,2,3 as n store length of num not index of num
    //         ans[i] = num[i]
    //  }
    //  for (let i=0;i<n;i++){
    //      ans[i+n] = num[i]  }
    // return console.log(ans);
    //     // return ans
    //  }

//  EASY WAY WITH INBUILT METHOD

// function concatenateArrays(nums){
//      const ans = nums.concat(nums)
//     return console.log(ans);
//  }






// function buildArray (nums) {
//      const n = nums.length;
//      const ans = new Array(n);
//      for(let i=0;i<n;i++){
//           ans[i]=nums[nums[i]]

//      }
//      return ans;
//      // console.log(ans);
// };

// const nums1 =[0,3,4,2,1]
// const result = buildArray(nums1)

// console.log(result);

// nums = [1,2,3,4,5,6,7,8,1,2,1,3,1,4,5,6,2]
// var numIdenticalPairs = function() {
//      goodnumber = 0
//      for(let i=0;i<=nums.length-1;i++){
//          for(let j=nums.length-1;j<=nums.length-1;j--){
//              if(nums[i]==nums[j]&& i<j){
//                  goodnumber +=1
//                  console.log(goodnumber)
//              }
             
//          }
//      }
//     };
// numIdenticalPairs()

// var ans = []

// shuffle the array 

// for (var i = array.length - 1; i > 0; i--) {
 
    //     // Generate random number 
    //     var j = Math.floor(Math.random() * (i + 1));
    
    //     var temp = array[i];
    //     array[i] = array[j];
    //     array[j] = temp;
    // }


// nums =[1,2,3,4,5,6]
// ans = []
// for (let i  = 0; i <nums.length/2; i++) {
//     ans.push(nums[i])
//     ans.push(nums[i+nums.length/2])        
//     }
// console.log(ans)

// var findErrorNums = function() {
//     var nums= [1,2,4,6,2]
//     var output = []
//     for (let i = 0; i <=nums.length-1; i++) {
//         for (let j = i+1; j < nums.length; j++) {
//             if (nums[i]===nums[j]) {
//                 output.push(nums[j],j+1)

//             }
            
//         }
//     }
//     return (output)
// };
// findErrorNums()


// var nums =[-1,1,2,3,1];
// var  target = 2;
// var countPairs = function() {
//     let output = 0;
    
//     for(let i=0;i<nums.length-1;i++){
//         for(let j=i+1;j<nums.length; j++){
//             if(nums[i]+nums[j]<target){
//                 output = output+1;
//             }
//         }
//     }
//     // return output
//     // console.log(output)
// };
// countPairs()
    
// var countPairs = function(nums, target) {
//     let output = 0;
//     for (let i = 0; i < nums.length - 1; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] < target) {
//                 output++;
//             }
//         }
//     }
//     return output;
// };

// var nums =[0,1,4,6,7,10]
// var diff = 3
// var arithmeticTriplets = function() {
//     var output = 0;
//     for(var i=0; i<nums.length; i++){
//         for(var j= i+1; j<nums.length; j++){
//         if(nums[j]=nums[i]==diff && nums[j+1]-nums[j+2]==diff){
//             output++
//         }
//         }
//     }
//     console.log(output);
// };
// arithmeticTriplets()



//  REMOVE ELEMENT FOR SORTED ARRAY
// var arr  = [1, 2, 2, 2, 3];
// for (let i = 0; i < arr.length; i++) {
//     for (let j = i+1; j < arr.length; j++) {
//         if(arr[i]===arr[j]){
//             arr.splice(j,1)
//             j--
//         }
//     };
    
// }

// console.log(arr);


// MOVE ZEROS TO LAST;
    // var arr = [1 ,0 ,2 ,3 ,0 ,4 ,0 ,1];
    // var zeros = []
    // var newarr = []
    // for (let i = 0; i < arr.length; i++) {
    //         if(arr[i]===0){
    //             zeros.push(arr[i])
    //             arr.splice(i,1)
    //             i--
    //         }
    // }
    // newarr = arr.concat(zeros)
    // console.log(newarr);

// FIND WEATHER THE GIVEN NUMBER IS PRESENT IN AN  ARRAY OR NOT
// var arr =  [6,7,8,4,1]; 
// var num = 1;
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i]===num){
//         console.log(i);
//     }   
// }

// MERGE TWO SORTED ARRAY WITHOUT DUPLICAY
// var a = [1, 2, 3, 4, 6,7];
// var b = [2, 3, 5,8,10,11,12];

// var mergedarr = a.concat(b)
// mergedarr.sort((a,b)=>a-b)

// for (let i = 0; i < mergedarr.length-1; i++) {
//     for (let j = i+1; j < mergedarr.length; j++) {
//         if (mergedarr[i]===mergedarr[j]) {
//             mergedarr.splice(j,1)
//             j--;
//         }
//     }
    
// }
// console.log(mergedarr);

// JUST ANOTHER WAY OF HANDLING INDICES FOR REMOVING ELEMENT 

// for (let i = 0; i < mergedarr.length - 1; i++) {
//     for (let j = i + 1; j < mergedarr.length;) {
//         if (mergedarr[i] === mergedarr[j]) {
//             mergedarr.splice(j, 1);
//         } else {
//             j++; // Increment j only if no element is removed
//         }
//     }
// }

// console.log(mergedarr);



// LEET 268
// var nums =[0]
// function missingNumber() {
//     const n = nums.length;
//     const expectedSum = (n * (n + 1)) / 2;
//     let actualSum = 0;
//     for (let i = 0; i < n; i++) {
//         actualSum += nums[i];
//     }
//     console.log( expectedSum - actualSum)
// }
// missingNumber()

// LEET 283

var arr =[0,1,0,3,12];



for (let i = 0; i < arr.length-1; i++) {
    for (let j = i+1; j < arr.length; j++) {
        if (arr[i]==0) {
            [arr[i],arr[j]]=[arr[j],arr[i]]
        }
        
    }
}
console.log(arr);
