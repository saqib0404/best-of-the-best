// Player Selection
let playerCount = 0;
function selectPlayer(player) {
    const playerName = player.parentNode.children[0].innerText;

    const playerList = document.getElementById("player-list");
    const totalPlayers = playerList.children.length;
    if (totalPlayers > 4) {
        alert('Can Not Add More Than Five Players!!');
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
function getInputValueById(inputId) {
    const inputfield = document.getElementById(inputId).value;
    const inputValue = parseFloat(inputfield);
    return inputValue;
}


// Event listner to calculate Button
document.getElementById('calculate-btn').addEventListener('click', function () {
    const perPlayerCost = getInputValueById("per-player-cost");
    if (isNaN(perPlayerCost) || perPlayerCost < 1) {
        alert('Please provide a valid data');
        return;
    }
    document.getElementById('player-expense').innerText = perPlayerCost * playerCount;
})

// Event listner to calculate Total Button
document.getElementById('calculate-total-btn').addEventListener('click', function () {
    const managerCost = getInputValueById("manager-cost");
    const coachCost = getInputValueById("coach-cost")
    const playerExpense = parseFloat(document.getElementById('player-expense').innerText);

    if (isNaN(managerCost) || isNaN(coachCost) || isNaN(playerExpense) || managerCost <= 0 || coachCost <= 0 || playerExpense <= 0 ){
        alert('Please provide a valid data');
        return;
    }
    const totalExpense = managerCost + coachCost + playerExpense;
    document.getElementById('total-expense').innerText = totalExpense;
})