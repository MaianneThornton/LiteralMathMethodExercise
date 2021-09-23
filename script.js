// 1a 
let warmHugs = "Hi, I'm Olaf and I like warm hugs.";
console.log(warmHugs);
// 1b
console.log(warmHugs.toUpperCase()); 
// 1c
warmHugs = warmHugs.replace("like","love")
console.log(warmHugs);
// 2a
let beenImpaled = "Oh, look at that. I've been impaled."
console.log(beenImpaled);
// 2b
console.log(beenImpaled.slice(18)); 
// Other ways to complete:
// console.log(beenImpaled.slice(18, 36));
// console.log(beenImpaled.slice(-18));
// 3a
let dotDotDot = "...";
console.log(dotDotDot);
// 3b
let skullBones = `I don't have a skull${dotDotDot}or bones.`
console.log(skullBones);
// 4
console.log(Math.PI);
// 5
let randomNum = Math.random();
randomNum *= 3;
randomNum = Math.floor(randomNum);
randomNum++;
console.log(randomNum);
// Try not to use ceil as you can get a random number of zero
// Option 1
// let randomNumber = Math.random();
// randomNumber *= 3;
// randomNumber = Math.ceil(randomNumber)
// console.log(randomNumber);
// Option 2
// let randomNumber = Math.ceil(Math.random()*3);
// console.log(randomNumber);

// BONUS TERRITORY
// 6
console.log(" Let It Go!".toUpperCase().repeat(2).trim());
// 7a
let reindeers = "Reindeers are better than people.";
console.log(reindeers);
// 7b g stands for global (all instances of the character between the front slash)
reindeers = reindeers.replace(/ /g, "_");
// option 2
// console.log(reindeers.split(" ").join("_"));
console.log(reindeers);
// 8
console.log(Math.SQRT2);
// Option 2
console.log(Math.sqrt(2));
// 9
let newRandomNumber = Math.floor(Math.random() * (23 - 7 + 1) + 7);
console.log(newRandomNumber);
// Working it out:
/*
// var newRandomNumber = Math.floor(Math.random() * (16 + 1) + 7);
// var newRandomNumber = Math.floor(Math.random() * 17 + 7);
// var newRandomNumber = Math.floor(A number from 0 up to 16.999 + 7);
// var newRandomNumber = Math.floor(A number from 7 up to 23.999);
// var newRandomNumber = A whole number from 7 up to 23;

*/
