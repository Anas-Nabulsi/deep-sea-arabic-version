

const Surface = () => {
     return (
        <div className="waveWrapper waveAnimation">
            <div className="intro">
                <h1>
                البحر العميق
                </h1>
                <h3>اعداد الفريق 🌊</h3>
            </div>
            <div className="waveWrapperInner bgTop">
                <div className="wave waveTop" style={{backgroundImage: `url('/wave3.png')`}}></div>
            </div>
            <div className="waveWrapperInner bgTop">
                <div className="wave waveTop" style={{backgroundImage: `url('/wave5.png')`}}></div>
            </div>
            {/* <div className="waveWrapperInner bgMiddle">
                <div className="wave waveMiddle" style={{backgroundImage: `url('wave5.png')`}}></div>
            </div> */}
            <div className="waveWrapperInner bgBottom">
                <div className="wave waveBottom" style={{backgroundImage: `url('wave6.png')`}}></div>
            </div>
        </div>
     )
}

export default Surface