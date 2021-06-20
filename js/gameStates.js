// CONTROL THE GAME
document.addEventListener('keydown', function (e) {
	switch (gameState.current) {
		case gameState.getReady:
			gameState.current = gameState.game;
			break;
		case gameState.game:
			break;
		case gameState.over:
			gameState.current = gameState.getReady;
			break;
	}
});

// GET READY
const getReady = {
	draw: function () {
		if (gameState.current === gameState.getReady) {
			ctx.font = '50px Arial';
			ctx.fillStyle = '#fff';
			ctx.fillText('Get Ready', 70, 100);
			ctx.font = '30px Arial';
			ctx.fillText('Press any key to start', 50, 240);
			ctx.font = '25px Arial';
			ctx.fillText('Controls: A - Left; D - Right', 42, 390);
			ctx.fillText('Spacebar - Shoot Bullet', 62, 550);
		}
	},
};

// GAME OVER
const gameOver = {
	draw: function () {
		if (gameState.current === gameState.over) {
			ctx.font = '50px Arial';
			ctx.fillStyle = '#fff';
			ctx.strokeStyle = '#000';
			ctx.fillText('Game Over', 70, 150);
			ctx.strokeText('Game Over', 70, 150);
			ctx.font = '30px Arial';
			ctx.fillText('Press Enter to reset', 50, 240);
			ctx.strokeText('Press Enter to reset', 50, 240);
		}
	},
};

// GAME STATE
const gameRunningState = {
	draw: function () {
		if (gameState.current === gameState.game || gameState.current === gameState.over) {
			ctx.font = '30px Arial';
			ctx.fillStyle = '#fff';
			ctx.strokeStyle = '#000';
			ctx.fillText(`Bullets: ${bullets.length}`, 250, 50);
			ctx.strokeText(`Bullets: ${bullets.length}`, 250, 50);
		}
	},
};
