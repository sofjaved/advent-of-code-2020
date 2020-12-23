// index 0 is the top of deck
let player1 = [4,14,5,49,3,48,41,39,18,15,46,23,32,16,19,27,47,17,29,26,33,6,10,38,45];
let player2 = [1,24,7,44,20,40,42,50,37,21,43,9,12,8,34,13,28,36,25,35,22,2,11,30,31];

let test1 = [9,2,6,3,1];
let test2 = [5,8,4,7,10];

function winningScore(array1, array2) {
  spaceCards(array1, array2);
  let score = 0;
  let multiplyer = 1;
  if(array1.length) {
    for(let i = array1.length-1; i >= 0; i--) {
      score += array1[i] * multiplyer;
      multiplyer++;
    }
  } else {
    for(let i = array2.length-1; i >= 0; i--) {
      score += array2[i] * multiplyer;
      multiplyer++;
    }
  }
return score;
}

console.log(winningScore(test1, test2)) // 306
console.log(winningScore(player1, player2)) // 34127

//helper function for game play:

function spaceCards(array1, array2) {
 while(array1.length && array2.length) {
    let p1 = array1.shift();
    let p2 = array2.shift();
    if(p1 > p2) {
      array1.push(p1, p2);
      spaceCards(array1, array2);
    }
    if(p2 > p1) {
      array2.push(p2, p1);
      spaceCards(array1, array2)
    }
  }
}





