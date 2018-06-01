const catPic = document.querySelector('.cat-picture');

const meowsDisplay = document.querySelector('.clicks');
let meowsCount = 0;

function addMeow() {
	meowsCount += 1;
	meowsDisplay.innerHTML = meowsCount;
}

catPic.addEventListener('click', addMeow);
