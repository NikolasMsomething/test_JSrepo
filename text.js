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

function decode(str) {  //not done
  let newAr = str.split(" ")
  let newAr2 = []
    for(let i = 0; i < newAr.length; i++) {
            if(newAr[i][0] === "a") {
              newAr2.push(newAr[i][1]);
            } else if(newAr[i][0] === "b") {
                newAr2.push(newAr[i][2]);
            } else if(newAr[i][0] === "c") {
                newAr2.push(newAr[i][3]);
            } else if(newAr[i][0] === "d") {
                newAr2.push(newAr[i][4]);
            }  else  {
                newAr2.push(" ");
            }
    }
  let boop = newAr2.join("");
  return boop;
}

function rockPaperScissors (num){
    let dog = undefined;
  if(num === 1) {
      dog === "rock"
  } else if (num === 2) {
      dog === "paper"
  } else if (num === 3) {
      dog === "scissors"
  }

  function randomNo () {
    return Math.floor(Math.random() * 3) + 1;
  } 

  let computerResult = randomNo();
    if(computerResult === 1 && num === 1) {
        return `You both chose ${dog}, it's a tie`
    } else if(computerResult === 2 && num === 2) {
        return `You both chose ${dog}, it's a tie`
    } else if(computerResult === 3 && num === 3) {
        return `You both chose ${dog}, it's a tie`
    } else if(computerResult === 1 && num === 2) {
        return `You chose ${dog} and the computer chose rock, you win`
    } else if(computerResult === 1 && num === 3) {
        return `You chose ${dog} and the computer chose rock, you lose`
    } else if(computerResult === 2 && num === 1) {
        return `You chose ${dog} and the computer chose paper, you lose`
    } else if(computerResult === 2 && num === 3) {
        return `You chose ${dog} and the computer chose paper, you win`
    } else if(computerResult === 3 && num === 1) {
        return `You chose ${dog} and the computer chose scissors, you win`
    } else if(computerResult === 3 && num === 2) {
        return `You chose ${dog} and the computer chose scissors, you lose`
    }
}

function howManyDaysInMonth(month, leapYear) {
    switch(month) {
        case "January":
        case "March":
        case "July":
        case "October":
        case "December":
        case "August":
        days = `${month} has 31 days`;
        break;  
        case "April":
        case "June":
        case "September":
        case "November":
        days = `${month} has 30 days`;
        break;
        case  "February":
          switch(leapYear) {
              case true: days =`${month} has 29 days`;
              break;
              case false: days =`${month} has 28 days`;
              break;
          }
    }
    return days;
}

const nicksAge = yearsOld(21);

const sayHiToNick = createGreeting("Nick", 21);

console.log(sayHiToNick, nicksAge);