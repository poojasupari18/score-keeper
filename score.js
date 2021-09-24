const  p1buttonClicked = document.getElementById("p1button");
const  p2buttonClicked = document.getElementById("p2button");
const p1Display = document.querySelector('#p1Score');
const p2Display = document.querySelector('#p2Score');
const resetButton  = document.querySelector('#reset');
const chooseWinningScore = document.querySelector('#chooseScore');
const winnerIs = document.querySelector('#winnerName');

let p1Score1 = 0;
let p2Score2 = 0;
let winnigScore = 5
let isGameOver = false;

p1buttonClicked.addEventListener('click',  function() {
    if(!isGameOver)
       p1Score1++;
        if (p1Score1===winnigScore){
            isGameOver=true;
            p1Display.classList.add('winner');
            p2Display.classList.add('looser');
            winnerIs.textContent = "hey Winner is Player 1"

        }
        p1Display.innerText = p1Score1;   
})

p2buttonClicked.addEventListener('click',  function() {
    if(!isGameOver)
       p2Score2++;
        if (p2Score2===winnigScore){
            isGameOver=true;
            p2Display.classList.add('winner');
            p1Display.classList.add('looser');
            winnerIs.textContent = "hey Winner is Player 2"

        }
        p2Display.textContent = p2Score2;   
})



resetButton.addEventListener('click' , reset)

chooseWinningScore.addEventListener('change' , function () {
      winnigScore = parseInt(this.value);
      reset();
})

function reset() {
        p1Score1 = 0;
        p2Score2 = 0;
        isGameOver = false;
        p1Score.innerText = p1Score1;
        p2Score.innerText = p2Score2; 
        winnerIs.textContent = "" 
        p1Display.classList.remove('winner') ; 
        p2Display.classList.remove('winner') ; 
        p1Display.classList.remove('looser') ; 
        p2Display.classList.remove('looser') ; 
}
