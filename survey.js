const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let name;
let activity;
let listensTo;
let favMeal;
let favPlate;
let favSport;
let superpower;

rl.question("What's your name? Nicknames are also acceptable :)", (answer) => {
  name = answer;
  console.log(`Hi ${name}!`);
  
  rl.question("What's an activity you like doing?", (answer) => {
    activity = answer;
    console.log(`${activity}, great activity`);
    
    rl.question("What do you listen to while doing that?", (answer) => {
      listensTo = answer;
      console.log(`Nice!`);

      rl.question("Which meal is your favourite? (ie: dinner, brunch, etc)", (answer) => {
        favMeal = answer;
        console.log(`delicius!`);

        rl.question("What's your favourite thing to eat for that meal?", (answer) => {
          favPlate = answer;
          console.log(`me too`);

          rl.question("Which sport is your absolute favourite?", (answer) => {
            favSport = answer;

            rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (answer) => {
              superpower = answer;

              console.log("One sentence...")
              console.log(`${name} likes ${activity} and listen ${listensTo} , loves eat ${favPlate} in ${favMeal} favourite sport is ${favSport}, and the super power is ${superpower}.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});