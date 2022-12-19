let _maxGalaxy = 1
let _maxBoost = 8
let _sacTarget = 5

const checkActive = (buttonType) => {
	const div = document.getElementsByClassName(buttonType)
	if(!div[0]) {
		return false
	}
	const button = div[0].getElementsByTagName('button')[0]
	if(!button){
		return false
	}
	if(button.classList.contains('o-primary-btn--disabled')) return false
	return button
}

const runner = () => {
	sacrificeHandler(_sacTarget)
	crunchHandler()
	const dimBoost = checkActive('dimboost')
	const galaxyBoost = checkActive('galaxy')
	if(!dimBoost && !galaxyBoost){
		return
	} else if (dimBoost && galaxyBoost){
		if(getBoostCount('galaxy') >= _maxGalaxy){
			return
		}
		console.log('galaxy boosting')
		galaxyBoost.click()
		return
	} else if (dimBoost && !galaxyBoost){
		if(getBoostCount('dimboost') >= _maxBoost){
			return
		}
		console.log('dimension boosting')
		dimBoost.click()
		return
	}
}

/*
some function that gets sacrifices and keeps hitting max
*/

const sacrificeHandler = (desiredSac) => {
	const $sacrificeButton = document.getElementsByClassName('modes-container')[0]
		?.getElementsByTagName('button')[1]
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

const crunchHandler = () => {
	const $crunchButton = document.getElementsByClassName('btn-big-crunch')[0]
	if($crunchButton){
		console.log('clicking crunch')
		$crunchButton.click()
	}
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

let boostInterval = setInterval(runner, 100)
