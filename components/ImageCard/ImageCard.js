import {useState, useEffect, useRef} from "react"

const ImageCard = ({image,name,sr,sc}) => {
    const [spans, setSpans] = useState(0);
    const imageRef = useRef(null);
    useEffect(()=>{
        imageRef.current.addEventListener('load', handleSpan);
        return () =>{
            imageRef.current.removeEventListener('load', handleSpan);
        }
    },[]);

    const handleSpan = () => {
        const height = imageRef.current.clientHeight;
        const spansr = Math.ceil(height/50);
        const spanc = Math.ceil(8*(width/1400));
        setSpans(spansr);
    }
     return (
        <div style={{gridArea:`${sr} / ${sc} / span ${spans} / span 2`}}>
            <img ref={imageRef} src={`/fish/${name}.png`} loading="lazy"/>
        </div>
     )
}

export default ImageCard