const p1={
    score:0,
    button:document.querySelector("#player1"),
    display:document.querySelector("#p1Display")
}
const p2={
    score:0,
    button:document.querySelector("#player2"),
    display:document.querySelector("#p2Display")
}
const rst=document.querySelector("#reset")
const toBeat=document.querySelector("#score")
function updateScore(player,opponent){
    if(player.score<toBeat.value){
        player.score++
        player.display.textContent=player.score
    }
    if(player.score==toBeat.value){
        player.button.disabled=true
        opponent.button.disabled=true
        player.display.classList.add("winner")
        opponent.display.classList.add("loser")
        
    }
}
p1.button.addEventListener('click',function(){
    updateScore(p1,p2)
})
toBeat.addEventListener('change',reset)
p2.button.addEventListener('click',function(){
    updateScore(p2,p1)
})
rst.addEventListener('click',function(){
    reset()
})

function reset(){
    p1.score=0
    p2.score=0
    p1.display.textContent=0
    p2.display.textContent=0
    p1.button.disabled=false
    p2.button.disabled=false
    p1.display.classList.remove("loser","winner")
    p2.display.classList.remove("loser","winner")
}