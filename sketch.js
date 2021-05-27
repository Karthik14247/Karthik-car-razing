var gameState = 0
var playerCount = 0
var database
var form
var player
var game 
var allPlayers
var car1,car2,car3,car4,cars

function setup(){
  alert("sketch setup ")
  database = firebase.database();
  console.log(database);
  createCanvas(displayWidth-20,displayHeight-30);
  game = new Game()

  game.getState()
  game.start()
console.log(gameState)
}

function draw(){
  alert("sketch draw")
 if(playerCount===4){
   game.update(1)
 }
 if(gameState===1){
   clear()
   game.play
 }


}

