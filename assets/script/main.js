const shoppingForm = document.querySelector('.shoping');
const shoppingList = document.querySelector('.list');

//array to hold out state
//state to tablice elementow razem z danymi o tych elementach (skonczone, zaznaczone itp)

const items = [];

function handleSubmit(e) {
	e.preventDefault();
	console.log('submitted');
}

shoppingForm.addEventListener('submit', handleSubmit);
