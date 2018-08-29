import memory from './memory';

class Array {

    //the array starts as 0 because it is nothing and doesnt need 
    //any memory space, so the ptr is its length, 0

    //the capacity, allocates more space than needed for an array so,
    //you can add to it without having to move it
    constructor() {
        this.length = 0;
        this._capacity = 0;
        this.ptr = memory.allocate(this.length);
    }

    //you can change the size of the array by adding to it, but since, 
    //there are other things in your memory you cant just add to the end of
    //it, so when you resize it, you must move it to a new spot that has
    //enough room and then clear the old spot
    push(value) {
        this._resize(this.length + 1);
        memory.set(this.ptr + this.length, value);
        this.length++;
    }
    //changes the size of the array, copies the old array, adds the new stuff,
    //and deletes the old memory
    _resize(size) {
        const oldPtr = this.ptr;
        this.ptr = memory.allocate(size);
        if (this.ptr === null) {
            throw new Error('Out of memory');
        }
        memory.copy(this.ptr, oldPtr, this.length);
        memory.free(oldPtr);
    }
    //to get a certain value from the array, you just need to add the index to
    //start memory address to get the correct memory address
    get(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        return memory.get(this.ptr + index);
    }
    //when trying to remove the last value of an array, you can simple remove it from
    //the array and leave that memory space empty rather than resizing it
    pop() {
        if (this.length == 0) {
            throw new Error('Index error');
        }
        const value = memory.get(this.ptr + this.length - 1);
        this.length--;
        return value;
    }

    //in order to insert a new value into the array, you must shift all the values
    //after the new value over one spot to make room for the new value
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

    //removing is the same as inserting, except you are shifting the values after
    //the value that was removed in the opposite direction
    remove(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
        this.length--;
    }
}

//so when an array goes over capacity, you increase the memory space by
//whatever the size ratio is, this case multiply it by 3
Array.SIZE_RATIO = 3;
