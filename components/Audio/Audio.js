import ReactPlayer from 'react-player';
import {useState, useEffect} from "react"

const Audio = () => {
    const [offsetY, setOffsetY] = useState(0);
    const [ocean, setOcean] = useState(false);
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
            <ReactPlayer url={ocean?'/ocean-sounds-opt.mp3':'/waves-sounds-opt.mp3'} playing={true} volume={0.1} loop={true} style={{position:'fixed', top:0,left:0,width:40 }} />
       </div>
     )
}

export default Audio