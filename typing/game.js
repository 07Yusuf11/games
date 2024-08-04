class Game {
	constructor(select, hit, miss) {
		this.select = select;
		this.map = document.querySelector(select);
		this.hit = document.querySelector(hit);
		this.miss = document.querySelector(miss);
		this.charlist = []

		this.hitCount = 0;
		this.missCount = 0;
	}

	newChar(c) {
		const char = new Charater(this.select, c);
		this.charlist.push(char);
	}

	start() {
		const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
		for (let letter of letters) {
			this.newChar(letter);
		}

		setInterval(() => {
			this.charlist.forEach(
				c => {
					if (c.isReach() && !c.hit) {
						c.div.style.color = "red";
						setTimeout(() => {
							c.updateY();
							c.updateX();
							c.div.style.color = "white";
						}, 10);

						this.missCount++;
						return;
					} else if (c.v < 0 && c.y <= c.y0) {
						c.div.style.color = "white";
						c.updateX();
						c.updateY();
						c.v = -c.v;
					}

					c.move();

					this.updateBoard();
				}
			);
			// this.newChar();
		}, 20);
	}

	updateBoard() {
		this.hit.innerText = this.hitCount;
		this.miss.innerText = this.missCount;
	}

	check(keyCode) {
		/* console.log(String.fromCharCode(keyCode).toUpperCase()); */
		const k = String.fromCharCode(keyCode).toUpperCase();
		// console.log();
		const len = this.charlist.length;

		for (let i = 0; i < len; i++) {
			const c = this.charlist[i];
			if (c.char === k) {
				this.hitCount++;
				c.div.style.color = "green";
				c.v = -c.v;
			}
		}
	}
}