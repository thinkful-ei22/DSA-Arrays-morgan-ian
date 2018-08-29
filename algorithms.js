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
function urlify(string){
  const stringArray = [];
  for(let i = 0; i < string.length; i++){
    stringArray.push(string[i]);
  }
  for(let i = 0; i < stringArray.length; i++){
    if(stringArray[i] === ' '){
      stringArray[i] = '%20';
    }
  }
  let word = '';
  for(let i = 0; i < stringArray.length; i++){
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
  for(let i = 0; i < arr.length; i++){
    if(arr[i] >= 5){
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