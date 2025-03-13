import React, { FC, MutableRefObject, useEffect, useState } from 'react';

import {
  IoPlayBackSharp,
  IoPlayForwardSharp,
  IoPlaySkipBackSharp,
  IoPlaySkipForwardSharp,
  IoPlaySharp,
  IoPauseSharp,
} from 'react-icons/io5';

// import './Controls.css'


interface ControlsProps {
  audioRef: MutableRefObject<HTMLAudioElement>
}

const Controls: FC<ControlsProps> = ({ audioRef }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, audioRef]); // If one of these values changes between renders, React will re-run the effect. If the values have not changed, React will skip the effect

  const togglePlayPause = () => {
    setIsPlaying((playOrPause) => !playOrPause);
  };

  return (
    <div className='controls-wrapper'>
      <div className='controls'>
        <button>
          <IoPlaySkipBackSharp />
        </button>
        <button>
          <IoPlayBackSharp />
        </button>

        <button onClick={togglePlayPause}>
          {isPlaying ? <IoPauseSharp /> : <IoPlaySharp />}
        </button>

        <button>
          <IoPlayForwardSharp />
        </button>
        <button>
          <IoPlaySkipForwardSharp />
        </button>
      </div>
    </div>
  );
};

export default Controls;