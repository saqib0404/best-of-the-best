// Player Selection
let playerCount = 0;
function selectPlayer(player) {
    const playerName = player.parentNode.children[0].innerText;

    const playerList = document.getElementById("player-list");
    const totalPlayers = playerList.children.length;
    if (totalPlayers > 4) {
        alert ('Can Not Add More Than Five Players!!');
        return;
    }
    
    playerCount++;
    const li = document.createElement('li');
    li.innerText = `${playerCount + '. ' + playerName}`
    
    playerList.appendChild(li);
    
    document.getElementById('nubmer-of-selected-players').innerText = playerList.children.length;
    
    player.style.backgroundColor = "gray";
    player.setAttribute('disabled', true);
}


// Geting input value by a function
function getInputValueById(inputId){
    const inputfield = document.getElementById(inputId).value;
    const inputValue = parseFloat(inputfield);
    return inputValue;
}


// Event listner to calculate Button
document.getElementById('calculate-btn').addEventListener('click', function(){
    const perPlayerCost = getInputValueById("per-player-cost");
    document.getElementById('player-expense').innerText = perPlayerCost * playerCount;
    // console.log(playerCount);

})
