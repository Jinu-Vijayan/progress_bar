import { useEffect, useState } from 'react';
import ProgressBar from '../components/ProgressBar';
import './LandingScreen.css'

function LandingScreen(){

    const [progress , setProgress] = useState(0);
    const [start, setStart] = useState(false)

    useEffect(()=>{

        let timer;

        if(start === true){

            timer = setInterval(()=>{
                setProgress((prevState)=>{
                    const updatedProgress = prevState + 1;
                    if(updatedProgress === 100){
                        clearInterval(timer)
                    }
                    return updatedProgress;
                })
    
            },100);

        }
        

        return(()=>{
            clearInterval(timer);
        })

    },[start])

    return(
        <div id='container'>
            <h1>Progress Bar</h1>
            <ProgressBar progress = {progress} />
            {progress < 100 ? progress ===0 ? "" : <p>Loading...</p> : <p>Completed!</p>}
            {progress === 0 ? <button onClick={()=>{
                setStart(true);
            }} className='start-btn'>Press to start</button>:""}
            
        </div>
    )
}

export default LandingScreen;