let inputArray = ['....#...............##...#...#.','#...#..#.....##.##.#.##....#...','...#.....#...#.................','#..#..#.......#...#.#..........','...##..#.#..........##...#.....','........###.#.##..#............','...###......##.#..#.#...#.#....','......##..#.#....#...#.........','.................#......#......','..............##....#..........','#.....................#...#.#.#','.##..#............##...##.##..#','.....#.####...#..##......#.#..#','#.......#.#..#......##.#.#....#','.....##...###.#..........##....','#...........#.##....##.....#..#','..###..##.##.....#....#........','...#.#.#............#.#..#....#','#......#....#...##.#.#.#.#..#..','.......#.#...#..#..#..##......#','.....#..#.............#..#...#.','##..#.##.....#........#........','....##....#..#...........#...#.','.......#........##.......##....','..##...#.......#........##.#...','..........#..#.....##........#.','..#..##..#............#........','.#.#...#...#.......#......#....','....#....#.....#.#.........###.','.............#...#....#..#.#...','##.#...#..#......#.#.##.....#..','#...##.#..........#..#.#...#...','#####.......#.#.....#..#.......','#...#...#........#....#...#....','......##.#..#..#............#..','....#....#.......#...###.......','.#......##...#.##....#...#.....','..#....#...##.....#.#...##.#...','#.......#........#.####........','#.##..#..#.........#.#........#','.#...#.#.#.#......#....#.#..#..','#...####...##.##.#....#......##','..#...#......##........#.....#.','...#.#....##...................','...##................#.........','...##.....##........#....#..#..','.........#..#.....#............','.#..#.......................#..','.#.........#..##........#.#.#.#','......#.....##..#.##...#..#.##.','..#..............##.......#....','...............##....#...##..#.','###...#..###.........#...#.....','...#..#...#....#.....##........','....#..##...#........#.........','..#......#.......#.....#..#....','.#...........##.....###....#...','.#..#.....##.........##.....#..','....##.#.....#................#','..#..#......#.#..#....#..##....','#.....#...##............#......','.#.............#....#.......#..','#.........#..#...##.#...#.#.##.','...#......#..####....#.#.....#.','......#........#..........##.##','......##.#..##.##.....#........','##.....#..##.##..#.......##....','.##.........#...........#...#..','.....#...###..#...#...........#','..........#.#......#.###.....#.','...#.............#.##......##..','#.##.........#..###...........#','....#..##....#..#..#........###','...#........##.......##..#..#..','...#......#..#.#...............','#......###....#.#..#.#..#....#.','#.#.####.#.........#..#.#.#....','.....#....#...............#...#','.#........#......#.#...#.......','................#...#.....##...','.............#...####..........','.................##....##.###..','#................#......#......','.###.#........#..##.....#..###.','..#.#..#...#..#.#...#.#.....#.#','.....#............#..##..#..#.#','#........##.#...#.....#........','#.#.#..###......###............','...#..#...........##...#.....#.','......#........#...#.#....#....','....#..........#.#..#.#....##..','...#.....##..#......#.#.##...#.','.........#..#................#.','..#....#.##.....#.......#......','...#.....#.......##.##.....#...','#...#..............#..###..#...','#.#......#.#....#........##..#.','...#...##...##..#.........#....','..#...#......##.#.#.#....##....','#.......#.......#..#..#........','.........#..#.....#....#.....##','.#......#.......#.#..#..#...#.#','..#....#.#..#..................','#.....####..........#.#.....#.#','.#..#.#.#....#.#.....#.#.......','....##......#..#.....#.#.#...#.','...##...#......##.#....##.#....','..#..##....#...#...........#...','.......#........#...##.#.......','#.#..#....##.#....##...........','.......#............#..##..##..','#.#.#.....#....##.#.#.#.....#..','##...#...#.......#..#...#.....#','##..##.##..........#........##.','..............#.....#..#..##...','.......#...#.........#....#.#..','...#..#..#....#.#....##........','..#.......#....#....##.........','#...#.....#..#.#...##....#.....','.....##..#..##..#..............','.....##............#....#.#....','..#.....#....##.#.....#..#.....','#...#..#..#......#.#.#..##.....','.............................##','#...#.#................#....#.#','.#.#.#....##......###..##......','#.....#..#.##.#.#.##...###.....','.........#............##..#....','.#..#...#....#.....#.#........#','...............#......#..#.....','...................###........#','.###..##..##.......#.#.........','#.........#......#....#.#...#..','.#.#....#.......#.#..##...##...','.#.....#....##.......#.#.....#.','.........#...#....#.#..........','....###..#..##.#...##....#..#..','...#.#..##.#.........###.#..#..','#...#...........#....#.........','....##...........#.#.#......###','#....#...........##..#.........','###....#.....#.......#....###..','.#.......#....#.#.#.#......#.#.','........#...............#.#.#..','....#.........#.....#...##.##.#','...#............#.............#','..........#..#.................','........#.....##............#.#','..#...##........#...#.....#.#..','....#........#.#.#..........#..','#.#...#...........#............','....#.#...##...........#.....#.','...........#.#..#.....#........','.....#..#..#..#.....#.#.....#.#','#.....#.......#.......#...#....','#.........#....#.#........#..#.','...#..#.........#.....#..#.....','...#..#.............#..........','.#.......#..........#.....#...#','.....#.#......#.......#....#...','...#.....#..#..##....##....#...','.#.#.#..#...#.....#....#.......','..##.#..........#.....#.#......','..#..#.............#...##..##..','.#.............#..#....##...#..','..#...#.....#.................#','..##.......#.....#...#....#....','.#..#.##.........#...#.#...#...','...##.......##..#.....##.##...#','........####.#.........#.......','..#.#...##.#..#..#.......##.#..','.#..#............###..#..#.....','#.....#.#...#.#.......#........','..........#......#.#...#...#...','..#......#..#..#.#...#.........','..###........#.#....#.#...##...','.#.....#..#.#......#........#..','.#...#..#...#....#.......#..#..','..#....#..#.....#.#........#...','#..#.#.........#..........#..#.','.#.....##....#.........#.#.#.#.','#.#...#.....#.#.#....#.#..#....','.........#...................#.','..#.....#..##...#..........#.#.','..............#....#.........#.','.#....#.....#..............##..','#...#...#.#........##.........#','....###....#.#....#.#.........#','.....#........#.....##.........','.#...##..##..#.........##......','............#.....#........#...','..#....#.......#......#..#.#.#.','#.......#.#...........#..##.#..','......#.##......#....#.......#.','.....#........#...###.....#....','###..........#........#.#.#....','.....#...#.#...#...#...##.....#','.##...#.#........#.#....#......','......#.........#.....#.#......','.....#.##.....###.#...#...##..#','.#.#.......##....#..#..#.##....','.####...###.#.#.#.#............','......#..##...#..........#.##.#','......#............#...........','.....#.#..#.......##...##......','......#........#..#....#.#.#.#.','#..#..#.....#..#.....#.......#.','.#...#.....#..............#....','.#....#..#.##.#............####','..........#....#.##...#.#......','...#.#.#.#.#.......#.........#.','##........#..##..#.........#...','..#......#...#..#.#.....#......','..#.#......#...#...#.#.........','........................##.....','...#.##.#........#...#.......#.','..#.#......#....##........#.#..','#......#.##........#..#......#.','.....#..#..#.............#.....','......#......#........#....#...','...#....###.....#..#.#....#....','#.......................#....#.','..#...#...................#....','....#..#.....##.#..#...#.....#.','...#.........#...#.......#.....','..#....#.....#...#...#.#####...','.....####......#...........#...','......#.#..........#...#.#.#..#','###..#.#....#..#...............','...#...###..#..#.#.#...........','.....#...#.##.#.#.###..##......','.........#...........#....##.#.','....#..#......#................','...........#..#..#...#.#.......','..#.....#......##.###..........','.........#...................#.','..........#...#.#....##........','..#...##....#....#.......#...##','#......#.....#...#...#...#.....','....##...#.#.......#.#...##....','...#.....#....#.....#....#.....','#....##.....##..##..........##.','.....#.....#.#.#...............','.#.##....#.....#.#..#....#..##.','.....#.#.....##....#...........','.........#..#.......##..##.....','..#....##.....###...#....#.#...','............#......#.#...#..#..','#..##......#.#.##....#.#.......','.#.#.....#...#.#.#....#.....#..','#....#..#.#....#...#...........','......#.#.....#...#.#.#......#.','###..#....#.###.............#..','..............#####........###.','..#..#.#.#.#......#......#.....','###.........#.#..........#..#.#','.#.........#...#......####.....','..#.......####..#....#...#..#..','#.#..#.#...............#.#.#.#.','###....#.....##.#....#......##.','..#..#........#....###.#.#.....','...#.#..........#.....#...#....','....#......##.#............#..#','...##...#.....#..##....#..#.#.#','.......#.....#..#....#....##.#.','.#..#....#..#......##....##...#','..#......#...#.#..###..#.##....','#...#.....#......##...#.......#','.....#.#.....#...##............','.#..##.##..#..##.#........#....','....#.#......##...#.#.#.#..##..','.#..............##........#....','.##....#..#..#....#...#......#.','............###....##.......##.','..............####.....#.......','........##..##.#...#.......#...','....#..#.....##.......#####...#','.##..##..#.....#...#..#..#....#','##..#.#.#...........#..........','#..#......#...#....#...........','...#..##.#..........#..#.......','........#.#.....#......##......','.....#....#............#.......','.#.#..#....##......#.......###.','.#..#.#........#......#...##..#','...#....#......#..#........#.##','.........#..#...#..#.#.##......','....###.#...........#...#......','.##............#.......#..##...','##...#.#...............#.#...##','..#..#.....#.#..#..#...........','..#..#.##..#......#.##..#.#....','..#...#......#.#...#....##.#...','...###....####......#....#...#.','.......##........#.....##....#.','.........##..........#...#.....','.....#............#.##.#....#.#','..........#...#....##..........','....................#......#...','#......#..#...#.............##.','...........#...................','..#...#.........#.##.#..##.#...','#.#....#.#.....#............#..','.#..#.....#.....####......#.#..','#....#.......##..#...........#.','............#...#.....#..#.#...','#...........#...#####....#...#.','..........#...###..##.........#','#.....###............#..#..#.#.','...##.....#....#......#.....#..','#....#.......#..#......###...#.','...##.##......##..##..........#','.......#.#..#.#..#.#.#.#..#..#.','..#..###...#....#.....#......#.','...#.........#..#.##.#.....###.','..#.........#.##.#..#..#..###..','..####..#.........#.........#.#','..#.#...#.......#....##........','.#......#.#....................','..........#.......#.#..#..#....','..#........#....#.#..#.........','..#.....#.............#....#...','##...#.........#.....#...#.....'];


//part1 => right 3, down 1

function tobaggan(array) {
  let pos = array[0][0];
  let ptr = 0 //index of column/character in row/string
  let count = 0;
  let rowLength = array[0].length

  for(let i = 0; i < array.length - 1 ; i++) {
    let nextRow = array[i + 1]; //this is a string
    ptr += 3;
    if(ptr >= rowLength) {
      ptr -= rowLength;
    }
    pos = nextRow[ptr];
    if(pos === '#') {
      count++;
    }
  }
  return count;
}

console.log(tobaggan(inputArray, 3, 1)); //184

//part 2

function tobaggan2(array, r, d) {
  let pos = array[0][0];
  let ptr = 0
  let count = 0;
  let rowLength = array[0].length

  for(let i = 0; i < array.length - d; i += d) {
    let nextRow = array[i + d];
    ptr += r;
    if(ptr >= rowLength) {
      ptr -= rowLength;
    }
    pos = nextRow[ptr];
    if(pos === '#') {
      count++;
    }
  }
  return count;
}

//right 1, down 1

let slope1 = tobaggan2(inputArray, 1, 1)
console.log(slope1) // 62

//right 3, down 1

let slope2 = tobaggan2(inputArray, 3, 1)
console.log(slope2) // 184

//right 5, down 1

let slope3 = tobaggan2(inputArray, 5, 1)
console.log(slope3); // 80

//right 7, down 1

let slope4 = tobaggan2(inputArray, 7, 1)
console.log(slope4); // 74

//right 1, down 2

let slope5 = tobaggan2(inputArray, 1, 2)
console.log(slope5); // 36

//product of numTrees from all slopes

let product = slope1 * slope2 * slope3 * slope4 * slope5;
console.log('part 2 product: ', product) // 2431272960




//tests with examples from the prompt:

let testArray = ['..##.........##.........##.........##.........##.........##.......','#...#...#..#...#...#..#...#...#..#...#...#..#...#...#..#...#...#..','.#....#..#..#....#..#..#....#..#..#....#..#..#....#..#..#....#..#.','..#.#...#.#..#.#...#.#..#.#...#.#..#.#...#.#..#.#...#.#..#.#...#.#','.#...##..#..#...##..#..#...##..#..#...##..#..#...##..#..#...##..#.','..#.##.......#.##.......#.##.......#.##.......#.##.......#.##.....','.#.#.#....#.#.#.#....#.#.#.#....#.#.#.#....#.#.#.#....#.#.#.#....#','.#........#.#........#.#........#.#........#.#........#.#........#','#.##...#...#.##...#...#.##...#...#.##...#...#.##...#...#.##...#...','#...##....##...##....##...##....##...##....##...##....##...##....#','.#..#...#.#.#..#...#.#.#..#...#.#.#..#...#.#.#..#...#.#.#..#...#.#']

let test1 = tobaggan(testArray);
console.log(test1); // 7

let test2 = tobaggan2(testArray, 1, 1);
console.log(test2); // 2

let test3 = tobaggan2(testArray, 5, 1);
console.log(test3); // 3

let test4 = tobaggan2(testArray, 7, 1);
console.log(test4); // 4

let test5 = tobaggan2(testArray, 1, 2);
console.log(test5); // 2


let testProduct = test1 * test2 * test3 * test4 * test5;
console.log(testProduct); // 336



