//
// function sum(n) {
//     let total = 0;
//     for (let i = 1 ; i <= n ; i++) {
//         total += i;
//     }
//     return total;
// }
// const addUpTo = n => {
//     return n * ( n + 1 ) / 2
// };
//
// // let t1 = performance.now();
// // sum(10000);
// // let t2 = performance.now();
// // console.log( `Time Performance: ${(t2 - t1) / 1000}  seconds.`);
//
// function double(arr) {
//     let newArr = []; // o(n)
//     for (let i = 0 ; i < arr.length ; i++) {
//         newArr.push( 2 * arr[i] );
//     }
//     return newArr;
// }
// //double([1,3,4,4,6,7,7,0]);
//
// const charCount = str => {
//     let result = {}; // o(n) Space Complexity
//     let splitChar = str.split(''); // 0(n) Space Complexity
//     splitChar.map( item => { // o(n) Time Complexity
//         if (isAlphaNumeric( item )) {
//             let char = item.toLowerCase();
//             result[char] = result[char]++ || 1;
//         }
//     });
//     return result;
// };
//
// const isAlphaNumeric = (char) => {
//   let code = char.charCodeAt(0);
//   return !(!(code > 47 && code < 58) &&
//       !(code > 64 && code < 91) &&
//       !(code > 96 && code < 123));
// };
//
// let t1 = performance.now();
// charCount('this is a simple paragraph');
// let t2 = performance.now();
// console.log( `Time Performance: ${(t2 - t1) / 1000}  seconds.`);
//
// // console.log('sum ' + sum( 100));
//
// // Code Challenge 1
// const same = (arr1, arr2) => {
//     if (arr1.length !== arr2.length) throw new Error('Items are not equal');
//
//     let freqCounter1 = {};
//     let freqCounter2 = {};
//     for (let val of arr1 ) {
//         freqCounter1[val] = ++freqCounter1[val] || 1 ;
//     }
//     for (let key of arr2 ) {
//         freqCounter2[key] = ++freqCounter2[key] || 1 ;
//         console.log('key', key, 'value', freqCounter2[key]);
//     }
//     for ( let val in freqCounter1) {
//         if ( !( val ** 2 in freqCounter2 ) ) {
//             return false;
//         }
//         if (freqCounter2[ val ** 2 ] !== freqCounter1[val]) {
//             return false;
//         }
//     }
//     return true;
// };
//
// same([1,2,3,3,3,4,4], [1,4,9,9,9,16,16]);
//
// // Code Challenge 2
// const validAnagram = ( first , second ) => {
//     if ( first.length !== second.length) throw new Error('Invalid Entry');
//
//     let comparision = {};
//
//     for ( let key of first) {
//         let letter = key.toLowerCase();
//         comparision[letter] = ++comparision[letter] || 1 ;
//     }
//     for ( let i = 0 ; i < second.length ; i++) {
//
//         if ( !comparision[second[i]] ) {
//             return false
//         } else {
//             comparision[second[i]] -= 1 ;
//         }
//     }
//     return true;
//
// };
//
// validAnagram('Osama', 'Masao');
//
// // Code Challenge 3
//
// const sumOfZero = arr => {
//     let leftIndex = 0;
//     let rightIndex = arr.length -1 ;
//     while (leftIndex < rightIndex) {
//         let sum = arr[leftIndex] + arr[rightIndex];
//         if ( sum === 0 ) {
//             return arr[leftIndex], arr[rightIndex];
//         } else if ( sum > 0 ) {
//             leftIndex--;
//         } else {
//             rightIndex++;
//         }
//     }
// };
//
// sumOfZero([-10, -2, 0, 2, 4, 9, 10, 12]);
//
//
// // Challenge 4
//
// const countUniqueValue = arr => {
//     if ( arr.length === 0 ) return 0;
//     let i = 0;
//     for ( let j = 0 ; j < arr.length ; j++ ) {
//         if ( arr[i] !== arr[j] ) {
//             i++;
//             arr[i] = arr[j];
//         }
//     }
//     return i + 1 ;
// };
//
// countUniqueValue([1,2,2,3,4,5,6]);


