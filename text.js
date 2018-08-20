function createGreeting(name, age) {
  return `Hey I'm ${name} and I'm ${age} years old`
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


const nicksAge = yearsOld(21);

const sayHiToNick = createGreeting("Nick", 21);

console.log(sayHiToNick, nicksAge);