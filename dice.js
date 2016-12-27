var filled = [false, false, false, false, false, false];
var playerDrinkCount = [0,0,0,0,0,0]
var players = prompt("How many players?");
var rounds = prompt("How many rounds?");

console.log(players, rounds);
playerIndex = 0;
for(var i = 0; i < rounds; i++){
  while(!filled[Math.floor(Math.random() * 6)]){
    playerDrinkCount[playerIndex] += 1;
  }
  playerIndex = (playerIndex + 1) % 6;
}

console.log(playerDrinkCount);
