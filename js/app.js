// Create variable for where the cat profiles will appear
const catsContainer = document.getElementById('cats-container');

class Cat {
	constructor(name, image) {
		this.name = name;
		this.image = image;
		this.meowsCount = 0;

		// Create Cat Profile Div
		this.catProfile = document.createElement('div');
		this.catProfile.setAttribute('id', this.name);
		this.catProfile.setAttribute('class', 'cat');

		// Add Cat Name header to profile
		this.catName = document.createElement('h2');
		this.catName.setAttribute('class', 'cat-name');
		this.catName.innerHTML = this.name;
		this.catProfile.appendChild(this.catName);

		// Add Cat Meows counter to profile
		this.catMeows = document.createElement('h3');
		this.catClicks = document.createElement('span');
		this.catClicks.setAttribute('class', 'clicks');
		this.catClicks.innerHTML = this.meowsCount;
		this.catMeows.appendChild(this.catClicks);
		this.catMeows.insertAdjacentHTML('beforeend', ' Meows');
		this.catProfile.appendChild(this.catMeows);

		// Add Cat image to profile
		this.catImage = document.createElement('img');
		this.catImage.setAttribute('class', 'cat-picture');
		this.catImage.src = this.image;
		this.catProfile.appendChild(this.catImage);

		// Add Cat Profile to Cats Container in DOM
		catsContainer.appendChild(this.catProfile);
	}

	// Count the cats meows when clicked
	addMeow() {
		this.meowsCount += 1;
		this.catClicks.innerHTML = this.meowsCount;
	};
}

// Create cats and count the clicks on their pictures
const terrance = new Cat('Terrance', 'img/YawningKitten.jpg');
terrance.catImage.addEventListener('click', function() {
		terrance.addMeow();
	}
);

const bisquick = new Cat('Bisquick', 'img/SurprisedCat.jpg');
bisquick.catImage.addEventListener('click', function() {
		bisquick.addMeow();
	}
);
