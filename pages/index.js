import Audio from "../components/Audio/Audio";
import Canvas from "../components/Canvas/Canvas";
import Meter from "../components/Meter/Meter";
import Surface from "../components/Surface/Surface";
import fish from '../lib/data';

export default function Home() {
  let vw = typeof window == 'object'? window.innerWidth : 1200;
  let vh = typeof window == 'object'? window.innerHeight : 800;
  return (
    <div className="main">
      <Surface/>
      <Audio/>
      <div className="canvas-container">
        <Canvas top="80%" scrollModifier={0.1}/>
        <Canvas top="120%" scrollModifier={0.2} />
        <Canvas top="150%" scrollModifier={0.1} />
        <Canvas top="200%" scrollModifier={0.5} />
        <Canvas top="250%" scrollModifier={0.3} />
        <Canvas top="300%" scrollModifier={0.4} />
        <Canvas top="350%" scrollModifier={0.3} />
        <Canvas top="400%" scrollModifier={0.1} />
      </div>
      <Meter/>
      <div className="grid">
        {
          fish.slice(0,89).map((f,i)=>{
            let name = f.name.replace(/ /g,'-');
            let startRow = Math.ceil(f.deep*0.3338);
            return(
              <div key={''+f.name+i} className="fish-container" style={{gridArea:`${startRow} / ${f.start} / span ${f.rowEnd} / span ${f.colEnd}`}}>
                <div style={{width:'100%', height:'100%'}}>
                  <img className="animal-img" src={`/fish/${name}.png`} loading="lazy"/>
                  <div className="animal-name">{f.name}</div>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className="grid">
        {
          fish.slice(89,108).map((f,i)=>{
            let name = f.name.replace(/ /g,'-');
            let startRow = Math.ceil((f.deep-2949)*0.334);
            return(
              <div key={'2'+f.name+i} data-number={i} className="fish-container" style={{gridArea:`${startRow} / ${f.start} / span ${f.rowEnd} / span ${f.colEnd}`}}>
                <div style={{width:'100%', height:'100%'}}>
                  <img className="animal-img" src={`/fish/${name}.png`} loading="lazy"/>
                  <div className="animal-name">{f.name}</div>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className="grid">
        {
          fish.slice(108,113).map((f,i)=>{
            let name = f.name.replace(/ /g,'-');
            let startRow = Math.ceil((f.deep-5934)*0.334);
            return(
              <div key={'3'+f.name+i} data-number={i} className="fish-container" style={{gridArea:`${startRow} / ${f.start} / span ${f.rowEnd} / span ${f.colEnd}`}}>
                <div style={{width:'100%', height:'100%'}}>
                  <img className="animal-img" src={`/fish/${name}.png`} loading="lazy"/>
                  <div className="animal-name">{f.name}</div>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className="grid last-grid">
        {
          fish.slice(113,fish.length).map((f,i)=>{
            let name = f.name.replace(/ /g,'-');
            let startRow = Math.ceil((f.deep-8896)*0.334);
            return(
              <div key={'4'+f.name+i} data-number={i} className="fish-container" style={{gridArea:`${startRow} / ${f.start} / span ${f.rowEnd} / span ${f.colEnd}`}}>
                <div style={{width:'100%', height:'100%'}}>
                  <img className="animal-img" src={`/fish/${name}.png`} loading="lazy"/>
                  <div className="animal-name">{f.name}</div>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className="last-part">
        <img src="/ocean-bottom-top.svg"/>
        <div>
          <h4>البحر العميق</h4>
        </div>
      </div>
    </div>
  )
}
