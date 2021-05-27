class Player{
  constructor(){
    this.index = null
    this.distance = 0
    this.name = null
}
    getCount(){
      alert("player get count")
        var playerCountRef  = database.ref('playerCount');
        
        playerCountRef.on("value",(data)=>{
    
           playerCount = data.val();
         })
        }
         
        updateCount(count){
          alert("player update count")
            database.ref('/').update({
         
                playerCount: count
          
          });
        } 
    update(){
      alert("player update function")
      var playerIndex = "players/player "+ this.index
      database.ref(playerIndex).set({
        name:this.name,
        distance:this.distance
      })
    }
 static getPlayerinfo(){
  alert("player get player info ")
   var playerInfoRef = database.ref('player');
   playerInfoRef.on("value",(data)=>{
     allPlayers = data.val()
   })
 }




}