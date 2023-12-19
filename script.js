const fruit = ['Apple', 'Apricot', 'Avocado', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

const input = document.querySelector('#fruit-input');
const suggestions = document.querySelector('.suggestions');

window.addEventListener('DOMContentLoaded', searchHandler);
input.addEventListener('input', search);
suggestions.addEventListener('click', useSuggestion);
suggestions.addEventListener('input', useSuggestion);

function search(e) {
	const inputValue = e.target.value.toLowerCase();
	const results = fruit.filter(item => item.toLowerCase().includes(inputValue));

	let temp = results.length > 0 
		? `<ul class="list-items">${generateListItems(results)}</ul>`
		: `<div class="no-item">Fruit not found :(</div>`;
	suggestions.innerHTML = temp;
	suggestions.style.display = inputValue.length > 0 ? 'block' : 'none';
}

function searchHandler() {
	suggestions.innerHTML = `<ul class="list-items">${generateListItems(fruit)}</ul>`;
	suggestions.style.display = 'none';
}

function generateListItems(items) {
	return items.map(item => `<li class="list-item"><a href= "#">${item}</a></li>`).join('');
}

function useSuggestion(e) {
	if( e.target.classList.contains('list-item')) {
		input.value = e.target.textContent;
		suggestions.style.display = 'none';
	 }
}
