

const Surface = () => {
     return (
        <div className="waveWrapper">
            <div className="intro">
                <h1>
                البحر العميق
                </h1>
                <h3>فريق سهولة انجاز <span>&#x2764;</span></h3>
            </div>
            <div className="waves">
                <svg className="editorial"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 24 150 28"
                    preserveAspectRatio="none">
                <defs>
                <path id="gentle-wave"
                d="M-160 44c30 0 
                    58-18 88-18s
                    58 18 88 18 
                    58-18 88-18 
                    58 18 88 18
                    v44h-352z" />
                </defs>
                <g className="parallax">
                <use xlinkHref="#gentle-wave" x="50" y="0" fill="#00a6af"/>
                <use xlinkHref="#gentle-wave" x="50" y="3" fill="#009ba6"  fillOpacity="0.9"/>
                <use xlinkHref="#gentle-wave" x="50" y="6" fill="#00a4b5" fillOpacity="0.8"/>  
                </g>
                </svg>
            </div>
        </div>
     )
}

export default Surface