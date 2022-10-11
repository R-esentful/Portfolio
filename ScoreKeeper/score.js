const p1b = document.querySelector('#p1b')
const p1 = document.querySelector("#P1")

const p2b = document.querySelector('#p2b')
const p2 = document.querySelector("#P2")

const rb = document.querySelector('#rb')

const selOption = document.querySelector("#playto")


let scoreP1 = 0;
let scoreP2 = 0;
let winningScore =0;
let isGameOver = false;

p1b.addEventListener('click',(e)=>{
    if(!isGameOver){
        scoreP1++;
        if (scoreP1 === winningScore){
            alert("P1 WIN");
            p1.classList.add('win');
            p2.classList.add('lose');
            isGameOver = true;
        }
         p1.textContent = scoreP1;
    } 
})
p2b.addEventListener('click',(e)=>{
    if(!isGameOver){
        scoreP2++;
        if (scoreP2 === winningScore){
            alert("P2 WIN");
            p2.classList.add('win');
            p1.classList.add('lose');
            isGameOver = true;
        }
        p2.textContent = scoreP2;
    } 
})
rb.addEventListener('click',res)

selOption.addEventListener("change",function(){
    winningScore = parseInt(this.value)
    res()
})
function res(){
    isGameOver = false;
    scoreP1 = 0;
    scoreP2 = 0;
    p1.textContent = 0;
    p2.textContent = 0;
    p1.classList.remove('win','lose')
    p2.classList.remove('win','lose')
}