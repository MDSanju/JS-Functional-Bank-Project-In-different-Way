function setPlayerStyles(player) {
    player.style.border = '2px solid gray';
    player.style.borderRadius = '15px';
    player.style.marginBottom = '25px';
    player.style.paddingLeft = '30px';
    player.style.paddingRight = '15px';
}

const players = document.getElementsByClassName('player');
for (const player of players) {
    setPlayerStyles(player);
    // I used Event.bubbles below the file in place of these codes

    // player.addEventListener('click', function() {
    //     player.style.backgroundColor = '#EEEEEE';
    // });
}

function addPlayer() {
    const playersContainer = document.getElementById('players');
    const player = document.createElement('div');
    player.classList.add('player');
    player.innerHTML = `
    <h4 class="player-name">New Player</h4>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis quidem, eum in quis deserunt magnam illum sit facere aliquam, iusto ad. Modi totam voluptates consectetur, cupiditate ratione optio labore molestias!</p>
    `
    playersContainer.appendChild(player);
    setPlayerStyles(player);
    // I used Event.bubbles below the file in place of these codes

    // player.addEventListener('click', function() {
    //     player.style.backgroundColor = '#EEEEEE';
    // });
}

// Event.bubbles
document.getElementById('players').addEventListener('click', function(event) {
    if (event.target.tagName.toLowerCase() == 'div') {
        event.target.style.backgroundColor = '#EEEEEE';
    } else {
        event.target.parentNode.style.backgroundColor = '#EEEEEE';
    }
});