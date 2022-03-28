import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faForward, faBackward } from '@fortawesome/free-solid-svg-icons';

export const Controls = (props) => {
  return (
    <div className="controls">
        <button type="button" className="btn skip-btn" onClick={() => props.skipSong(false)}><FontAwesomeIcon icon={faBackward} /></button>
        <button type="button" className="btn play-btn" onClick={props.handlePlayBtn}><FontAwesomeIcon icon={props.isPlaying ? faPause : faPlay}/></button>
        <button type="button" className="btn skip-btn" onClick={() => props.skipSong()}><FontAwesomeIcon icon={faForward}/></button>
    </div>
  )
}
