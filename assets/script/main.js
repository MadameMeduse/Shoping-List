const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');
const item = list.querySelectorAll('li');
//array to hold out state
//state to tablice elementow razem z danymi o tych elementach (skonczone, zaznaczone itp)

let items = [];

function handleSubmit(e) {
	e.preventDefault();
	const name = e.currentTarget.item.value; //item pozwala wejsc do inputa bo aktualnie jestesmy w formularzu
	//if input is empty dont display
	if (!name) return false;

	const item = {
		name,
		id: Date.now(), //tworzy unikatowy id dla elementu o ile nie tworzymy nowych elementow czesniej niz jedna milisekunda
		complete: false
	};
	//push the items into state
	items.push(item);
	console.log(`there are now ${items.length} items in your state`);
	//clear the form
	e.target.reset();

	//fire of a custom event that tells anyone who cares about state change
	list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function displayItems() {
	const html = items
		.map(
			(item) => `<li class="shopping-item">
            <input 
            value = ${item.id} 
            type = 'checkbox'
            ${item.complete && 'checked'}> 
            <span class="itemName">${item.name}</span>
            <button aria-label="Remove ${item.name}"
            value="${item.id}"
            >&times</button>
    </li>` //&& jesli po lewej sronie && jest prawda to wtedy wykonuje prawą stonę
		)
		.join('');
	list.innerHTML = html;
}

function mirrorToLocalStorage() {
	console.info('items were locally storage');
	localStorage.setItem('items', JSON.stringify(items)); //local storage oblsuguje tylko stringi wiec trzeba zamienic object na string za pomocą JSON
}

function restoreFromLocalStorage() {
	console.info('get from storage');
	const lsItems = JSON.parse(localStorage.getItem('items')); // 'JSON.parse'zamienianie spowrotem string w object
	if (lsItems.length) {
		items.push(...lsItems);
		list.dispatchEvent(new CustomEvent('itemsUpdated'));
	}
}

function deleteItems(id) {
	console.log('item was removed', id);
	items = items.filter((item) => item.id !== id);
	console.log(items);
	list.dispatchEvent(new CustomEvent('itemsUpdated'));
}
function markAsComplete(id) {
	console.log('item was checked', id);
	const itemRef = items.find((item) => item.id === id);
	itemRef.complete = !itemRef.complete;
	list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

shoppingForm.addEventListener('submit', handleSubmit);
list.addEventListener('itemsUpdated', displayItems);
list.addEventListener('itemsUpdated', mirrorToLocalStorage);
//event delegation - we listened on the click of the list <ul> but then delegete the click over to the button if that is what was clicked
list.addEventListener('click', function(e) {
	const id = parseInt(e.target.value);
	if (e.target.matches('button')) {
		deleteItems(id); //zamienia value na number
	}
	if (e.target.matches('input[type="checkbox"]')) {
		markAsComplete(id);
	}
});

restoreFromLocalStorage();
