'use strict';

const Memory = require('./memory');
const memory = new Memory;

class Array {
  constructor() {
    this.length = 0;
    this._capacity = 0;
    this.ptr = memory.allocate(this.length);
  }

  // push(value) {
  //     this._resize(this.length + 1);
  //     memory.set(this.ptr + this.length, value);
  //     this.length++;
  // }
  //this one theres no extra memory, so it immediately resizes
  //and copies the array to a new memory spot

  push(value) {
    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }

    memory.set(this.ptr + this.length, value);
    this.length++;
  }
  //checks to see if theres enough room to store the extra value,
  //if theres not enough, it resizes and allocates extra space

  _resize(size) {
    const oldPtr = this.ptr;
    this.ptr = memory.allocate(size);
    if (this.ptr === null) {
      throw new Error('Out of memory');
    }
    memory.copy(this.ptr, oldPtr, this.length);
    memory.free(oldPtr);
    this._capacity = size;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    return memory.get(this.ptr + index);
  }

  pop() {
    if (this.length == 0) {
      throw new Error('Index error');
    }
    const value = memory.get(this.ptr + this.length - 1);
    this.length--;
    return value;
  }

  insert(index, value) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }

    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }

    memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
    memory.set(this.ptr + index, value);
    this.length++;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
    this.length--;
  }


}
Array.SIZE_RATIO = 3;

let testArray = new Array();
// testArray.push(3);
// testArray.push(5);
// testArray.push(15);
// testArray.push(19);
// testArray.push(45);
// testArray.push(10);
// testArray.pop();
// testArray.pop();
// testArray.pop();
// console.log(testArray.get(0));
//testArray.push("tauhida");
//console.log(testArray.get(0));

// testArray.insert(2, 15);
// testArray.remove(2);
// console.log(testArray.get(2));
// testArray.pop();
//console.log(testArray);

//length is 1 capacity is 3 and address is 0

//length is 6, capacity is 12 and address is 3, length is 6 because we added
//6 values to the array, after the 3rd push, there wasnt enough space for the 4th
//value, so it resized by 3x with was enough capacity to hold all 6 values we
//pushed into it.  the memory address, shifted 3 because it had to resize after the
//3rd push and copy the first 3 values

//length is 3, capacity 12, address is 3
//so length is 3 because we removed 3 values from the end of the array
//the capacity didnt change because theres still enough space for the array,
//address is the same, because there wasnt any resizing or copying

//when adding "tauhida" and printing its value we got NaN
//
//we cannot view the string, because the float64array class that represents
//a memory block is only set up to store C "double" data types, which are numbers
//not strings

//the resize function allocates a new block of memory that is large enough to 
//store the new array, factors in the size ratio as well. it frees up the old
//memory as well 




// let arr = new Array();
// let arr2 = new Array();

// arr.push(1);
// arr.push(1);
// arr.push(1);
// arr.push(1);
// console.log(arr);
// arr2.push(2);
// arr2.push(2);
// arr2.push(2);
// console.log(arr2);


