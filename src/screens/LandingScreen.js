import { useEffect, useState } from 'react';
import ProgressBar from '../components/ProgressBar';
import './LandingScreen.css'

function LandingScreen(){

    const [progress , setProgress] = useState(0);

    useEffect(()=>{

        const timer = setInterval(()=>{
            setProgress((prevState)=>{
                const updatedProgress = prevState + 1;
                if(updatedProgress === 100){
                    clearInterval(timer)
                }
                return updatedProgress;
            })

        },100);

        return(()=>{
            clearInterval(timer);
        })

    },[])

    return(
        <div id='container'>
            <h1>Progress Bar</h1>
            <ProgressBar progress = {progress} />
            {progress < 100 ? <p>Loading...</p> : <p>Completed!</p>}
        </div>
    )
}

export default LandingScreen;