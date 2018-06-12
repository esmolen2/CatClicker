// MODEL
const model = {
	currentCat: null,

	adminDisplay: false,

	catsInfo: [
		{
			'name': 'Terrance',
			'image': 'img/YawningKitten.jpg',
			'meowsCount': 0
		},

		{
			'name': 'Bisquick',
			'image': 'img/SurprisedCat.jpg',
			'meowsCount': 0
		},

		{
			'name': 'Georgie',
			'image': 'img/CuriousCat.jpeg',
			'meowsCount': 0
		},

		{
			'name': 'Raul',
			'image': 'img/FeistyCat.jpg',
			'meowsCount': 0
		},

		{
			'name': 'Bernard',
			'image': 'img/SleepyCat.jpeg',
			'meowsCount': 0
		}
	]
};

// CONTROLLER
const controller = {

	init: function() {
		model.currentCat = model.catsInfo[0];

		catProfileView.init();
		catListView.init();
		adminView.init();
	},

	getCurrentCat: function() {
		return model.currentCat;
	},

	setCurrentCat: function(cat) {
		model.currentCat = cat;
	},

	increaseMeowsCount: function() {
		model.currentCat.meowsCount += 1;
		catProfileView.render();
	},

	getCatsList: function() {
		return model.catsInfo;
	},

	getAdminDisplay: function() {
		return model.adminDisplay;
	},

	showAdminDisplay: function() {
		model.adminDisplay = true;
		adminView.render();
	},

	hideAdminDisplay: function() {
		model.adminDisplay = false;
		adminView.render();
	}
};

// VIEW
const catProfileView = {

	init: function() {
		this.catsContainer = document.getElementById('cats-container');

		// Create cat profile container
		this.catProfile = document.createElement('div');
		this.catProfile.setAttribute('class', 'cat');

		// Create cat name header
		this.catName = document.createElement('h2');
		this.catName.setAttribute('class', 'cat-name');
		this.catProfile.appendChild(this.catName);

		// Create cat meows counter
		this.catMeows = document.createElement('h3');
		this.catClicks = document.createElement('span');
		this.catClicks.setAttribute('class', 'clicks');
		this.catMeows.appendChild(this.catClicks);
		this.catMeows.insertAdjacentHTML('beforeend', ' Meows');
		this.catProfile.appendChild(this.catMeows);

		// Create cat image container
		this.catImage = document.createElement('img');
		this.catImage.setAttribute('class', 'cat-picture');
		this.catProfile.appendChild(this.catImage);

		// Add Cat Profile to Cats Container in DOM
		this.catsContainer.appendChild(this.catProfile);

		// Add event listener to count meows
		this.catImage.addEventListener('click', function() {
			controller.increaseMeowsCount();
		});

		this.render();
	},

	render: function() {
		// Grab current cat info
		this.currentCat = controller.getCurrentCat();

		// Set cat profile id to current cat name
		this.catProfile.setAttribute('id', this.currentCat.name);

		// Set cat name header to current cat name
		this.catName.innerHTML = this.currentCat.name;

		// Set cat meows to current cat meows count
		this.catClicks.innerHTML = this.currentCat.meowsCount;

		// Set cat image to current cat image
		this.catImage.src = this.currentCat.image;
	}
}

const catListView = {

	init: function() {
		this.catListDisplay = document.getElementById('cats-list').querySelector('ul');

		this.render();
	},

	render: function() {
		this.catListDisplay.innerHTML = '';

		const catsList = controller.getCatsList();

		catsList.forEach(function(cat) {
			const catListItem = document.createElement('li');
			catListItem.innerHTML = cat.name;
			catListView.catListDisplay.appendChild(catListItem);

			catListItem.addEventListener('click', (function(catCopy) {
				return function() {
					controller.setCurrentCat(catCopy);
					catProfileView.render();
				};
			})(cat));
		});

	}
}

const adminView = {

	init: function() {
		// Grab all the elements in the admin panel
		this.adminButton = document.querySelector('#admin-mode');
		this.adminForm = document.querySelector('#admin-form');
		this.nameInput = document.querySelector('#name-input');
		this.urlInput = document.querySelector('#url-input');
		this.meowsInput = document.querySelector('#meows-input');
		this.saveButton = document.querySelector('#save-button');
		this.cancelButton = document.querySelector('#cancel-button');

		// Show admin panel when admin button is clicked
		this.adminButton.addEventListener('click', function() {
			controller.showAdminDisplay();
		});

		// Hide admin panel when cancel button is clicked
		this.cancelButton.addEventListener('click', function() {
			controller.hideAdminDisplay();
		});

		this.render();
	},

	render: function() {
		this.adminDisplay = controller.getAdminDisplay();

		// If adminDisplay in model is set to false, clear form inputs and hide the admin panel. If it is set to true, show the panel
		if(!this.adminDisplay) {
			this.nameInput.value = '';
			this.urlInput.value = '';
			this.meowsInput.value = '';
			this.adminForm.classList.add('hide-admin');

		} else {
			this.adminForm.classList.remove('hide-admin');
		}
	}
}

controller.init();

// const saveButton = document.querySelector('#save-button');
// const nameInput = document.querySelector('#name-input');
// const urlInput = document.querySelector('#url-input');
// const meowsInput = document.querySelector('#meows-input');
//
// function adminSave(e) {
// 	e.preventDefault();
// 	console.log(nameInput.value + urlInput.value + meowsInput.value);
// }
//
// saveButton.addEventListener('click', function(event) {
// 	adminSave(event);
// });
