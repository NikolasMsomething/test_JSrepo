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

function beyond(num) {
    if(num === Infinity) {
      console.log("And Beyond");
    } else if(num > 0 && num !== Infinity) {
        console.log("To Infinity");
    } else if(num < 0 && num !== Infinity) {
        console.log("To negative infinity");
    } else if(num === 0) {
        console.log("Staying home");
    }
}

function decode(str) {
  let newAr = str.split(" ")
  let newAr2 = []
    for(let i = 0; i < newAr.length; i++) {
            if(newAr[i][0] === "a") {
              newAr2.push(newAr[i][2 + 1]);
            } else if(newAr[i][0] === "b") {
                newAr2.push(newAr[i][3 + 1]);
            } else if(newAr[i][0] === "c") {
                newAr2.push(newAr[i][4 + 1]);
            } else if(newAr[i][0] === "d") {
                newAr2.push(newAr[i][5 + 1]);
            }  else  {
                newAr2.push(" ");
            }
    }

  let boop = newAr2.join("");
  return boop;
}

const nicksAge = yearsOld(21);

const sayHiToNick = createGreeting("Nick", 21);

console.log(sayHiToNick, nicksAge);