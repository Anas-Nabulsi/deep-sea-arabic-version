import { useState, useEffect } from "react";
import fish from '../lib/data'
import ImageCard from './../components/ImageCard/ImageCard';

function Effects() {
   const images = fish.map((f,i)=>{
      let name = f.name.replace(/ /g,'-');
      let startRow = Math.ceil(f.deep/3);
      return(
       <ImageCard key={i+name} image={f} sr={startRow} name={name} sc={f.start} />
      )
   })
   return(
      <div className="image-list">{images}</div>
   )
}

export default Effects;