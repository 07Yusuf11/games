class Game {
    constructor(select, scoreElem) {
        this.map = document.querySelector(select);
        this.board = document.querySelector(scoreElem);
        this.startBtn = document.querySelector("#start");
        this.food = new Food(select);
        this.snake = new Snake(select);
        this.timer = 0;
        this.score = 0;
        // this.start();
    }

    start() {
        this.timer = setInterval(() => {
            this.snake.move();

            if (this.snake.isEat(this.food.x, this.food.y)) {
                this.score++;
                this.board.innerText = this.score;
                this.snake.createHead();
                this.food.foodPos();
            }

            if (this.snake.isDead()) {
                clearInterval(this.timer);
                this.gameover();
            }
        }, 500);
    }

    pause() {
        clearInterval(this.timer);
    }

    restart() {
        window.location.reload();
    }

    change(type) {
        this.snake.direction = type;
    }

    gameover() {
        alert("GAME OVER :)");
        this.startBtn.disabled = true;
    }
}