import { useState } from "react";
import Audio from "../Audio/Audio";

const Meter = () => {
    const [meter, setMeter] = useState(0);
    const [visibility, setVisibility] = useState('hidden');
    if(process.browser){
        window.addEventListener('scroll', ()=>{
            px2meter();
        });
        
        const px2meter = () =>{
            let pos = window.pageYOffset;
            let vh = window.innerHeight;
            if(pos>vh*0.32+30){
                let meters = parseInt(((pos-vh*0.32-30) / 17));
                setMeter(meters); 
                if(meters > 10960){
                    setVisibility('hidden');
                }
                if(pos>vh*0.35 && meters<10960) setVisibility('visible');
            }
            else setVisibility('hidden');
        }
    }
    return (
        <>
        <div className="metermeasure" style={{visibility:visibility}}>
          <h3>عمق {meter} متر</h3>
        </div>
        <Audio meters={meter}/>
        </>
    )
}

export default Meter;