class Snake {
	constructor(select) {
		this.map = document.querySelector(select);
		this.direction = "right";
		this.snakelist = [];

		/* this.createHead(); */
		this.createSnake();
		this.move();
	}
	createHead() {
		const head = this.snakelist[0];

		const pos = {
			x: 0,
			y: 0
		};
		if (head) {
			/* console.log("有蛇"); */
			switch (this.direction) {
				case "left":
					pos.x = head.offsetLeft - 20;
					pos.y = head.offsetTop
					break;
				case "right":
					pos.x = head.offsetLeft + 20;
					pos.y = head.offsetTop
					break;
				case "top":
					pos.x = head.offsetLeft;
					pos.y = head.offsetTop - 20
					break;
				case "bottom":
					pos.x = head.offsetLeft;
					pos.y = head.offsetTop + 20;
					break;

				default:
					break;
			}

			head.className = "body";
		}
		
		const div = document.createElement("div");
		div.className = "head";
		this.snakelist.unshift(div);
		div.style.left = pos.x + "px";
		div.style.top = pos.y + "px";

		this.map.appendChild(div);
	}

	createSnake() {
		for (let i = 0; i < 4; i++) {
			this.createHead();
		}
	}

	move() {
		 const body = this.snakelist.pop();
		 body.remove();
		 this.createHead();
	}

	isEat(foodx, foody) {
		const head = this.snakelist[0];
		const x = head.offsetLeft;
		const y = head.offsetTop;

		if (x === foodx && y === foody) {
			return true
		}

		return false
	}

	isDead() {
		const head = this.snakelist[0];
		const x = head.offsetLeft;
		const y = head.offsetTop;

		if (x < 0 || y < 0 || x >= this.map.clientWidth || y >= this.map.clientHeight) {
			return true;
		}

		return false;
	}
}