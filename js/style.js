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

    attack(opponent) {
        return opponent - this.firePower;
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

    attack(opponent) {
        return opponent - this.firePower;
    }
}

// A class for Alien Re-Enforcement ships w/ more hull and firePower
class AlienShipReEnforcement {
    constructor(name) {
        this.name =  name;
        this.hull = Math.floor((Math.random() * 6) + 3);
        this.firePower = Math.floor((Math.random() * 5) + 2);
        this.accuracy = (Math.floor(Math.random() * 4) + 6) / 10;
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


let chances = 3;    // the amount of times user can refuse to continue, amount affected if refused twice in a row
let winner = "Captin";
let enemies = alienShipsArray.length;

while (alienShipsArray.some(ship => ship.hull > 0) && captin.hull > 0) {   // as long as there is an alien ship w/ hull power and caption w/ hull, the following conditions are ran

    for (let ship of alienShipsArray) {                         // loops through the alienShipsArray
        
        if (ship.hull > 0) {                                    // completes only if ship.hull > 0
            window.alert("Ready...");
            window.alert("...Set...");
            window.alert("Attack!");
            window.alert(`TARGET: Alien Ship ${ship.name}`);
            ship.hull = captin.attack(ship.hull);               // ship.hull - 5 ... value replaces ship.hull
            
            if (ship.hull <= 0) {                               // completes only if ship.hull <= 0
                enemies --
                window.alert(`${ship.name} has been defeated!`);
                window.alert(`Number of Enemy Alien Ships Left: ${enemies}`)
                
                if (chances > 0) {                              // completes only if there are chances left. more than 0 chances
                    let answer = window.prompt("Would you like to continue? Yes or No");
                    answer.toLowerCase

                    if (answer.includes("no")){                 // completes only if user's answer includes the answer no
                        enemies ++;
                        const reEnforement = new AlienShip("Re-Enforcement");   // a new Alien Ship is initalized
                        alienShipsArray.push(reEnforement);     // the newly created alien ship is pushed into the array for circluation
                        window.alert("More Alien Ships are arriving!!! MAN YOUR STATIONS NOWWW!!!");
                    } else if (!answer.includes("ye")) {        // completes only if yes is not apart of the answer or anyother response
                        enemies ++;
                        chances --;  
                        const reEnforement = new AlienShipReEnforcement("Re-Enforcement");  // an even stronger and accurate Alien Ship is created
                        alienShipsArray.push(reEnforement)      // the newly created Alien Ship is pushed into the array for circluation
                        window.alert("THEY'VE BROUGHT STRONGER RE-ENFORCEMENTS!");
                    }

                } else {                                        // completes only if there are NO chances left. 0 chances
                    if (enemies > 0) {                          // completes only if there are eniemies left. more than 0 enemies
                        window.alert("World leader: You no longer have a choice Captin. Continue with the mission...")
                    }
                }

            } else {                                            // completes only if ship.hull > 0. the ship had survived captin's attack
                window.alert(`Number ${ship.name} survived. Time for it too attack. Brace yourself!`);

                if (ship.accuracy >= 0.7) {                     // alien ship will make a successful attack if accuracy is >= 0.7
                    captin.hull = ship.attack(captin.hull);     // decreases Captin's hull by Alien Ship's firepower amount
                    window.alert("Mayday Maday!! Damage taken to your ship!");
                    window.alert(`Your new hull amount: ${captin.hull}`);
                    
                    if (captin.hull <= 0) {                     // completed only if when USS Ship is attacked and the captin have no more hull/
                        winner = "Alien";                       // changes winner from "Captin" to "Alien"
                        window.alert("Captain, your ship has been destroyed! Mission failed...");
                    }

                } else {                                // alien ship with an accuracy <  0.7 will not attack captin
                    window.alert(`${ship.name} was not over 9000, so they missed! Move to the next Target!`);
                }

            }

        }

    }

}

if (winner === "Captin") {
    window.alert("Captain, your unwavering courage and strategic brilliance have triumphed! The galaxy salutes your valor in vanquishing the formidable alien force. Your leadership inspires us all. A hero among stars!")
} else {
    window.alert("Alien: Your species are a bunch of losers. Prepair to be conqured. Fairwell.")
}

/*
GOALS:
    - randomize alien ships accuracy and firePower with each loop. PROMOTES RANDOMNESS
    - customize "captin" and responses to include user's prefered name. PROMOTES CUSTOMIZATION
*/