import React, { FC, useRef, useState } from 'react';
import { trackList } from '../assets/tracklist';

import DisplayTrack from './DisplayTrack';
import ProgressBar from './ProgressBar';
import Controls from './Controls'

// import './AudioPlayer.css'

/*

TODO: 

https://blog.logrocket.com/building-audio-player-react/#embedding-sound-content-play-react-project
https://medium.com/@martin_hotell/react-refs-with-typescript-a32d56c4d315

Displaying time progress and duration

*/

// const SummaryView = (props: SummaryViewPageProps): JSX.Element | null | undefined => {

const AudioPlayer = () => {
  const [currentTrack, setCurrentTrack] = useState(trackList[0]);
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  // useRef Hook allows you to persist values between renders - can be used to store a mutable value that does not cause a re-render when updated
  // Because we need it in multiple child components, best to create it here
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressBarRef = useRef<HTMLInputElement>(null);


  return (
    <div className='audio-player'>
      <div className='inner'>
        <DisplayTrack
          currentTrack={currentTrack}
          audioRef={audioRef}
        />
        <Controls
          audioRef={audioRef}
        />
        <ProgressBar
          progressBarRef={progressBarRef}
          audioRef={audioRef}
          timeProgress={timeProgress}
          duration={duration}
        />
      </div>
    </div>
  );
};

export default AudioPlayer;
