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