let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const user=document.querySelector("#userscore");
let computer=document.querySelector("#compscore");
const gencompchoice=()=>{
const options=["rock","paper","scissors"];
 const randomindex=Math.floor(Math.random()*3);
 return options[randomindex];
}
const draw=()=>{
    console.log("game was a draw");
    msg.innerText="Game was a draw";
    msg.style.backgroundColor="#081b31";
}
const showWinner=(userwin,choiceId,compchoice)=>{
if(userwin){
    userscore++;
    user.innerText=userscore;
    console.log("you win");
    msg.innerText=`You win!.Your ${choiceId} beats ${compchoice}`;
    msg.style.backgroundColor="green";
}
else{
    compscore++;
    computer.innerText=compscore;
    console.log("you loose");
    msg.innerText=`You lose. ${compchoice} beats your ${choiceId}`;
    msg.style.backgroundColor="red";
}
}
const playGame=(choiceId)=>{
console.log("user Choice=", choiceId);
//Generate computer Choice
const compchoice=gencompchoice();
console.log("comp choice=",compchoice);
if(choiceId===compchoice){
   draw();
}
else{
    let userwin=true;
    if(choiceId==="rock"){
        userwin=compchoice==="paper"?false:true;
    }
    else if(choiceId==="paper")
    {
    userwin=compchoice==="scissors"?false:true;
    }
    else{
        userwin=compchoice==="rock"?false:true;
    }
    showWinner(userwin,choiceId,compchoice);
}
};
choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",()=>{
        const choiceId=choice.getAttribute("id");
        console.log("Option was Clicked",choiceId);
        playGame(choiceId);
    }
    );
}
);