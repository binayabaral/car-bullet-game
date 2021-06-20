// BACKGROUND
const background = {
	sourceX: 0,
	sourceY: 0,
	sourceWidth: 187,
	sourceHeight: 270,
	width: 384,
	height: 768,
	X: 0,
	Y: cvs.height - 768,
	dY: 5,

	draw: function () {
		ctx.drawImage(roadImg, this.sourceX, this.sourceY, this.sourceWidth, this.sourceHeight, this.X, this.Y, this.width, this.height);
		ctx.drawImage(roadImg, this.sourceX, this.sourceY, this.sourceWidth, this.sourceHeight, this.X, this.Y - this.height, this.width, this.height);
		ctx.drawImage(roadImg, this.sourceX, this.sourceY, this.sourceWidth, this.sourceHeight, this.X, this.Y - 2 * this.height, this.width, this.height);
	},

	update: function () {
		if (gameState.current === gameState.game) {
			if (this.Y > cvs.height) {
				this.Y = cvs.height - this.height;
			} else {
				this.Y += this.dY;
			}
		}
	},
};
