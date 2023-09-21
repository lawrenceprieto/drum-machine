import { useState, useEffect} from 'react';

function DrumMachine() {
    const [display, setDisplay] = useState('');

    const drumPadsData = [
        { padKey: 'Q', padId: 'Heater-1', audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' },
        { padKey: 'W', padId: 'Heater-2', audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' },
        { padKey: 'E', padId: 'Heater-3', audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' },
        { padKey: 'A', padId: 'Heater-4', audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' },
        { padKey: 'S', padId: 'Clap', audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' },
        { padKey: 'D', padId: 'Open-HH', audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' },
        { padKey: 'Z', padId: 'Kick-n-Hat', audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' },
        { padKey: 'X', padId: 'Kick', audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' },
        { padKey: 'C', padId: 'Close-HH', audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' },
        // Add more drum pad data here
    ];
    
    function handleDrumPad(data) {
        setDisplay(data.padId);
        const audio = document.getElementById(data.padKey);
        if (audio) {
            if (audio.paused || audio.ended) {
              audio.currentTime = 0;
              const playPromise = audio.play();
        
              // Handling promise to prevent errors in some browsers
              if (playPromise !== undefined) {
                playPromise
                  .then(() => {})
                  .catch((error) => {
                    console.error('Error playing audio:', error);
                  });
              }
            } else {
              // If audio is playing, pause it and reset currentTime
              audio.pause();
              audio.currentTime = 0;
            }
        }
    }

    useEffect(() => {
        function handleKeyDown(event) {
            const pressedKey = String.fromCharCode(event.keyCode);
            const padData = drumPadsData.find((data) => data.padKey === pressedKey);
            if (padData) {
                handleDrumPad(padData);
            }
        }
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [drumPadsData]);
    
    return (
        <div id="drum-machine" className="d-flex align-items-center justify-content-center" style={{height: "100vh"}}>
            <div id="display">
                {display}
            </div>
            <div className="gap-3">
                {
                    drumPadsData.map((data , index) => (
                        <button className="drum-pad btn btn-primary" key={index} id={index} onClick={() => handleDrumPad(data)}>
                            <audio className="clip" id={data.padKey} src={data.audioSrc}></audio> 
                            {data.padKey}
                        </button>
                    ))
                }
            </div>
        </div>
  );
};

export default DrumMachine;
