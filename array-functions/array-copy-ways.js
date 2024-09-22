/**
 * Title: JavaScript Array Copy Ways
 * Description: Show multiple ways to copy an array in JavaScript.
 * Author: siomara.com
 * Date: September 2024
 */

// Original Array
const atmMachines = ["ATM100", "ATM200", "ATM300", "ATM400"];
console.log("original ATMs:\t", atmMachines);

// 1. Using Spread Operator (Shallow Copy)
const copySpread = [...atmMachines];
console.log("\ncopySpread:\t", copySpread);
copySpread[0] = "ATM111";
console.log("copySpread:\t", copySpread);
console.log("original ATMs:\t", atmMachines);

// 2. Using slice() Method (Shallow Copy)
const copySlice = atmMachines.slice();
console.log("\ncopySlice:\t", copySlice);
copySlice[0] = "ATM222";
console.log("copySlice:\t", copySlice);
console.log("original ATMs:\t", atmMachines);

// 3. Using concat() Method (Shallow Copy)
const copyConcat = [].concat(atmMachines);
console.log("\ncopyConcat:\t", copyConcat);
copyConcat[0] = "ATM333";
console.log("copyConcat:\t", copyConcat);
console.log("original ATMs:\t", atmMachines);

// 4. Using Array.from() Method (Shallow Copy)
const copyFrom = Array.from(atmMachines);
console.log("\ncopyFrom:\t", copyFrom);
copyFrom[0] = "ATM444";
console.log("copyFrom:\t", copyFrom);
console.log("original ATMs:\t", atmMachines);

// 5. Using map() Method (Shallow Copy)
const copyMap = atmMachines.map(atm => atm);
console.log("\ncopyMap:\t", copyMap);
copyMap[0] = "ATM555";
console.log("copyMap:\t", copyMap);
console.log("original ATMs:\t", atmMachines);

// 6. Using JSON.stringify() and JSON.parse() (Deep Copy)
const copyJSON = JSON.parse(JSON.stringify(atmMachines));
console.log("\ncopyJSON:\t", copyJSON);
copyJSON[0] = "ATM666";
console.log("copyJSON:\t", copyJSON);
console.log("original ATMs:\t", atmMachines);

// 7. Using reduce() Method (Shallow Copy)
const copyReduce = atmMachines.reduce((acc, atm) => {
    acc.push(atm);
    return acc;
  }, []);
console.log("\ncopyReduce:\t", copyReduce);
copyReduce[0] = "ATM777";
console.log("copyReduce:\t", copyReduce);
console.log("original ATMs:\t", atmMachines);

// 8. Using for loop (Traditional Way) (Shallow Copy)
const copyForLoop = [];
for (let i = 0; i < atmMachines.length; i++) {
  copyForLoop.push(atmMachines[i]);
}
console.log("\ncopyForLoop:\t", copyForLoop);
copyForLoop[0] = "ATM888";
console.log("copyForLoop:\t", copyForLoop);
console.log("original ATMs:\t", atmMachines);

// 9. Using while loop (Traditional Way) (Shallow Copy)
const copyWhileLoop = [];
let i = 0;
while (i < atmMachines.length) {
  copyWhileLoop.push(atmMachines[i]);
  i++;
}
console.log("\ncopyWhileLoop:\t", copyWhileLoop);
copyWhileLoop[0] = "ATM999";
console.log("copyWhileLoop:\t", copyWhileLoop);
console.log("original ATMs:\t", atmMachines);

// 10. Using forEach() Method (Shallow Copy)
const copyForEach = [];
atmMachines.forEach(atm => copyForEach.push(atm));
console.log("\ncopyForEach:\t", copyForEach);
copyForEach[0] = "ATM101";
console.log("copyForEach:\t", copyForEach);
console.log("original ATMs:\t", atmMachines);

// 11. Using Object.assign() Method (Shallow Copy)
const copyAssign = Object.assign([], atmMachines);
console.log("\ncopyAssign:\t", copyAssign);
copyAssign[0] = "ATM202";
console.log("copyAssign:\t", copyAssign);
console.log("original ATMs:\t", atmMachines);

// 12. Using Array() Constructor (Shallow Copy)
const copyArrConstru = Array.apply(null, atmMachines);
console.log("\ncopyArrConstru:\t", copyArrConstru);
copyArrConstru[0] = "ATM303";
console.log("copyArrConstru:\t", copyArrConstru);
console.log("original ATMs:\t", atmMachines);

// 13. Using Array() Constructor with map() Method (Shallow Copy)
const copyArrMap = Array.apply(null, atmMachines).map(atm => atm);
console.log("\ncopyArrMap:\t", copyArrMap);
copyArrMap[0] = "ATM404";
console.log("copyArrMap:\t", copyArrMap);
console.log("original ATMs:\t", atmMachines);

// 14. Using Array() Constructor with forEach() Method (Shallow Copy)
const copyArrForEach = [];
Array.apply(null, atmMachines).forEach(atm => copyArrForEach.push(atm));
console.log("\ncopyArrForEach:\t", copyArrForEach);
copyArrForEach[0] = "ATM505";
console.log("copyArrForEach:\t", copyArrForEach);
console.log("original ATMs:\t", atmMachines);

// 15. Using Array() Constructor with reduce() Method (Shallow Copy)
const copyArrReduce = Array.apply(null, atmMachines).reduce((acc, atm) => {
    acc.push(atm);
    return acc;
  }, []);
console.log("\ncopyArrReduce:\t", copyArrReduce);
copyArrReduce[0] = "ATM606";
console.log("copyArrReduce:\t", copyArrReduce);
console.log("original ATMs:\t", atmMachines);

// 16. Using Array() Constructor with for loop (Traditional Way) (Shallow Copy)
const copyArrForLoop = [];
for (let i = 0; i < atmMachines.length; i++) {
  copyArrForLoop.push(atmMachines[i]);
}
console.log("\ncopyArrForLoop:\t", copyArrForLoop);
copyArrForLoop[0] = "ATM707";
console.log("copyArrForLoop:\t", copyArrForLoop);
console.log("original ATMs:\t", atmMachines);

// 17. Using Array() Constructor with while loop (Traditional Way) (Shallow Copy)
const copyArrWhile = [];
let j = 0;
while (j < atmMachines.length) {
  copyArrWhile.push(atmMachines[j]);
  j++;
}
console.log("\ncopyArrWhile:\t", copyArrWhile);
copyArrWhile[0] = "ATM808";
console.log("copyArrWhile:\t", copyArrWhile);
console.log("original ATMs:\t", atmMachines);

/**
 * Notes:
 *  
 * 1) In this specific case, the array contains strings (primitives), so shallow copy 
 * vs deep copy doesn’t make much difference because primitives are copied by value. 
 * 
 * 2) The key difference between shallow and deep copies comes into play when the array 
 * contains complex objects or nested arrays.
 * 
 * 3) The modified copy arrays are shown to demonstrate that the original array remains
 * unchanged after modifying the copies.
 */