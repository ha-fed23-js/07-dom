const userInput = document.querySelector('#user-input')
const output = document.querySelector('#output')

output.innerText = 'God morgon!'

// input: en förändring i ett input-fält
// change: användaren är färdig med ett input-fält
// keydown: en tangent trycktes ner
userInput.addEventListener('change', event => {
	console.log('Change event', event);
	output.innerText = 'user-input change: ' + event.target.value
})

userInput.addEventListener('keydown', event => {
	console.log('keydown event', event);
})

userInput.addEventListener('input', event => {
	console.log('input event', event);
	output.innerText = 'user-input input: ' + event.target.value
})


// 3a Gör en button som gör ett annat element osynligt, med hjälp av CSS-klasser.Gör en annan button som gör elementet synligt.

// 3b Gör en tredje button som "togglar" elementet. Alltså varannan gång gör elementet synligt och varannan gång gör det osynligt. Men använd en if-sats i stället för classList.toggle.
const showBtn = document.querySelector('#show-btn')
const hideBtn = document.querySelector('#hide-btn')
const toggleBtn = document.querySelector('#toggle-btn')
const showHide = document.querySelector('#show-hide')

let isVisible = false

showBtn.addEventListener('click', () => {
	showHide.classList.remove('hidden')
})

hideBtn.addEventListener('click', () => {
	showHide.classList.add('hidden')
})

// Använd console.log för att kontrollera vad variabler har för värde:
// console.log('toggle button?', toggleBtn);
toggleBtn.addEventListener('click', () => {
	// classList.toggle är en enklare lösning
	// Felsök med console.log:
	// console.log(1);
	if( isVisible ) {
		// console.log(2);
		showHide.classList.add('hidden')
	} else {
		// console.log(3);
		showHide.classList.remove('hidden')
	}
	isVisible = !isVisible
})