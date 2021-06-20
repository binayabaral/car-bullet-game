window.addEventListener('load', () => {
	loop();
	window.addEventListener('keydown', handleKeyPress);
});

// DRAW
function draw() {
	ctx.fillStyle = '#000';
	ctx.fillRect(0, 0, cvs.width, cvs.height);
	background.draw();
	myCar.draw();
	getReady.draw();
	obstacleCars.forEach(car => {
		car.draw();
	});
	gameRunningState.draw();
	gameOver.draw();
}

// UPDATE
function update() {
	background.update();
	obstacleCars.forEach(car => {
		if (car.y > cvs.height) {
			obstacleCars.shift();
			score++;
		} else car.update();
	});
	bullets.forEach(bullet => {
		bullet.update();
		bullet.draw();
	});
	currentScoreElement.innerText = score;
	bestScoreElement.innerText = score > bestScore ? score : bestScore;
}

// LOOP
function loop() {
	myCar.checkCollision();
	draw();
	update();

	requestAnimationFrame(loop);
}

// GENERATE PLAYER'S CAR
const myCar = new Car(cvs.height - CAR_HEIGHT - PLAYER_CAR_OFFSET);
