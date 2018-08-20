function createGreeting(name, age) {
    if(name === undefined) {
        throw new Error("Arguments are invalid");
    } else if(age === undefined) {
        throw new Error("Arguments are invalid");
    } else if (isNaN(age)) {
        throw new Error("Thats not a number")
    } else {
        return `Hey I'm ${name} and I'm ${age} years old`
    }
}

function yearsOld(age) {
    if(age < 0) {
        throw new Error("Age can not be negative")
    }
    let algo = 2018 - age;
    return `I was born in ${algo}`;
}

try {
    createGreeting("Zoo", 100) 

    } catch(err) {
      console.log("ERROR!");
    }


function jediName(firstName, lastName) {
    let newAr1 = [];
    let newAr2 = [];
      for(let i = 0; i <= 2; i++) {
        newAr1.push(firstName[i])
        newAr2.push(lastName[i])
      }
      const jedi = newAr2.concat(newAr1).join("");
      return jedi;
}


const nicksAge = yearsOld(21);

const sayHiToNick = createGreeting("Nick", 21);

console.log(sayHiToNick, nicksAge);