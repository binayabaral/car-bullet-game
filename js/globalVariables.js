// SELECT CANVAS
const cvs = document.querySelector('canvas');
const ctx = cvs.getContext('2d');

// LOAD ROAD IMAGE
const roadImg = new Image();
roadImg.src = 'images/road1.jpg';

// LOAD CAR IMAGE
const carImg = new Image();
carImg.src = 'images/car1.png';

// LOAD OBSTACLE CAR IMAGE
const obstacleImg = new Image();
obstacleImg.src = 'images/car2.png';

// LOAD BULLET IMAGE
const bulletImg = new Image();
bulletImg.src = 'images/bullet.png';

// CAR VARIABLES
const CAR_HEIGHT = 160;
const CAR_WIDTH = 80;
const PLAYER_CAR_OFFSET = 0;

// BULLET VARIABLES
const BULLET_HEIGHT = 45;
const BULLET_WIDTH = 15;

// ROAD VARIABLES
const ROAD_X_OFFSET = 26;
const ROAD_LANE_WIDTH = 110;

// centering car in lane
const CAR_POSITION_IN_LANE_FROM_LEFT = (ROAD_LANE_WIDTH - CAR_WIDTH) / 2;

// GAME STATE
const gameState = {
	current: 0,
	getReady: 0,
	game: 1,
	over: 2,
};

// PLAYER SCORE
let score = 0;
const scoreFromStorage = localStorage.getItem('bestScore');
let bestScore = scoreFromStorage ? scoreFromStorage : 0;

// OBSTACLES
let obstacleCars = [];

// BULLETS
let bullets = [];

// SCORE ELEMENTS
const currentScoreElement = document.querySelector('#your-score');
const bestScoreElement = document.querySelector('#best-score');

// GAME CONTROL SPEEDS
const OBSTACLE_GENERATION_SPEED = 1500;
const GAME_SPEED_INCREMENT_FACTOR = 0.3;
const BULLET_GENERATION_TIME = 5000;
