let userScrore = 0;
let compScrore = 0;

const userScrorePara = document.querySelector("#user");
const compScrorePara = document.querySelector("#cmp");

const choices = document.querySelectorAll(".choice");
const msg =  document.querySelector("#msg");


const genCmpChoice = () => {
    const option = ["rock", "paper","scissor"];
    const rndIdx = Math.floor(Math.random()*3);
    return option[rndIdx];
}

const drawGame = () => {
   
    msg.innerText = "Game was draw Try again!"
    msg.style.backgroundColor = "blue";
}

const showWinner = (userWin, userChoice, cmpChoice) => {
    if(userWin) {
        userScrore++;
        userScrorePara.innerText = userScrore;
        console.log("You win");
        msg.innerText = `You win!  Your ${userChoice} beats ${cmpChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScrore++;
        compScrorePara.innerText = compScrore;
       
        msg.innerText = `You lose! ${cmpChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    //generat computer choice
    const cmpChoice = genCmpChoice();


    if (userChoice === cmpChoice) {
        //Draw game
        drawGame();
    }else {
        let userWin = true;
        if (userChoice === "rock") {
           // scissor, paper
           userWin = cmpChoice === "paper" ? false : true;
        }else if(userChoice === "paper") {
            // rock, scissor
            userWin = cmpChoice === "scissor" ? false : true;
        } else {
            userWin = cmpChoice === "rock" ? false : true ;
        }

        showWinner(userWin, userChoice, cmpChoice);
    }
};



choices.forEach((choice) => {
    choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
    //computer choice
    });
});

