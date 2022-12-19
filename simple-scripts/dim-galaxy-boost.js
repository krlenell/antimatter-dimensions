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
	const dimBoost = checkActive('dimboost')
	const galaxyBoost = checkActive('galaxy')
	if(!dimBoost && !galaxyBoost){
		console.log('nothing to boost')
		return
	} else if (dimBoost && galaxyBoost){
		console.log('boosting galaxy')
		galaxyBoost.click()
		return
	} else if (dimBoost && !galaxyBoost){
		console.log('boosting dim')
		dimBoost.click()
		return
	}
}

const interval = setInterval(dimBoostOrGalaxy, 5000)
