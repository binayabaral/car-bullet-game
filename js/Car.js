class Car {
	constructor(yPos = -CAR_HEIGHT) {
		this.position = Math.floor(Math.random() * 3);
		this.y = yPos;
		this.width = CAR_WIDTH;
		this.height = CAR_HEIGHT;
		this.x = ROAD_X_OFFSET + this.position * ROAD_LANE_WIDTH + CAR_POSITION_IN_LANE_FROM_LEFT;
		this.image = this.y === -CAR_HEIGHT ? obstacleImg : carImg;
		this.dy = 5;
	}

	checkCollision() {
		obstacleCars.forEach(car => {
			if (car.position === this.position && car.y + CAR_HEIGHT >= this.y) {
				gameState.current = gameState.over;
				if (score > bestScore) localStorage.setItem('bestScore', score);
			}
		});
	}

	draw() {
		if (this.x < ROAD_X_OFFSET + this.position * ROAD_LANE_WIDTH + CAR_POSITION_IN_LANE_FROM_LEFT) this.x += 10;
		else if (this.x > ROAD_X_OFFSET + this.position * ROAD_LANE_WIDTH + CAR_POSITION_IN_LANE_FROM_LEFT) this.x -= 10;
		ctx.drawImage(this.image, 0, 0, CAR_WIDTH, CAR_HEIGHT, this.x, this.y, CAR_WIDTH, CAR_HEIGHT);
	}

	update() {
		if (gameState.current === gameState.game) {
			this.y += this.dy;
		}
	}
}
