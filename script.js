const wrapper = document.querySelector('#wrapper');
let container = document.querySelector('.container');
let size = 16;


function randomRGB() {
	let r = Math.floor(Math.random() * 256)
	let g = Math.floor(Math.random() * 256)
	let b = Math.floor(Math.random() * 256)
	return 'rgb(' + r + ',' + g + ',' + b + ')';
}

function hoverChange(e) {
	if (e.target.style.backgroundColor != 'white') {
		e.target.style.backgroundColor = randomRGB()
	} //else e.target.style.backgroundColor = 'white';
}

function updateSize() {
	size = prompt('Current size:' + size);
	if (size < 100) {
		container.innerHTML = '';
		container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
		container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
		setup()
	} else alert('Please enter a size less than 100');
}

function setup() {
	for (let i = 0; i < size * size; i++) {
		let box = document.createElement('div');
		box.id = 'box';
		container.appendChild(box);
		box.addEventListener('mouseover', e => {
			hoverChange(e);
		})
	}
}



setup()
const btn = document.querySelector('#btn');
btn.addEventListener('click', () => updateSize());