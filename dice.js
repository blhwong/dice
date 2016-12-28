var filled = [0, 0, 0, 0, 0, 0];
var playerDrinkCount = [];
var players = prompt("How many players?");
var rounds = prompt("How many rounds?");

for(var j = 0; j < players; j++){
  playerDrinkCount.push(0);
}
console.log(playerDrinkCount);
console.log(players, rounds);
playerIndex = 0;
for(var i = 0; i < rounds; i++){
  var rolled = Math.floor(Math.random() * 6);
  //console.log('player ', playerIndex, ' rolled: ', rolled);
  while(filled[rolled]){
    //console.log("drink");
    playerDrinkCount[playerIndex] += 1;
    //console.log('player drink: ', playerDrinkCount);
    filled[rolled] ^= 1;
    //console.log('filled: ', filled);
    rolled = Math.floor(Math.random() * 6);
    //console.log('player ', playerIndex, ' rolled: ', rolled);
  }
  //console.log('fill');
  playerIndex = (playerIndex + 1) % players;
  filled[rolled] ^= 1;
  //console.log('filled: ', filled);
}

console.log('end player drink: ', playerDrinkCount);
