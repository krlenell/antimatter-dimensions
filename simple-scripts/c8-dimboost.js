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
	if(getBoostCount('dimboost') >= 5){
		console.log('stopping watcher...')
		clearInterval(boostInterval)
	}
	const dimBoost = checkActive('dimboost')
	if(!dimBoost){
		console.log('nothing to boost')
		return
	}
	console.log('boosting dim')
	dimBoost.click()
	return
}

/*
some function that gets sacrifices and keeps hitting max
*/


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
	return parseInt(header.textContent.match(/\d+/g)[0], 10)
}

const boostInterval = setInterval(dimBoostOrGalaxy, 5000)
