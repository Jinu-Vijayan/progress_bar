import './ProgressBar.css'

function ProgressBar({progress}){
    return(
        <div className='progress-bar-container'>
            <div className='progress-filler' style={{
                width: `${progress}%`
            }}></div>
            <span className='progress-label' style = {{
                color: progress > 50 ? "#ffffff" : "#000000"
            }} >{progress}%</span>
        </div>
    )
}

export default ProgressBar;