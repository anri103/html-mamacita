let menuButton = document.querySelector(".header__link--magazine");
let menu = document.querySelector(".header__tabs-menu-wrap");
let tabButtons = document.querySelectorAll(".header__tab-title");
let tabArrows = document.querySelectorAll(".header__tab-title-img");
let tabImg = document.querySelector(".header__row-img");

function toggleMenu(event) {
	menu.classList.toggle("none");
	document.body.classList.toggle("hidden");
	event.preventDefault();
}

function tabToggle(event) {
	if (event.currentTarget.nextElementSibling.classList.contains("none")) {
		tabButtons.forEach((item) => {
			item.nextElementSibling.classList.add("none");
		});
		tabArrows.forEach((item) => {
			item.classList.remove("header__tab-title-img--active");
		});
		event.currentTarget.nextElementSibling.classList.remove("none");
		event.currentTarget.lastElementChild.classList.add("header__tab-title-img--active");
	}	else {
		tabButtons.forEach((item) => {
			item.nextElementSibling.classList.add("none");
		});
		tabArrows.forEach((item) => {
			item.classList.remove("header__tab-title-img--active");
		});
		event.currentTarget.nextElementSibling.classList.add("none");
		event.currentTarget.lastElementChild.classList.remove("header__tab-title-img--active");
	}
	if (event.currentTarget.classList.contains("header__tab-title--one")) {
		tabImg.src = "assets/img/menu-cat-1.jpg";
	}	else if (event.currentTarget.classList.contains("header__tab-title--two")) {
		tabImg.src = "assets/img/menu-cat-2.jpg";
	}
	event.preventDefault();
}

menuButton.addEventListener("click", toggleMenu);
tabButtons.forEach((item) => {
	item.addEventListener("click", tabToggle);
});