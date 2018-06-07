// MODEL
// Cats object where we can add cats info that will be used in the loop below to create cats
const catsInfo = {
	'catOne': {
		'name': 'Terrance',
		'image': 'img/YawningKitten.jpg',
		'meowsCount': 0
	},

	'catTwo': {
		'name': 'Bisquick',
		'image': 'img/SurprisedCat.jpg',
		'meowsCount': 0
	},

	'catThree': {
		'name': 'Georgie',
		'image': 'img/CuriousCat.jpeg',
		'meowsCount': 0
	},

	'catFour': {
		'name': 'Raul',
		'image': 'img/FeistyCat.jpg',
		'meowsCount': 0
	},

	'catFive': {
		'name': 'Bernard',
		'image': 'img/SleepyCat.jpeg',
		'meowsCount': 0
	}
};

// OCTOPUS

function getNestedValue(obj, key) {
	return key.split(".").reduce(function(result, key) {
	   return result[key]
	}, obj);
}

const catListListener = function(item) {
	item.addEventListener('click', function() {
		console.log(item.innerHTML);
		return item.innerHTML;
		// renderCatProfile(item.innerHTML);
	});
};

(function createCatList() {
	const catNameArray = [];

	for (var cat in catsInfo) {
		if (catsInfo.hasOwnProperty(cat)) {
			const nameProp = cat + '.name';
			const catName = getNestedValue(catsInfo, nameProp);
			catNameArray.push(catName);
			};
	}

	renderCatList(catNameArray);
})();

// class Cat {
// 	constructor(name, image) {
// 		this.name = name;
// 		this.image = image;
// 		this.meowsCount = 0;
// 	}
//
// 	// Count the cats meows when clicked
// 	addMeow() {
// 		this.meowsCount += 1;
// 		// this.catClicks.innerHTML = this.meowsCount;
// 	};
//
// 	displayCat() {
// 		this.catProfile.classList.add('show-cat');
// 	}
//
// 	hideCat() {
// 		this.catProfile.classList.remove('show-cat');
// 	}
//
// 	addToCatDisplayArray () {
// 		catDisplay.push(this);
// 	}
//
// 	removeFromCatDisplayArray () {
// 		catDisplay.splice(0, 1);
// 	}
//
// }

// Function used to parse the value of a cat property in the catsInfo object using a string
// function getNestedValue(obj, key) {
//     return key.split(".").reduce(function(result, key) {
//        return result[key]
//     }, obj);
// }

// Loop through the catsInfo object, instantiate the cats and add to list, and add event listeners to profile to count clicks and to list to display cat
// for (var cat in catsInfo) {
// 	if (catsInfo.hasOwnProperty(cat)) {
// 		const nameProp = cat + '.name';
// 		const catName = getNestedValue(catsInfo, nameProp);
// 		const imageProp = cat + '.image';
// 		const catImage = getNestedValue(catsInfo, imageProp);
//
// 		const newCat = new Cat(catName, catImage);
// 		// newCat.catImage.addEventListener('click', function() {
// 		// 	newCat.addMeow();
// 		});
// 		// newCat.catListItem.addEventListener('click', function() {
// 		// 	if (catDisplay < 1) {
// 		// 		newCat.addToCatDisplayArray();
// 		// 		newCat.displayCat();
// 		// 	}	else if (newCat !== catDisplay[0]) {
// 		// 		catDisplay[0].hideCat();
// 		// 		catDisplay[0].removeFromCatDisplayArray();
// 		// 		newCat.addToCatDisplayArray();
// 		// 		newCat.displayCat();
// 		// 	}
// 		// });
// 	}
// }


// VIEW
// Create Cat Profile Div
function renderCatList(list) {
	const catListDisplay = document.getElementById('cats-list').querySelector('ul');

	list.forEach(function(cat) {
		const catListItem = document.createElement('li');
		catListItem.innerHTML = cat;
		catListListener(catListItem);
		catListDisplay.appendChild(catListItem);
	});
};

function renderCatProfile(name) {
	const catProfile = document.createElement('div');
	catProfile.setAttribute('id', name);
	catProfile.setAttribute('class', 'cat');
}

// this.catProfile = document.createElement('div');
// this.catProfile.setAttribute('id', this.name);
// this.catProfile.setAttribute('class', 'cat');
//
// // Add Cat Name header to profile
// this.catName = document.createElement('h2');
// this.catName.setAttribute('class', 'cat-name');
// this.catName.innerHTML = this.name;
// this.catProfile.appendChild(this.catName);
//
// // Add Cat Meows counter to profile
// this.catMeows = document.createElement('h3');
// this.catClicks = document.createElement('span');
// this.catClicks.setAttribute('class', 'clicks');
// this.catClicks.innerHTML = this.meowsCount;
// this.catMeows.appendChild(this.catClicks);
// this.catMeows.insertAdjacentHTML('beforeend', ' Meows');
// this.catProfile.appendChild(this.catMeows);
//
// // Add Cat image to profile
// this.catImage = document.createElement('img');
// this.catImage.setAttribute('class', 'cat-picture');
// this.catImage.src = this.image;
// this.catProfile.appendChild(this.catImage);
//
// // Add Cat Profile to Cats Container in DOM
// catsContainer.appendChild(this.catProfile);
//


// Create variable for where the cat profiles will appear
// const catsContainer = document.getElementById('cats-container');
// const catsList = document.getElementById('cats-list').querySelector('ul');
// const catDisplay = [];
