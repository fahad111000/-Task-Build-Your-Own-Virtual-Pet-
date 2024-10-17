console.log("Working..");



// Object(pet details)
var myPet = {
    petName: prompt("What's your pet name?"),
    petType: prompt("What kind of pet is it(cat, dog, rabbit)"),
    petAge: +prompt('pet age: '),
    happiness: +prompt('How happy is your pet?'),
    hunger: +prompt('How hungry is your pet'),

    petFeed: function () {
        this.hunger = Math.max(0, this.hunger - 20);
        alert(`${this.petName} has been fed. Hunger is now ${this.hunger}.`);

    },

    petPlay: function () {
        this.happiness = Math.min(100, this.happiness + 20);
        alert(`${this.petName} played and is now happier! Happiness is ${this.happiness}`);

    },

    petAges: function () {
        this.petAge += 1;
        this.happiness = Math.max(0, this.happiness - 5);
        this.hunger = Math.min(100, this.hunger + 10);
        alert(`${this.petName} has aged. Age: ${this.petAge}, Happiness: ${this.happiness}, Hunger: ${this.hunger}.`);

    },

    checking: function () {

        do {
            var options = +prompt(`hunger: How hungry is your pet \n 1) Feed \n 2) Play \n 3) age \n 4) quit`)
            if (options == 1) {
                this.petFeed();
            }

            else if (options == 2) {
                this.petPlay();
            }

            else if (options == 3) {
                this.petAges();
            }

            else if (options == 4) {
                break;
            }


        } while (options !== 4);


    },



}
var a = 10;
myPet.checking();

