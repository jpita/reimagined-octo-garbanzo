/*
*Design an algorithm that accepts a stream of integers and retrieves the product of the last k integers of the stream.

Implement the ProductOfNumbers class:

ProductOfNumbers() Initializes the object with an empty stream.
void add(int num) Appends the integer num to the stream.
int getProduct(int k) Returns the product of the last k numbers in the current list. You can assume that always the current list has at least k numbers.

Example: 
.add(1)
.add(2)
.add(3)
.getProduct(2) === 6
.getProduct(1) === 3
/* 
* @param {number} num
* @return {void}
*/

var ProductOfNumbers = function () {
  this.stream = [];
};

ProductOfNumbers.prototype.add = function (num) {
  this.stream.push(num);
};

/**
 *
 * @param {number} k
 * @return {number}
 *
 *     1. create a variable to hold the product
 *    2. loop through the stream backwards
 *   3. multiply the product by the current number
 * 4. return the product
 *
 *
 *
 */

ProductOfNumbers.prototype.getProduct = function (k) {
  let product = 1;
  for (let i = this.stream.length - 1; i >= this.stream.length - k; i--) {
    product *= this.stream[i];
  }
  return product;
};

/**
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 *
 */
