function greetUser(greetingPrefix, username = "user") {
  //console.log(greetingPrefix + " " + username + "!");
console.log(`${greetingPrefix} ${username} !`) // template literal string
}
greetUser("Hi");

function sumUp(...numbers) {
  // ... is a special operator. means accepts any amount of parameters separated by comma and will be in an array
  // ... Rest - combine any amount objects into array
  // ... Spread - split array into comma separated list of values
  
  let result;
  for (const number of numbers) {
    result += number;
  }
  return result;
}
console.log(sumUp(1, 5, 10, 11));
