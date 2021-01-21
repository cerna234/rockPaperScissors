
let robot =["rock","paper","scissors"]





let Winner = document.querySelector("#Winner");

let p1score = 0;
let p2score = 0;


function game(){

    
    
    
    let choice = Math.round(Math.floor(Math.random() * 3));
    console.log(choice);

    
    let p1Choice = document.querySelector("#player1").value;
    let p2Choice = robot[choice];

    
    if(p1score == 10 ){
        console.log("Player 1 wins");
        console.log("Game Over");
        return;

        
        
    }
    else if (p2score ==10) {
        console.log("player 2 wins");
        return;
    }

    else{

    

    
    if(p1Choice == "rock" && p2Choice == "scissors" ){
        document.querySelector("#Winner").innerHTML =  "Player one Wins";
        document.querySelector("#p1Answer").innerHTML = "P1 chose rock"
        document.querySelector("#p2Answer").innerHTML = "P2 chose scissors"
        console.log(robot[choice]);
        p1score = p1score +1;
        document.querySelector("#p1score").innerHTML = "player one score: " + p1score;
        
    

    }else if (p1Choice == "paper" && p2Choice == "rock") {
        document.querySelector("#Winner").innerHTML =  "Player one Wins";
        document.querySelector("#p1Answer").innerHTML = "P1 chose paper"
        document.querySelector("#p2Answer").innerHTML = "P2 chose rock"
        console.log(robot[choice]);
        p1score = p1score +1;
        document.querySelector("#p1score").innerHTML = "player one score: " + p1score;
        if(p1score == 10){
            console.log("p1 wins");
        }
     
    }
    else if (p1Choice == "scissors" && p2Choice == "paper"){
        document.querySelector("#Winner").innerHTML =  "Player one Wins";
        document.querySelector("#p1Answer").innerHTML = "P1 chose scissors"
        document.querySelector("#p2Answer").innerHTML = "P2 chose paper"
        console.log(robot[choice]);
        p1score = p1score +1;
        document.querySelector("#p1score").innerHTML = "player one score: " + p1score;
        if(p1score == 10){
            console.log("p1 wins");
        }
       
    }

    else if(p1Choice == "rock" && p2Choice == "paper" ){
        document.querySelector("#Winner").innerHTML =  "Player two Wins";
        document.querySelector("#p1Answer").innerHTML = "P1 chose rock"
        document.querySelector("#p2Answer").innerHTML = "P2 chose paper"
        console.log(robot[choice]);
        p2score = p2score +1;
        document.querySelector("#p2score").innerHTML = "player two score: " + p2score;
    }
    else if(p1Choice == "paper" && p2Choice == "scissors" ){
        document.querySelector("#Winner").innerHTML =  "Player two Wins";
        document.querySelector("#p1Answer").innerHTML = "P1 chose paper"
        document.querySelector("#p2Answer").innerHTML = "P2 chose scissors"
        console.log(robot[choice]);
        p1score = p1score +1;
        document.querySelector("#p2score").innerHTML = "player two score: " + p2score;
    }
    else if(p1Choice == "scissors" && p2Choice == "rock" ){
        document.querySelector("#Winner").innerHTML =  "Player two Wins";
        document.querySelector("#p1Answer").innerHTML = "P1 chose scissors"
        document.querySelector("#p2Answer").innerHTML = "P2 chose rock"
        console.log(robot[choice]);
        p1score = p1score +1;
        document.querySelector("#p2score").innerHTML = "player two score: " + p2score;
    }
    else if (p1Choice == p2Choice){
        
        document.querySelector("#Winner").innerHTML =  "Its a Tie!";
        document.querySelector("#p2Answer").innerHTML =  "Tie";
        document.querySelector("#p1Answer").innerHTML = "Tie";
        console.log(robot[choice]);
    }
   


}
        
    
    
    
    


}


