import {useState, useRef, useEffect} from 'react';

const useCanvas = (callback) => {
    const canvasRef = useRef(null);
  
    useEffect(() => {
      const canvas = canvasRef.current;
      const c = canvas.getContext('2d');
      callback([canvas, c]);
    }, []);
  
    return canvasRef;
  }

const Canvas = ({top, scrollModifier}) => {
    const [offsetY, setOffsetY] = useState(0);

        useEffect(()=>{
            window.addEventListener('scroll', handleScroll);
            return ()=>{
                window.removeEventListener('scroll', handleScroll);
            }
        },[])

        const handleScroll = () => {
            setOffsetY(window.pageYOffset);
        }


    const canvas = useCanvas(([canvas, c]) => {
        let vw = typeof window == 'object'? window.innerWidth : 1200;
        let vh = typeof window == 'object'? window.innerHeight : 800;
        canvas.width = vw;
        canvas.height = vh;
        
        const fullr = Math.PI * 2;

        // In canvas we can create the following objects: rects, lines, arcs/circles
        // buzier curves, images, and text
        
        //Arc/cricle
        function Circle (x,y,vx,vy,r, asr) {
            this.x = x;
            this.y = y;
            this.vx = vx;
            this.vy = vy;
            this.r = r;
            this.rr = asr*0.01;
        
            let op = Math.floor(Math.random()*40) + 50;
            this.draw = () => {
                c.beginPath();
                c.arc(this.x,this.y,this.r,0,fullr,false);
                c.fillStyle = "#ffffff"+op;
                c.closePath();
                c.fill();
            }
        
            this.update = () => {
                if(this.x + 3 > vw || this.x -3 <0){
                    this.vx = -this.vx;
                }
                if(this.y + 3 >vh || this.y -3 < 0){
                    this.vy = -this.vy;
                }
                if(this.r <= 0.8 || this.r >= 3){
                    this.rr = -this.rr
                }
                this.x += this.vx;
                this.y += this.vy;
                this.r+=this.rr;
        
                this.draw();
            }
        
        }
        
        const createCircles = (n) => {
            let circles = [];
            for(let i =0; i<n; i++){
                let pn = Math.random()  <0.5? 0.4:-0.4;
                let x = Math.random() * vw - 50;
                let y = Math.random() * vh - 50;
                let r = Math.round(Math.random()*1+1);
                let asr = Math.round(Math.random()) * 2 - 1;
                let vx = Math.random() * pn;
                let vy = Math.random() * pn;
                circles.push(new Circle(x,y,vx,vy,r, asr));
            }
            return circles;
        }
        
        let circles = createCircles(20);
        
        let circle = new Circle(100,100,0.5,0.5);
        circle.update();
        
        const animate = () =>{
            c.clearRect(0,0,vw,vh);
            for (let i = 0; i<circles.length; i++){
                circles[i].update();
            }
            requestAnimationFrame(animate);
        }
        
        animate();
      });
    return (
        <canvas ref={canvas} style={{top:top, transform:`translateY(-${offsetY*scrollModifier}px)`}} />
    );
}

export default Canvas;

