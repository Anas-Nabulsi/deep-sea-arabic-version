import {useEffect, useState} from 'react'
import Canvas from "../components/Canvas/Canvas";
import Meter from "../components/Meter/Meter";
import Surface from "../components/Surface/Surface";
import fish from '../lib/data';
import notes from '../lib/Notes';

export default function Home() {
  const [offsetY, setOffsetY] = useState(0);
  let vh = typeof window == 'object'? window.innerHeight : 800;

  useEffect(()=>{
      window.addEventListener('scroll', handleScroll);
      return ()=>{
          window.removeEventListener('scroll', handleScroll);
      }
  },[])

  const handleScroll = () => {
      setOffsetY(window.pageYOffset);
  }

  return (
    <>
      {
        [[0,6,0,0,999],[6,12,50450,2949,999],[12,20,100100,5934,999],[20,31,150150,8896, 700]].map((interv,i)=>{
          return(
            <div key={'notes-'+i} className="notes-grid" style={{top:interv[2], gridTemplateRows: `repeat(${interv[4]}, 50px)` }}>{
              notes.slice(interv[0],interv[1]).map((n,i)=>{ 
                let titlepos = Math.ceil((n.deep-interv[3])*0.3338-1.5);
                if(n.title){
                  return <h3 key={'note-title'+i} style={{gridArea:`${titlepos} / 1 / span 3 / span 8`}}  className="note note-title">{n.text}</h3>;
                }
                else if(n.image){
                  return <img src={n.image} style={{gridArea:`${titlepos} / 4 / span 7 / span 8`, position:titlepos<=offsetY+vh?'fixed':'relative !important'}} className="submarine"/>
                }
                else return <p key={'note'+i} style={{gridArea:`${titlepos} / 2 / span 3 / span 6`}}  className="note">{n.text}</p>;
              })
            }
            </div>
          )
        })
      }
    <div className="main">
      <Surface/>
      <div className="canvas-container">
          <Canvas top="80%" offsetY={offsetY} scrollModifier={0.1}/>
          <Canvas top="120%" offsetY={offsetY} scrollModifier={0.2} />
          <Canvas top="150%" offsetY={offsetY} scrollModifier={0.1} />
          <Canvas top="200%" offsetY={offsetY} scrollModifier={0.5} />
          <Canvas top="250%" offsetY={offsetY} scrollModifier={0.3} />
          {/* <Canvas top="300%" offsetY={offsetY} scrollModifier={0.4} />
          <Canvas top="400%" offsetY={offsetY} scrollModifier={0.1} /> */}
          <Canvas top="600%" offsetY={offsetY} scrollModifier={0.2} />
          {/* <Canvas top="900%" offsetY={offsetY} scrollModifier={0.4} /> */}
          {/* <Canvas top="1050%" offsetY={offsetY} scrollModifier={0.1} /> */}
      </div>
      <Meter/>
      <div className="grid">
        {
          fish.slice(0,89).map((f,i)=>{
            let startRow = Math.ceil(f.deep*0.3338);

            // if(f.text){
            //     return (
            //       <div className="note-container" key={'note-title'+i} style={{gridArea:`${startRow} / 3 / span 3 / span 4`}} >
            //         {
            //           f.title?
            //           <h3 className="note note-title">{f.text}</h3>
            //           :
            //           <p className="note">{f.text}</p>
            //         }
            //       </div>
            //     )
            // }

            let name = f.name.replace(/ /g,'-');
            
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
      {/* <div className="notes-container">
      {
        notes.map((n,i)=>{
          let titlepos = Math.ceil(n.meter*0.3338);
          if(n.title){
            return <h3 key={'note-title'+i} style={{top:titlepos}} className="note note-title">{n.text}</h3>;
          }
          else return <p key={'note'+i} style={{top:titlepos}} className="note">{n.text}</p>;
        })
      }
      </div> */}
      <div className="last-part">
        <img src="/ocean-bottom-top.svg"/>
        <div>
          <h4>البحر العميق</h4>
        </div>
      </div>
    </div>
    </>
  )
}
