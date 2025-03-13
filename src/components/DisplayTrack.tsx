import React, { FC, MutableRefObject } from 'react';
import { BsMusicNoteBeamed } from 'react-icons/bs';

// import './DisplayTrack.css'


interface DisplayTrackProps {
  currentTrack: any, // change
  audioRef: MutableRefObject<HTMLAudioElement>
}

const DisplayTrack: FC<DisplayTrackProps> = ({ currentTrack, audioRef }) => {
  return (
    <div>
      <audio
        src={currentTrack.src}
        ref={audioRef}
      />
      <div className='audio-info'>
        <div className='audio-image'>
          {currentTrack.thumbnail ? (
            <img src={currentTrack.thumbnail} alt='audio avatar'/>
          ) : (
            <div className='icon-wrapper'>
              <span className='audio-icon'><BsMusicNoteBeamed /></span>
            </div>
          )}
        </div>
        <div className='text'>
          <p className='title'>{currentTrack.title}</p>
          <p>{currentTrack.author}</p>
        </div>
      </div>
    </div>
  );
};

export default DisplayTrack;