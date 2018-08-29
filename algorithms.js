'use strict';

//URLify a string

//input string (may or may not have spaces)
//output string (spaces replaced by %20)

//recursively or loop?

//look at 1 letter at a time
//find string
//grab index of space
//concatenate 'first half' + '%20' + 'second half'

//loop through array
function urlify(string) {
  const stringArray = [];
  for (let i = 0; i < string.length; i++) {
    stringArray.push(string[i]);
  }
  for (let i = 0; i < stringArray.length; i++) {
    if (stringArray[i] === ' ') {
      stringArray[i] = '%20';
    }
  }
  let word = '';
  for (let i = 0; i < stringArray.length; i++) {
    word += stringArray[i];
  }
  return word;
}


//const word = 'www.thinkful.com /tauh ida parv een';
//console.log(urlify(word));




//FILTERINT AN ARRAY

//input array of numbers [1, 2, 3, 4, 5, 6, 7, 8]
//output array of numbers with numbers less than 5  [5, 6, 7, 8]

//iterative solution
//set temp array
//loop through input; if 5 or higher push into temp
//return temp

//recursive solution
//base case array.length = 0;

function filterLessThanFive(arr) {
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 5) {
      temp.push(arr[i]);
    }
  }
  return temp;
}

//Recursive
// function filterLessThanFive(arr){
//   if(arr.length === 0){
//     return [];
//   }
//   if(arr[0] >= 5){
//     return [arr[0], ...filterLessThanFive(arr.slice(1, arr.length))];
//   } else {
//     return [...filterLessThanFive(arr.slice(1, arr.length))];
//   }
// }

// const testArray = ['Z', 1, 6, 7, 8, 100, -5, 0.5, 8];
// console.log(filterLessThanFive(testArray));

//mas sum in the array------------------------
//input: an array of positive + negative intgers [4, 6, -3, 5, -2, 1]
//output: is largest sum of consecutive values: 12

//create maxSum variable to compare other sums to
//loop through all possible arrays starting with array[0] set highest sum to maxSum
//then loop again starting with array[1] compare in same way

const maxSum = arr => {
  let curMax = arr[0] + arr[1];
  for (let i = 0; i < arr.length; i++) {
    let sum = 0
    for (let j = i; j < arr.length; j++) {
      sum += arr[j] + arr[j + 1]
      if (sum > curMax) {
        curMax = sum
      }
    }
  }
  return curMax;
}

// console.log(maxSum([4, 6, -50, 5, -2, 1]));

//merge arrays -----------------------------------
//input: 2 seperate, sorted arrays of integers
//output: 1 sorted array contained all values from 2 input arrays

//nested for loops and compare each value to each other value in the other
//array, then if its the smallest push it into a new array
//return new array

const mergeArray = (arr1, arr2) => {
  let answer = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length || j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      answer.push(arr1[i]);
      i++;
    } else if (arr1[i] >= arr2[j]) {
      answer.push(arr2[j]);
      j++;
    }
    else if (j < arr2.length && i === arr1.length) {
      answer.push(arr2[j])
      j++;
    }
    else if (i < arr1.length && j === arr2.length) {
      answer.push(arr1[i]);
      i++;
    }
  }
  console.log(i, j)
  return answer;
}

let arr1 = [1, 3, 6, 8, 11];
let arr2 = [2, 3, 5, 8, 9, 10];
// console.log(mergeArray(arr1, arr2));

//remove characters --------------------------------
//input is a string and a string of characters that should be removed
//output is a string without the characters that were to be removed

//create an answer array
//loop through the string to create an array
//loop through the array and if value is not one specified to be removed, 
//we push it into the answer array
//return answer
const removeCharacters = (string, filter) => {
  let answer = '';
  let stringArr = [];
  for (let i = 0; i < string.length; i++) {
    stringArr.push(string[i]);
  }
  for (let j = 0; j < stringArr.length; j++) {
    let flag = true;
    for (let k = 0; k < filter.length; k++) {
      if (stringArr[j] === filter[k]) {
        flag = false;
      }
    }
    if (flag === true) {
      answer += stringArr[j]
    }
  }
  return answer;
}

let string = 'Battle of the Vowels: Hawaii vs. Grozny';
let filter = 'aeiou';

// console.log(removeCharacters(string, filter));

//Products---------------------------
//input: an array of integers 
//output: an array of integers that are the products of the other values in the array

//create and answer array
//create a product variable for each index
//loop through the array and get the product for that index and then push it into answer array

const products = arr => {
  let answer = [];
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
  }
  for (let j = 0; j < arr.length; j++) {
    answer.push(product / arr[j]);
  }
  return answer;
}
let input = [1, 3, 9, 4];
//  console.log(products(input));


//2d array----------------------------
//input: a 2d array, an array of arrays where the length of the outer array equals the number 
//and length of the inner arrays, only with values of 1 or 0
//output: same 2d array, but any where there was a 0, that column and row is all 0s......

//create tempArray then loop through the out array, 
//then loop through the sub array, if the value is 0, set that temp subarray to 0

const twoDArray = (bigArray) => {
  let tempArray = [];
  let zeroColumns = [];
  for (let h = 0; h < bigArray.length; h++) {
    tempArray.push([]);
  }
  for (let i = 0; i < bigArray.length; i++) {
    let foundZero = false;
    for (let j = 0; j < bigArray.length; j++) {
      if (bigArray[i][j] === 0) {
        foundZero = true;
        zeroColumns.push(j);
      }
    }
    if (foundZero === true){
      for (let k = 0; k < bigArray.length; k++) {
        tempArray[i].push(0);
      }
    } else {
      for (let k = 0; k < bigArray.length; k++) {
        tempArray[i].push(1);
      }
    }

  }
  console.log(zeroColumns);
  for (let l = 0; l < tempArray.length; l++){
    for (let m = 0; m < zeroColumns.length; m++){
    tempArray[l][zeroColumns[m]] = 0;
  }
}
  return tempArray;
}

let darr = [
  [1, 0, 1, 1, 0],
  [0, 1, 1, 1, 0],
  [1, 1, 1, 1, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 1, 1]];

console.log(twoDArray(darr));