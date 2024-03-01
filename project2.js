//first we have to create two variables to track user-score and comp-score
let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorepara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#comp-score");


const genCompChoice=()=>{
    //randomly computer choice any one at a time from them
    const options=["rock","papaer","scissors"];//stored in array form bcz its imposibble to create string but we can create numbers so we use index of an array
    //if we want to generate number from rand 1 to 3 then you have to multiply with 3 in random function
    //to remove number after decimal we use math.floor function
   const randIdx=Math.floor( Math.random()*3);
   return options[randIdx];
};
const drawGame=()=>{
    msg.innerText="Draw!"
    msg.style.backgroundColor="blue";

};

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorepara.innerText=userScore;
        msg.innerText=`You Win!,Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    } else{
        compScore++;
        compScorepara.innerText=compScore;
        msg.innerText=`You lose!,${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor="red";
    }

}


const playGame=(userChoice)=>{
    //Generate computer choice
    const compChoice=genCompChoice();
    if(userChoice===compChoice){
        //draw
        drawGame();
    } else{
        let userWin=true; // assuming we are winning
        if(userChoice==="rock"){
            // as we computer cannot chose rock now beacause same are draw condition
            // so it has two options papaer and scissors
            userWin=compChoice==="paper"?false:true;
        }
        if(userChoice==="paper"){
            userWin=compChoice==="scissors"?false:true;

        }
        else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);

    }

};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
        });
});