import React, { FC, MutableRefObject } from 'react';

// import './ProgressBar.css'

interface ProgressBarProps {
  progressBarRef: MutableRefObject<HTMLInputElement>,
  audioRef: MutableRefObject<HTMLAudioElement>,
  timeProgress: number,
  duration: number
}

const ProgressBar: FC<ProgressBarProps> = ({ progressBarRef, audioRef, timeProgress, duration }) => {
  const handleProgressBarChange = () => {
    // console.log('🧩 ', typeof progressBarRef.current.value);

    // Assigns the user-designated progress bar value to ....?
    audioRef.current.currentTime = +progressBarRef.current.value;
  };

  console.log('🌺 ', timeProgress);
  console.log(' ', duration);

  return (
    <div className='progress'>
      <span className='time current'>{timeProgress}</span>
      <input
        type='range'
        ref={progressBarRef}
        defaultValue='0' // seconds
        onChange={handleProgressBarChange}
      />
      <span className='time'>{duration}</span>
    </div>
  )
};

export default ProgressBar;