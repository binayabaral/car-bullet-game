class Bullet {
	constructor() {
		this.position = myCar.position;
		this.y = myCar.y + CAR_HEIGHT / 2 - BULLET_HEIGHT / 2;
		this.width = BULLET_WIDTH;
		this.height = BULLET_HEIGHT;
		this.x = ROAD_X_OFFSET + this.position * ROAD_LANE_WIDTH + CAR_POSITION_IN_LANE_FROM_LEFT + CAR_WIDTH / 2 - BULLET_WIDTH / 2;
		this.image = bulletImg;
		this.dy = 0;
	}

	checkCollision() {
		obstacleCars.forEach(car => {
			if (car.position === this.position && car.y + CAR_HEIGHT >= this.y) {
				obstacleCars = obstacleCars.filter(obstacleCar => obstacleCar !== car);
				bullets.shift();
			}
		});
	}

	draw() {
		ctx.drawImage(this.image, 0, 0, 34, 114, this.x, this.y, BULLET_WIDTH, BULLET_HEIGHT);
	}

	update() {
		if (gameState.current === gameState.game) {
			this.checkCollision();
			if (this.dy === 0) {
				this.position = myCar.position;
				if (this.x < ROAD_X_OFFSET + this.position * ROAD_LANE_WIDTH + CAR_POSITION_IN_LANE_FROM_LEFT + CAR_WIDTH / 2 - BULLET_WIDTH / 2) this.x += 10;
				else if (this.x > ROAD_X_OFFSET + this.position * ROAD_LANE_WIDTH + CAR_POSITION_IN_LANE_FROM_LEFT + CAR_WIDTH / 2 - BULLET_WIDTH / 2) this.x -= 10;
			}
			if (this.y < 0) {
				bullets.shift();
			}
			this.y += this.dy;
		}
	}
}
