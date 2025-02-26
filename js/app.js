import productsData from "./data.js";
// import { getUserName } from "./data.js";
// console.log(productsData);
// 1.დაწერეთ ფუნქცია რომელიც პარამეტრად მიიღებს ერთ მთელ რიცხვს და დააბრუნებს true თუ რიცხვი არის 10-ის ჯერადი, ხოლო თუ არაა მაშინ false.
const isMultipleOfTen = (num) => {
	if (num % 10 === 0) {
		return true;
	} else {
		return false;
	}

	return num % 10 === 0 ? true : false;
};
function isMultipleOfTen1(num) {
	return num % 10 === 0;
}

// console.log(isMultipleOfTen(102));
// 2. დაწერეთ ფუნცქია რომელიც პარამეტრად მიიღებს პროდუქტის საწყის ფასს და ფასდაკლების პროცენტს რიცხვების სახით (მაგ: (1000, 10)  >> ფასი 1000, ფასდაკლება 10%). და დააბრუნებს ფასდაკლების შემდეგ გადასახდელ თანხას.
const getDIscountedPrice = (initialPrice, discountPercent) => {
	const discount = discountPercent / 100;
	const discountAmount = initialPrice * discount;
	const finalPrice = initialPrice - discountAmount;
	// Math.ceil(finalPrice)  //10.1 => 11
	// Math.floor(finalPrice) //10.9 => 10

	return Math.round(finalPrice); //10.3 => 10   10.6=>11
};

// console.log(getDIscountedPrice(1121, 14));

// 4.დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს uppercase სტრინგს (მაგ: MY NAME IS JANE) და დააბრუნებს lowerCase სტრინგს (my name is jane)
const toLowerCase = (str) => {
	return str.toLowerCase();
};

// console.log(toLowerCase("MY NAME IS JANE"));

// 3.დაწერეთ ფუნქცია, getCurrencySymbolFromCode რომელიც პარამეტრად მიიღებს ვალუტის კოდს (USD ან EUR ან GEL) სტრინგის სახით და დააბრუნებს ამ კოდის შესაბამის სიმბოლოს ($, €, ₾) თუ ისეთი კოდს გადავცემ რომლის სიმბოლოც არ მაქვს დააბრუნოს შესაბამისი შეტყობინება
const getCurrencySymbolFromCode = (code) => {
	const formatedCode = toLowerCase(code);

	switch (formatedCode) {
		case "usd":
			return "$";
		case "eur":
			return "€";
		case "gel":
			return "₾";
		default:
			return "Unknown Currency";
	}
};

// console.log(getCurrencySymbolFromCode("GEL"));

// 5.დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს რიცხვების მასივს და დააბრუნებს გაფილტრულ მასივს, (.filter) სადაც მხოლოდ ლუწი რიცხვები იქნება
const getEvenNumbers = (numbers) => {
	const filteredNumbers = numbers.filter((num) => num % 2 === 0);

	return filteredNumbers;
};

// console.log(getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// 6*. ლექციაზე დაწერილ რეპოზიტორში მოცემულია ფაილი data.js სადაც გვაქვს პროდუქტების მასივი . გადააკოპირეთ ეს მასივი თქვენთან, ან მთლიანი ფაილი შემოიტანეთ ისეთი ფორმატით როგორც კოდშია და შემდეგ შექმენით ფუნქცია,  რომელიც პარამეტრად მიიღებს ამ მასივს და დააბრუნებს იმ ელემენტს(ობიექტს), რომლის ფასიც (price) არის უმცირესი
const getCheapestProduct = (products) => {
	const sortedProducts = products.sort((a, b) => a.price - b.price);
	return sortedProducts.at(0);
};
// console.log(getCheapestProduct(productsData));

// 7*. დაწერეთ ფუნქცია რომელიც პარამეტრად მიღებს ობიექტების მასივს (ობიექტს უნდა ჰქონდეს title ველი) და მეორე პარამეტრად მიიღებს სტრინგს. ამ მასივში  . find ის დახმარებით მოვძებნოთ ელემენტი რომლის title ველის მნიშვნელობა ემთხვევა ფუნქციის მეორე პარამეტრს და დავაბრუნოთ ნაპოვნი ობიექტი,
const getProductByTitle = (products, title) => {
	return products.find((product) => product.title === title);
};

const products = [
	{
		title: "product1",
		price: 200,
	},
	{
		title: "product2",
		price: 200,
	},
	{
		title: "product3",
		price: 100,
	},
	{
		title: "product3",
		price: 200,
	},
];

// console.log(getProductByTitle(products, "Product1"));

const section = document.getElementById("main-section"); //null
const title = section.querySelector(".section-title");
const paragrapth = document.querySelectorAll("p");

// console.log(section);
// console.log(title);
// console.log(paragrapth);
// console.log(paragrapth[0].innerText);
// paragrapth[0].innerText = "new text";
const aTag = document.createElement("a");
// aTag.innerText = "Click me";
// aTag.textContent = "<span>Click me3</span>";
aTag.innerHTML = "<span>Click me3</span>";
aTag.setAttribute("href", "http://google.com");
// console.log(aTag.getAttribute("href"));

// section.append(aTag);
section.insertAdjacentElement("afterend", aTag);
aTag.addEventListener("click", (event) => {
	event.preventDefault();
	console.log("a tag clicked");
});

// title.remove();

// title.style.backgroundColor = "red";
// title.style.color = "white";
// title.style.textAlign = "center";
// title.style.color = "black";
// title.style.textAlign = "center";
// title.style.backgroundColor = "transparent";

title.classList.add("title");
title.classList.remove("section-title");
title.classList.toggle("title-active");

// console.log(title.getAttribute("class"));

function changeImg(event) {
	event.stopPropagation();
	console.log(event.target);
	const img = document.querySelector(".main-img");
	// img.removeAttribute("src");
	img.setAttribute(
		"src",
		"https://fastly.picsum.photos/id/156/200/300.jpg?hmac=_jUswTiDxrGuGLgKw8LAVJu8snR4TPMwLrDqrcqpMu0"
	);
}

const button = document.querySelector("button");
// button.addEventListener("click", (event) => {
// 	console.log(event.target);
// 	// title.classList.toggle("title");
// });
button.addEventListener("click", changeImg);

section.addEventListener("click", (event) => {
	section.classList.toggle("section-active");
});

const productsSection = document.querySelector("#products");
function renderProductImages(products) {
	const html = products
		.map((product) => {
			return `<div class="product-wrapper">
          <h4>${product.name}</h4>
          <img src="${product.imageUrl}" alt="">
        </div>
      `;
		})
		.join("");

	// console.log(html);

	productsSection.innerHTML = html;
}

renderProductImages(productsData);

const characters = [
	{
		first_name: "Harry",
		last_name: "Potter",
		house: "Gryffindor",
		image: "http://hp-api.herokuapp.com/images/harry.jpg",
		actor: "Daniel Radcliffe",
	},
	{
		first_name: "Hermione",
		last_name: "Granger",
		house: "Gryffindor",
		image: "http://hp-api.herokuapp.com/images/hermione.jpeg",
		actor: "Emma Watson",
	},
	{
		first_name: "Ron",
		last_name: "Weasley",
		house: "Gryffindor",
		image: "http://hp-api.herokuapp.com/images/ron.jpg",
		actor: "Rupert Grint",
	},
	{
		first_name: "Draco",
		last_name: "Malfoy",
		house: "Slytherin",
		image: "http://hp-api.herokuapp.com/images/draco.jpg",
		actor: "Tom Felton",
	},
];
