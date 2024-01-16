const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
const fruits = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry',
'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa',
'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 
'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon',
'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine',
'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince',
'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind',
'Yuzu'];

function search(str) {
	//this event listener will listen for the key last released by the user and run searchHandler
     input.addEventListener("keyup", searchHandler)

	return results;
}

function searchHandler(e) {
	//This function is triggered on every keyup event in the search bar. Its main goal is to filter the list
	// of fruits based on the user's input and then display the relevant suggestions.

	const inputText = input.value;
	const lowerCaseInput = inputText.toLowerCase();
	let results = [];
	for (let fruit of fruits){
		if (fruit.toLowerCase().includes(lowerCaseInput)) {
			 results.push(fruit);
			}
	}
     return showSuggestions(results,lowerCaseInput);
		
} 

function showSuggestions(results, inputVal) {
	//This function takes the filtered results and the current input value, then updates the UI to show these suggestions in a dropdown.
  suggestions.innerHTML = ""; 
  
  for(let fruit of results){
	let listItem = document.createElement('li');
	listItem.textContent = fruit;
	listItem.addEventListener("mouseover", (e) => {
		e.target.style.color = "white";

	})
	
	suggestions.appendChild(listItem);
  }
  
}

function useSuggestion(e) {
	//This function is called when a suggestion in the dropdown is clicked. It should update the search bar with the clicked suggestion.
	const clickedFruit = e.target.textContent;
	input.value = clickedFruit;
	suggestions.innerHTML = '';
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);