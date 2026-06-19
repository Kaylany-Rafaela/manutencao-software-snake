console.log("JS carregou");

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

// constantes do jogo
const GRID_SIZE = 16;
const GAME_SPEED = 4;
const TILE_COUNT = 25;
const INITIAL_POSITION = 160;

// tamanho da grade
var grid = GRID_SIZE;
var count = 0;

// cobra
var snake = {
  x: INITIAL_POSITION,
  y: INITIAL_POSITION,

  velocityX: grid,
  velocityY: 0,

  cells: [],

  maxCells: 4
};

// maçã
var apple = {
  x: 320,
  y: 320
};

// gerar número aleatório
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// mover cobra
function moveSnake() {
  snake.x += snake.velocityX;
  snake.y += snake.velocityY;

  if (snake.x < 0) {
    snake.x = canvas.width - grid;
  } else if (snake.x >= canvas.width) {
    snake.x = 0;
  }

  if (snake.y < 0) {
    snake.y = canvas.height - grid;
  } else if (snake.y >= canvas.height) {
    snake.y = 0;
  }

  snake.cells.unshift({
    x: snake.x,
    y: snake.y
  });

  if (snake.cells.length > snake.maxCells) {
    snake.cells.pop();
  }
}

// desenhar maçã
function drawApple() {
  context.fillStyle = 'red';
  context.fillRect(apple.x, apple.y, grid - 1, grid - 1);
}

// resetar jogo
function resetGame() {
  snake.x = INITIAL_POSITION;
  snake.y = INITIAL_POSITION;

  snake.cells = [];
  snake.maxCells = 4;

  snake.velocityX = grid;
  snake.velocityY = 0;

  apple.x = getRandomInt(0, TILE_COUNT) * grid;
  apple.y = getRandomInt(0, TILE_COUNT) * grid;
}

// desenhar cobra
function drawSnake() {
  context.fillStyle = 'green';

  snake.cells.forEach(function(cell, index) {

    context.fillRect(cell.x, cell.y, grid - 1, grid - 1);

    // comer maçã
    if (cell.x === apple.x && cell.y === apple.y) {
      snake.maxCells++;

      apple.x = getRandomInt(0, TILE_COUNT) * grid;
      apple.y = getRandomInt(0, TILE_COUNT) * grid;
    }

    // colisão
    for (var i = index + 1; i < snake.cells.length; i++) {

      if (
        cell.x === snake.cells[i].x &&
        cell.y === snake.cells[i].y
      ) {
        resetGame();
      }
    }
  });
}

function loop() {
  requestAnimationFrame(loop);

  if (++count < GAME_SPEED) {
    return;
  }

  count = 0;

  context.clearRect(0, 0, canvas.width, canvas.height);

  moveSnake();
  drawApple();
  drawSnake();
}

// teclado
document.addEventListener('keydown', function(e) {

  // esquerda
  if (e.which === 37 && snake.velocityX === 0) {
    snake.velocityX = -grid;
    snake.velocityY = 0;
  }

  // cima
  else if (e.which === 38 && snake.velocityY === 0) {
    snake.velocityY = -grid;
    snake.velocityX = 0;
  }

  // direita
  else if (e.which === 39 && snake.velocityX === 0) {
    snake.velocityX = grid;
    snake.velocityY = 0;
  }

  // baixo
  else if (e.which === 40 && snake.velocityY === 0) {
    snake.velocityY = grid;
    snake.velocityX = 0;
  }
});

// iniciar jogo
requestAnimationFrame(loop);