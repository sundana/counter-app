const hasil = document.getElementById('hasil');
const incrementEl = document.getElementById('increment-btn');
const decrementEl = document.getElementById('decrement-btn');
const resetEl = document.getElementById('reset-btn');
const saveEl = document.getElementById('save-btn');
const log = document.getElementById('log');
const clearEl = document.getElementById('clear-btn');

let countResult = 0;
hasil.textContent = countResult;

incrementEl.addEventListener('click', () => {
	countResult += 1;
	hasil.textContent = countResult;
});

decrementEl.addEventListener('click', () => {
	if (countResult > 0) {
		countResult -= 1;
		hasil.textContent = countResult;
	}
});

resetEl.addEventListener('click', () => {
	countResult = 0;
	hasil.textContent = countResult;
});

saveEl.addEventListener('click', () => {
	const list = document.createElement('li');
	list.textContent = countResult;
	log.appendChild(list);
});

clearEl.addEventListener('click', () => {
	while (log.firstChild) {
		log.removeChild(log.firstChild);
	}
});
