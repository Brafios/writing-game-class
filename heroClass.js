class hero {
    constructor(name, age, word) 
    {
        this.name = name;
        this.age = age;

        this.class = ["mage", "warrior", "monk", "ninja"];
        this.word = word % this.class.length;

        if (this.class[this.word] === "mage") 
        {
            this.attack = "magic";
        }
        
        else if (this.class[this.word] === "warrior") 
        {
            this.attack = "sword";
        }
        
        else if (this.class[this.word] === "monk") 
        {
            this.attack = "martial art";
        }
        
        else 
        {
            this.attack = "shuriken";
        }

        console.log(`The hero/heroine has the name ${this.name} and age ${this.age} how your class is ${this.class[this.word]}`);
        console.log(`The ${this.class[this.word]} used ${this.attack}`);
        console.log("---------------");
    }
}

let cont = 0;

for (cont; cont <= 3; cont++) {
    let champion = new hero("Carvalho", 23, cont);
}
