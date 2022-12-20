const checkActive = (buttonType) => {
	const div = document.getElementsByClassName(buttonType)
	if(!div[0]) {
		console.log(`could not find ${buttonType} div`)
		return false
	}
	const button = div[0].getElementsByTagName('button')[0]
	if(!button){
		console.log(`could not find ${buttonType} button`)
		return false
	}
	if(button.classList.contains('o-primary-btn--disabled')) return false
	return button
}

const dimBoostOrGalaxy = () => {
	sacrificeHandler(10)
	const dimBoost = checkActive('dimboost')
	if(!dimBoost){
		return
	}
	console.log('boosting dim')
	dimBoost.click()
	return
}

/*
some function that gets sacrifices and keeps hitting max
*/
const sacrificeHandler = (desiredSac) => {
	const $sacrificeButton = document.getElementsByClassName('modes-container')[0]
		.getElementsByTagName('button')[1]
	if(!$sacrificeButton){
		console.log('sac not found')
		return
	}
	const sacrificeValue = parseNumberFromText($sacrificeButton.firstChild.textContent)
	if(sacrificeValue >= desiredSac){
		console.log(`sacrificing ${sacrificeValue}`)
		$sacrificeButton.click()
		return
	}
	return
}


const parseNumberFromText = (str) => {
	const num = str.match(/\d+/g)[0]
	return parseInt(num, 10)
}


const getBoostCount = (type) => {
	const div = document.getElementsByClassName(type)
	if(!div[0]){
		console.log(`could not find ${type} div`)
		return NaN
	}
	const header = div[0].getElementsByTagName('h4')[0]
	if(!header){
		console.log(`could not find ${type} div`)
		return NaN
	}
	return parseNumberFromText(header.textContent)
}

let boostInterval = setInterval(dimBoostOrGalaxy, 100)
