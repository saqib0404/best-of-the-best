// Player Selection
let playerCount = 0;
function selectPlayer(player) {
    const playerName = player.parentNode.children[0].innerText;

    const playerList = document.getElementById("player-list");
    const totalPlayers = playerList.children.length;
    // console.log(totalPlayers)
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
