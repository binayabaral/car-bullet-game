// GENERATE OBSTACLES
let randomObstacleGeneration = setInterval(() => {
	if (gameState.current === gameState.game) {
		const newObstacle = new Car();
		newObstacle.dy = background.dY;
		obstacleCars.push(newObstacle);
	}
}, OBSTACLE_GENERATION_SPEED);

// INCREASE SPEED OVERTIME
let increaseSpeed = setInterval(() => {
	if (gameState.current === gameState.game) {
		obstacleCars.forEach(car => {
			car.dy = background.dY;
		});
		background.dY += GAME_SPEED_INCREMENT_FACTOR;
	}
}, 1000);

// GENERATE BULLETS OVER TIME
let generateBullets = setInterval(() => {
	if (gameState.current === gameState.game) {
		const newBullet = new Bullet();
		bullets.push(newBullet);
	}
}, BULLET_GENERATION_TIME);
