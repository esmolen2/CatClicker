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

// Cats object where we can add cats info that will be used in the loop below to create cats
const catsInfo = {
	'Terrance': {
		'name': 'Terrance',
		'image': 'img/YawningKitten.jpg'
	},

	'Bisquick': {
		'name': 'Bisquick',
		'image': 'img/SurprisedCat.jpg'
	},

	'Georgie': {
		'name': 'Georgie',
		'image': 'img/CuriousCat.jpeg'
	},

	'Raul': {
		'name': 'Raul',
		'image': 'img/FeistyCat.jpg'
	},

	'Bernard': {
		'name': 'Bernard',
		'image': 'img/SleepyCat.jpeg'
	}
};

// Function used to parse the value of a cat property in the catsInfo object using a string
function getNestedValue(obj, key) {
    return key.split(".").reduce(function(result, key) {
       return result[key]
    }, obj);
}

// Loop through the catsInfo object and instantiate the cats and add event listeners to each
for (var cat in catsInfo) {
	if (catsInfo.hasOwnProperty(cat)) {
		const nameProp = cat + '.name';
		const catName = getNestedValue(catsInfo, nameProp);
		const imageProp = cat + '.image';
		const catImage = getNestedValue(catsInfo, imageProp);

		const newCat = new Cat(catName, catImage);
		newCat.catImage.addEventListener('click', function() {
			newCat.addMeow();
		});
	}
}
