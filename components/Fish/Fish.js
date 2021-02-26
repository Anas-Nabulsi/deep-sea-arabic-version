import {useState, useEffect, useRef} from "react"

const Fish = ({f}) => {
    let name = f.name.replace(/ /g,'-');
    let startRow = Math.ceil(f.deep/3);
    const [spansRow, setSpansRow] = useState(0);
    const [spansCol, setSpansCol] = useState(0);
    const imageRef = useRef(null);
    useEffect(()=>{
        imageRef.current.addEventListener('load', handleSpan);
        return () =>{
            imageRef.current.removeEventListener('load', handleSpan);
        }
    },[])
    const handleSpan = () => {
        const height = imageRef.current.offsetHeight;
        const width = imageRef.current.offsetWidth;
        console.table(name, height, width);
        const spansr = Math.ceil(height/50);
        const spansc = Math.ceil(8*(width/1400));
        setSpansRow(spansr);
        setSpansCol(spansc);
    }
     return (
        <div className="fish-container" style={{gridArea:`${startRow} / ${f.start} / span ${spansRow} / span ${spansCol}`}}>
            <div style={{width:'100%', height:'100%'}}>
                <img ref={imageRef} className="animal-img" src={`/fish/${name}.png`} loading="lazy"/>
                <div className="animal-name">{f.name}</div>
            </div>
        </div>
     )
}

export default Fish