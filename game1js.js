let userScore = 0;
let comScore  =0;

const choices = document.querySelectorAll(".choice");
const result =document.querySelector("#result");

const userScorePara = document.querySelector("#user-score");
const comScorePara = document.querySelector("#com-score");

const genCompChoice = () => {
    const options = ["Rock" ,"paper" ,"scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx]; 
};

const drawGame = () => {
    result.innerText = "game was draw😐.Play again/";
};

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you win");
        result.innerText = `You Win 😊 your ${userChoice} beats ${compChoice}`;
    }else{
        comScore++;
        comScorePara.innerText = comScore; 
        result.innerText = `you lost😭 ${compChoice} beats your ${userChoice}`;
    }
};

const playGame = (userChoice) => {
    console.log("user choice =",userChoice);
    // Generate computer choice [->modular way of programming(reusibal function in future )]
    const compChoice = genCompChoice();
    console.log ("comp choice =" ,compChoice);

    if(userChoice === compChoice){
        //Draw Game
        drawGame();
    }else{
        let userWin = true ;
        if(userChoice === "Rock") {
            //scissors ,paper 
            userWin = compChoice === "paper" ? false : true ;
        }else if(userChoice === "paper") {
            //rock ,scissors
            userWin = compChoice === "scisssor" ? false : true;
        }else {
            //rock ,paper
            userWin = compChoice === "Rock" ?false : true;
        }
        showWinner(userWin , userChoice,compChoice);
    }
};



choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    });
});

