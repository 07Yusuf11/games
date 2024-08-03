class Food {
    constructor(select) {
        this.map = document.querySelector(select);
        this.food = document.createElement("div");
        this.food.className = "food";
        this.map.appendChild(this.food);
        this.x = 0;
        this.y = 0;
        this.foodPos();
    }
    foodPos() {
        const w = this.map.clientWidth / 20;
        const h = this.map.clientHeight / 20;
        let x = Math.floor(Math.random() * w);
        let y = Math.floor(Math.random() * h);
        console.log(x, y);

        this.x = x * 20;
        this.y = y * 20;
        console.log(this.x, this.y);

        this.food.style.left= this.x + "px";
        this.food.style.top = this.y + "px";
    }
}