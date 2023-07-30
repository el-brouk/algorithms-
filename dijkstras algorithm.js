//the graph:
const graph = {};
graph['start'] = {};
graph['start']['a'] = 6;
graph['start']['b'] = 2;

graph['a'] = {};
graph['a']['fin'] = 1;

graph['b'] = {};
graph['b']['a'] = 3;
graph['b']['fin'] = 5;

graph['fin'] = {};

//the costs table:
const costs = {};
costs['a'] = 6;
costs['b'] = 2;
costs['fin'] = Infinity;

//the parents table:
const parents = {};
parents['a'] = 'start';
parents['b'] = 'start';
parents['fin'] = null;

//array for all the nodes that were checked:
const processed = [];

//function to find the node with the lowest cost:
function findLowestCostNode(costs) { 
    let lowestCost = Infinity;
    let lowestCostNode = null;

    for (let node in costs) { //go through each node
        let cost = costs[node];
        //if it's cost is lower then update lowestCost:
        if (cost < lowestCost && processed.indexOf(node) === -1) {
            lowestCost = cost;
            lowestCostNode = node;
        }
    }
    return lowestCostNode;

}

let node = findLowestCostNode(costs); // the node with the lowest cost

//the algorithm:
while (node != null) {
    let cost = costs[node]; //take the cost of the node
    let neighbors = graph[node]; //take node's neighbors
    //'Object.keys()' returns an array of keys. For each key:
    Object.keys(neighbors).forEach(function(n) {
        //we check all neighbors of node
        //what is the cost to get to a neighbor though the node
        let new_cost = cost + neighbors[n]; //cost of node + cost of neighbor
        if (costs[n] > new_cost) {
            costs[n] = new_cost; //update the cost of neighbor
            parents[n] = node; //update the parent of that neighbor
        }
    });

    //the node is processed:
    processed = processed.concat(node);
    // find the next node with the lowest cost and loop:
    node = findLowestCostNode(costs);
}


