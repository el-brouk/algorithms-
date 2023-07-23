//(graph) breadth-first search (BFS) 1
//search for the shortest path, i.e. with the minimum vertices
//runtime complexity O(V+E) - vertices+edges

let graf = {}; //an object

graf['you'] = ['alice', 'bob', 'claire']; //'you' is a key, it's value is an array of his neighbours
graf['bob'] = ['anuj', 'peggy'];
graf['alice'] = ['peggy'];
graf['claire'] = ['thom', 'jonny'];
graf['anuj'] = [];
graf['anuj'] = [];
graf['thom'] = [];
graf['jonny'] = [];

function personIsSeller(name) { //checks the last letter of a given string, returns boolean
	return name[name.length - 1] === 'm';
}


//finds the shortest path, i.e. with the minimum vertices
function search(name) { 
	let searchQueue = []; //create a new queue. FIFO - first in, first out
	searchQueue = searchQueue.concat(graf[name]); //add all the name's neigbours to the search queue
	let searched = []; //array of all who were already checked
	while (searchQueue.length) { //while there are neighbours
		let person = searchQueue.shift(); // take the first neighbour from the queue
		if (searched.indexOf(person) === -1) { //if this person wasn't checked yet
			if (personIsSeller(person)) { //check if person is the seller
				console.log(`${person} is mango seller`);
				return true;
			} //else:
			searchQueue = searchQueue.concat(graf[person]); //add all the person's neigbours to the end of search queue
			searched.push(person); //add the person to the array of all who were checked
		}
	}
	return false; //everyone was checked	
}

