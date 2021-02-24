import Canvas from "../components/Canvas/Canvas";
import Meter from "../components/Meter/Meter";
import Surface from "../components/Surface/Surface";
import fish from '../lib/data'

export default function Home() {
  let vw = typeof window == 'object'? window.innerWidth : 1200;
  let vh = typeof window == 'object'? window.innerHeight : 800;
  let canvasCount = parseInt(30000/vh);
  let dummyArr = new Array(canvasCount).fill(1);
  return (
    <div className="main">
      <Surface/>
      {
        [...dummyArr].map((d,i)=><Canvas top={vh*++i}/>)
      }
      <Meter/>
      <div className="grid">
        {
          fish.map((f,i)=>{
            let name = f.name.replace(/ /g,'-');
            let startRow = Math.ceil(f.deep/3);
            // const getDim = (e) =>{
            //   let width = e.target.offsetWidth;
            //   let height = e.target.offsetHeight;
            // }
            return(
              <div key={''+f.name+i} className="fish-container" style={{gridArea:`${startRow} / ${f.start} / span 3 / span 2`}}>
                <div style={{width:'100%', height:'100%'}}>
                  <img className="animal-img" src={`/fish/${name}.png`} loading="lazy"/>
                  <div className="animal-name">{f.name}</div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
