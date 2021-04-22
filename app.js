btn1 = document.querySelector("#p1Button");
btn2 = document.querySelector("#p2Button");
reset = document.querySelector("#reset");

p1Score = document.querySelector("#p1Display");
p2Score = document.querySelector("#p2Display");

round = document.querySelector("#playto");

let winPoint = 3;

round.addEventListener("change", () =>{
    winPoint = round.value;
    resetGame();
})



btn1.addEventListener("click",function (){
    scoreUp(p1Score,1);
})

btn2.addEventListener("click",function (){
    scoreUp(p2Score,2);
})


function scoreUp(pScore,playernum) {
    const score = parseInt(pScore.innerText)+1;
    if(score < winPoint){
        pScore.innerText = score;
    }else if(score == winPoint){
        pScore.innerText = score;
        pScore.classList.add("has-text-primary");
        if(playernum === 1){
            p2Score.classList.add("has-text-danger");
        }else {
            p1Score.classList.add("has-text-danger");
        }
        btn1.setAttribute("disabled",true);
        btn2.setAttribute("disabled",true);
    }
}

reset.addEventListener("click", resetGame);

function resetGame(){
    p1Score.innerText = "0";
    p2Score.innerText = "0";
    p1Score.classList.remove("has-text-primary","has-text-danger");
    p2Score.classList.remove("has-text-primary","has-text-danger");
    btn1.removeAttribute("disabled");
    btn2.removeAttribute("disabled");
}
