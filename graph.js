class Graph {

    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.yMax = this.y + this.h;
    }

    show() {
        noFill();
        stroke(190, 100);
        strokeWeight(1);
        rect(this.x, this.y, this.w, this.h);

        let gap = this.w / (this.nEntry + 1);
        strokeWeight(5);
        // stroke(255);
        for (let i = 1; i < this.yData.length; i++) {

            let px = this.x + (i)*(gap);
            let py = map(this.yData[i-1], this.miV, this.maV, this.yMax - 20, this.y + 20);

            let yval = map(this.yData[i], this.miV, this.maV, this.yMax - 20, this.y + 20);
            let xval = px+gap;

            if(yval > py){
                stroke(0,250,0);
            }else{
                stroke(250,0,0);
            }

            line(px,py,xval,yval);
        }
    }

    update(data) {
        this.preProcess(data);
        this.maV = max(this.yData);
        this.miV = min(this.yData);
        this.nEntry = this.yData.length;
    }

    preProcess(data) {
        this.xData = [];
        this.yData = [];
        for (let e of data) {
            this.xData.push(e.date);
            this.yData.push(e.weight);
        }

    }
}   