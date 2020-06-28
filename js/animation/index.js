import { Wave } from './wave.js';

class App {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);
        window.addEventListener('resize', this.resize.bind(this),{
            once: false,
            passive: false,
            capture: false,
        });
        this.wave1 = new Wave("rgba(77, 88, 255, 0.54)");
        this.wave2 = new Wave("#rgba(101, 131, 200, 0.79)");
        this.wave3 = new Wave("#rgba(101, 131, 200, 0.79)");
        this.resize();
        requestAnimationFrame(this.animate.bind(this));
    }
    resize() {
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;
    
        this.canvas.width = this.stageWidth * 2;
        this.canvas.height = this.stageHeight * 2;
    
        /* 
        캔버스에서 1개의 픽셀이 차지할 크기를 정함
        크기를 2배로 늘렸으므로 각 픽셀이 2개씩 차지하도록 함
        https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/scale
        */
        this.ctx.scale(2, 2);    
        this.wave1.resize(this.stageWidth, this.stageHeight);
        this.wave2.resize(this.stageWidth, this.stageHeight);
        this.wave3.resize(this.stageWidth, this.stageHeight);
    }
    animate(){
        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
        this.wave1.draw(this.ctx);
        this.wave2.draw(this.ctx);
        this.wave3.draw(this.ctx);
        requestAnimationFrame(this.animate.bind(this));
    }
}

window.onload = () => {
    new App();
}

