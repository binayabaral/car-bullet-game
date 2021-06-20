// CONTROLLING CAR
function handleKeyPress(e) {
	const pressedKey = e.key;
	if (gameState.current === gameState.game) {
		if (pressedKey === 'a' || pressedKey === 'A') myCar.position > 0 ? (myCar.position -= 1) : (myCar.position = myCar.position);
		else if (pressedKey === 'd' || pressedKey === 'D') myCar.position < 2 ? (myCar.position += 1) : (myCar.position = myCar.position);
		else if (pressedKey === ' ') {
			if (bullets.length > 0) {
				bullets[0].dy = -10;
			}
		}
	} else {
		if (pressedKey === 'Enter') {
			myCar.position = Math.floor(Math.random() * 3);
			obstacleCars = [];
			bullets = [];
			score > bestScore ? (bestScore = score) : (bestScore = bestScore);
			score = 0;
			background.dY = 5;
			obstacleCars.forEach(car => {
				car.dy = 5;
			});
		}
	}
}
