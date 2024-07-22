type AwesomeSauce = {
	isAwesome: boolean
	isSauce: boolean
}

const sauces = new Array<AwesomeSauce>(20).fill({
	isAwesome: true,
	isSauce: true,
})

function isSeventhSauceAwesome() {
	const seventhSauce = sauces[4]

	// REPRODUCTION STEPS:
	// insert a `.` after `seventhSauce`.
	// notice how there are no completions suggested.
	// try manually triggering completions with the cursor placed after the `.`
	// if you type `.is ...` you'll get completions for property names
	seventhSauce

	return false
}
