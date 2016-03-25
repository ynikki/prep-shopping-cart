window.onload = function(){

var shoppingCartList = [
  { "name": "Lusicious Jello Mix", "description": ["Very Elegant", "Trending item", "Come in Purple"], "price": 80.65 },
  { "name": "Tarnished Standing Desk", "description": ["Modular", "Works for both Tall and Loud People", "Smells like Productivity"], "price": 1654.99},
  { "name": "Hand-made Hand Grenades", "description": ["Such gift!", "Much boom!", "Very safe for kids"], "price": 10.44},
  { "name": "Pan-fried Cookie Dough", "description": ["Chocolate", "Family-size", "Hot Mess"], "price": 16.99 },
  { "name": "Fancy Dress Hanger", "description": ["Keep organized", "On Sale"], "price": 67.32 },
  { "name": "Snarky Britsh Mustache 3-Pack", "description": ["Sharing is caring!", "Hugs not drugs", "As seen on 'So You Think You Can Dance - Nigeria!'"], "price": 1.99 },
];

//console.log(shoppingCartList);

function cartList(lists) {
	for(var i=0; i<lists.length; i++){
		console.log(lists[i]);
		console.log(lists[i].name);
		console.log(lists[i].description);
		console.log(lists[i].price);

		var mainContainer = document.getElementById('cartLists');
		mainContainer = document.createElement('div');
		mainContainer.id='main';
		cartLists.appendChild(mainContainer);

		var nameElement = document.createElement('div');
		nameElement.id='name';
		nameElement.innerHTML = lists[i].name;
		mainContainer.appendChild(nameElement);

		var descripElement = document.createElement('div');
		descripElement.id='description';
		descripElement.innerHTML = lists[i].description;
		nameElement.appendChild(descripElement);

		var priceElement = document.createElement('div');
		priceElement.id='price';
		priceElement.innerHTML = lists[i].price;
		nameElement.appendChild(priceElement);

	}
	return lists;
}

cartList(shoppingCartList);


function updateSubTotal(lists){
	var subtotal = 0;
	for (var j=0; j<lists.length; j++){
		subtotal += lists[j].price;

		var bottomContainer = document.getElementById('cartLists');
		bottomContainer = document.createElement('div');
		bottomContainer.id='bottmon';
		cartLists.appendChild(bottomContainer);

		var subElement = document.createElement('div');
		subElement.id='subtotal';
		subElement.innerHTML = subtotal;
		bottomContainer.appendChild(subElement);
	}
	console.log(subtotal);
}

updateSubTotal(shoppingCartList);

};
