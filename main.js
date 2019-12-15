let category = null;
let level = null;
const levelElement = document.getElementsByClassName("level")[0];
const playElement = document.getElementsByClassName("play")[0];


function selectCategory(event) {
    resetLevelDropdown();
    resetPlayButton();

    if (event.value) {
        category = event.value;
        levelElement.disabled = false;
        levelElement.style.opacity = 1;
    }
}

function selectDifficulty(event) {
    resetPlayButton();

    if (event.value) {
        level = event.value;
        if (category && level) {
            let url = `game.html?${category}&${level}`;
            playElement.setAttribute('href', encodeURI(url));
            playElement.style.opacity = 1;
        }
    }
}

function resetLevelDropdown() {
    levelElement.disabled = true;
    levelElement.style.opacity = 0.5;
}

function resetPlayButton() {
    playElement.setAttribute('href', 'javascript:void(0);');
    playElement.style.opacity = 0.5;
}
