let myStamp = 1014511;

let buses = ['17','x','x','x','x','x','x','41','x','x','x','x','x','x','x','x','x','643','x','x','x','x','x','x','x','23','x','x','x','x','13','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','29','x','433','x','x','x','x','x','37','x','x','x','x','x','x','x','x','x','x','x','x','19']

let busIds = buses.filter(bus => bus !== 'x').map(bus => Number(bus));

//part 1


function whichBusWhen(array, myStamp) {
  let arrivals = {};
  for(let i = 0; i < array.length; i++) {
    let bus = array[i];
    arrivals[bus] = findSoonest(bus, myStamp);
  }
  for(let bus in arrivals) {
    if(arrivals[bus] === Math.min(...Object.values(arrivals))) {
      return bus * (arrivals[bus] - myStamp);
    }
  }
}

//part 1 helper function

function findSoonest(busId, timestamp) {
  let stamp = 0;
  for(let i = 0; i < timestamp; i += busId) {
    stamp = i;
  }
  return stamp + busId;
}

let testArray = [7,13,59,31,19];
let testStamp = 939;

console.log(whichBusWhen(testArray, testStamp)) //295
console.log(whichBusWhen(busIds, myStamp)) // 3464

//part 2

