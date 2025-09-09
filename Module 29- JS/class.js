class Player {
    goal (){
        console.log('score a goal');
    }

    getPlayerName(){
        return 'Barsa';
    }
} 

const player1=new Player();
player1.goal()
console.log(player1.getPlayerName( ))