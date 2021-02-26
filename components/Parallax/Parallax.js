import SpecialCanvas from './../Canvas/SpecialCanvas';
import { useEffect, useState } from 'react';
import Canvas from './../Canvas/Canvas';
const Parallax = () => {
    const [offsetY, setoffsetY] = useState(0);
    const handleScroll = () => {
      setoffsetY(prev=>{
        return window.pageYOffset;
      });
    }
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      }
    }, [])
     return (
       <div className="parallax-main">
        <SpecialCanvas color="#ffffff" offsetY={offsetY*4}/>
        <SpecialCanvas color="#333333" offsetY={offsetY*0.4}/>
       </div>
     )
}

export default Parallax