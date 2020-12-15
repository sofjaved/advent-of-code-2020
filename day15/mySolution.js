let startingNumbers = [1,0,16,5,17,4];

let testNumbers = [0,3,6]


//part 1

function targetTurn(array, target) {
  let turns = array;
  let repeats = objectify(array.slice(0, array.length-1)); //an object with all but the final starting number
  for(let i = array.length; i < target; i++) { //i starts at 6, but it will be the 7th turn
    if(turns[i-1] in repeats) {
      turns.push(i - repeats[turns[i-1]]);
      repeats[turns[i-1]] = i; //4: turn 6
    } else {
      repeats[turns[i-1]] = i;
      turns.push(0); // becomes the i+1 turn, but i index;

    }
  }
return turns[turns.length-1];
}

console.log(targetTurn(testNumbers, 2020)) // 436
console.log(targetTurn(startingNumbers, 2020)) // 1294

//part 1 helper function
//creates an object of mentioned numbers:

function objectify(array) {
  let obj = {};
  for(let i = 0; i < array.length; i++) {
    let current = array[i];
    obj[current] = i +1; // key = num, value = turn number
  }
  return obj;
}

//part 2

console.log(targetTurn(startingNumbers, 30000000)); // 573522



