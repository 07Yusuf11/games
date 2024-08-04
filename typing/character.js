class Charater {
    constructor(select, c) {
        this.map = document.querySelector(select);
        this.div = document.createElement("div");
        this.div.className = "char";
        this.char = c;
        this.div.innerHTML = this.char;

        this.v = Math.floor(Math.random() * 10 + 5);
        this.x = 0;

        this.updateX();
        // this.y = 0;

        // console.log(this.map.clientWidth, this.map.clientHeight);  

        this.map.appendChild(this.div);
        this.y = this.div.offsetHeight;
        this.y0 = this.div.offsetHeight;
        this.hit = false;
    }

    updateX() {
        this.x = Math.floor(Math.random() * this.map.clientWidth) - 50;
        this.div.style.left = this.x + "px";
    }

    updateY() {
        this.y = this.y0;
        this.div.style.top = this.y + "px";
    }

    getRandomLetter() {
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const randomIndex = Math.floor(Math.random() * letters.length);
        return letters[randomIndex];
    }

    move() {
        this.y += this.v;
        this.div.style.top = this.y + "px";
    }

    isReach() {
        return this.y > this.map.clientHeight;
    }
}