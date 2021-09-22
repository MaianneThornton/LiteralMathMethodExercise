// 1a 
let warmHugs = "Hi, I'm Olaf and I like warm hugs.";
console.log(warmHugs);
// 1b
console.log(warmHugs.toUpperCase()); 
// 1c
console.log(warmHugs.replace("like","love"));
// 2a
let beenImpaled = "Oh, look at that. I've been impaled"
console.log(beenImpaled);
// 2b
console.log(beenImpaled.slice(18));
// 3a
let dotDotDot = "...";
console.log(dotDotDot);
// 3b
let skullBones = `I don't have a skull${dotDotDot} or bones.`
console.log(skullBones);
// 4
console.log(Math.PI)
// 5
let randomNumber = Math.random();
randomNumber *= 3;
randomNumber = Math.ceil(randomNumber)
console.log(randomNumber);

// BONUS TERRITORY
// 6
let letItGo = " Let It Go!"
console.log(letItGo.toUpperCase().repeat(2));
// 7a
let reindeers = "Reindeers are better than people."
console.log(reindeers);
// 7b
reindeers = reindeers.replace(/ /g, "_");
console.log(reindeers);
// 8
console.log(Math.sqrt(2));
// 9