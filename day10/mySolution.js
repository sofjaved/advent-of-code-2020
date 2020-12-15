let inputArray = [111,56,160,128,25,182,131,174,87,52,23,30,93,157,36,155,183,167,130,50,71,98,42,129,18,13,99,146,81,184,1,51,137,8,9,43,115,121,171,77,97,149,83,89,2,38,139,152,29,180,10,165,114,75,82,104,108,156,96,150,105,44,100,69,72,143,32,172,84,161,118,47,17,177,7,61,4,103,66,76,138,53,88,122,22,123,37,90,134,41,64,127,166,173,168,58,26,24,33,151,57,181,31,124,140,3,19,16,80,164,70,65]

//part 1

function testAdapters(array) {
  array.sort((a,b) => a-b)
  let diff1 = 1;
  let diff3 = 1;
  for(let i = 0; i < array.length - 1; i++) {
    if(array[i + 1] - array[i] === 1) {
      diff1++
    }
    if(array[i + 1] - array[i] === 3) {
      diff3++
    }
  }
  return diff1 * diff3;
}

console.log(testAdapters(inputArray)) // 2812

let testArray1 = [16,10,15,5,1,11,7,19,6,12,4]
let testArray2 = [28,33,18,42,31,14,46,20,48,47,24,23,49,45,19,38,39,11,1,32,25,35,8,17,7,9,4,2,34,10,3]

console.log(testAdapters(testArray1)) // 35
console.log(testAdapters(testArray2)) // 220

//part 2 is as yet unsolved

console.log(testArray1.sort((a,b)=>a-b))

function arrangements(array) {
  array.sort((a,b) => a-b);
  let count = 1;
  for(let i = 0; i < array.length; i++) {
    if(array[i+2] && array[i + 2] - array[i] === 2) {
      count+= ;
    }
    if(array[i+3] && array[i + 3] - array[i] === 3) {
      count++;
    }
  }
  return count;
}

console.log(arrangements(testArray1));
console.log(arrangements(testArray2));
