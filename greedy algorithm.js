//a quick way to find a simple approximate solution 

/* The set-covering problem
Suppose you’re starting a radio show. You want to 
reach listeners in all 50 states. You have to decide what 
stations to play on to reach all those listeners. It costs 
money to be on each station, so you’re trying to minimize the 
number of stations you play on. You have a list of stations.
Each station covers a region, and there’s overlap.
How do you figure out the smallest set of 
stations you can play on to cover all 50 states? */

//make a set from an array to be sure that each element appears only once
let statesNeeded = new Set(["mt", "wa", "or", "id", "nv", "ut", "ca", "az"]);

// all the stations and the states that each station covers:
const stations = {};
stations["kone"] = new Set(["id", "nv", "ut"]);
stations["ktwo"] = new Set(["wa", "id", "mt"]);
stations["kthree"] = new Set(["or", "nv", "ca"]);
stations["kfour"] = new Set(["nv", "ut"]);
stations["kfive"] = new Set(["ca", "az"]);

//to store the result:
const finalStations = new Set();

//.size returns length of a set; while is executed untill all states are covered
while (statesNeeded.size) {
  let bestStation = null;
  let statesCovered = new Set();

  for (let station in stations) { //for each station
    const states = stations[station]; // take the states it covers
    //make an array from states needed and filter it by the elements that are inside the station
    const covered = new Set([...statesNeeded].filter(x => states.has(x)));
    //if there are more states covered by a station than alredy are covered
    if (covered.size > statesCovered.size) { 
        bestStation = station;
        statesCovered = covered;
      }
  }

  //update the states that are left needed
  statesNeeded = new Set([...statesNeeded].filter(x => !statesCovered.has(x)));
  
  finalStations.add(bestStation);

}

//finalStations is the answer