// An array of the ALIEN SHIPS.
const alienShips = [
    {
        shipNumber: "One",
        hull: null,
        firepower: null,
        accuracy: null
    },

    {
        shipNumber: "Two",
        hull: null,
        firepower: null,
        accuracy: null
    },

    {
        shipNumber: "Three",
        hull: null,
        firepower: null,
        accuracy: null
    },

    {
        shipNumber: "Four",
        hull: null,
        firepower: null,
        accuracy: null
    },

    {
        shipNumber: "Five",
        hull: null,
        firepower: null,
        accuracy: null
    },

    {
        shipNumber: "Six",
        hull: null,
        firepower: null,
        accuracy: null
    }
]

// A class for the user, THE USS ASSEMBLY SHIP
class ShipUSS {
    constructor() {
        this.name = "THE USS ASSEMBLY"  /* goal: to make this mutible for users to enter their name. ADDS PERSONALIZATION */
        this.hull = 20;
        this.firePower = 5;
        this.accuracy = 0.7;
    }
}

// A class for the ALIEN SHIPS
class AlienShip {
    constructor(name) {
        this.name =  name;
        this.hull = Math.floor((Math.random() * 4) + 3);
        this.firePower = Math.floor((Math.random() * 3) + 2);
        this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10;
    }
}




// User initalized
let captin = new ShipUSS();
console.log(captin);

// Aliens initalized
const alienShipsArray = []; // holds an iterable array of iterated alien ships

for ( let ship of alienShips) { // loops through the alienships array list
    const singleAlienShip = new AlienShip(ship.shipNumber); // iterates a new alien and saves it to a variable
    alienShipsArray.push(singleAlienShip)   // pushes the newly created alien into the alienShipsArray
}

console.log(alienShipsArray);
