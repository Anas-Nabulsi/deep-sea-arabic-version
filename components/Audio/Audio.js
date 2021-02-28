import ReactPlayer from 'react-player';
import {useState, useEffect} from "react"

const Audio = ({meters}) => {
    const [offsetY, setOffsetY] = useState(0);
    const [ocean, setOcean] = useState(false);
    let responsiveVolume1 = meters<25? 0.2-(meters/1000)*3.4: 0.144-(meters/800);
    let responsiveVolume2 = meters>25? 0.01+(meters/3000):0;
    useEffect(()=>{
        window.addEventListener('scroll', handleScroll);
        return ()=>{
            window.removeEventListener('scroll', handleScroll);
        }
    },[])

    const handleScroll = () => {
        setOffsetY(window.pageYOffset);
        if(window.pageYOffset>800){
            setOcean(true);
        }else setOcean(false);
    }
     return (
       <div className="audio">
            <ReactPlayer 
                url={'/waves-sounds-opt.mp3'} 
                playing={true} volume={responsiveVolume1>0?responsiveVolume1:0} loop={true} style={{position:'fixed', top:0,left:0,width:40 }} 
            />
            <ReactPlayer 
                url={'/ocean-sounds-opt.mp3'} 
                playing={true} volume={responsiveVolume2>0.5?0.5:responsiveVolume2} loop={true} style={{position:'fixed', top:0,left:0,width:40 }} 
            />
       </div>
     )
}

export default Audio