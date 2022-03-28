import React, { useEffect, useRef, useState } from 'react'
import { Controls } from './Controls';
import { Songs } from './Songs';
import { TrackInfo } from './TrackInfo';


export const Player = () => {
    const [currentSongInd, setCurrentSongInd] = useState(0);
    const [nextSongInd, setNextSongInd] = useState(1);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioEl = useRef(null);

    const handlePlayBtn = () => {
        setIsPlaying(!isPlaying);
    };


    const skipSong = (forwards = true) =>  {
        if(forwards){
            setCurrentSongInd(currentSongInd === (Songs.length - 1) ?  0 : currentSongInd + 1);
        }else{
            setCurrentSongInd(currentSongInd === 0 ? (Songs.length - 1)  : currentSongInd - 1);
        }
    }


    useEffect(() => {
      isPlaying ? audioEl.current.play() : audioEl.current.pause()
    } , [isPlaying, currentSongInd]);


    useEffect(() => {
        setNextSongInd(currentSongInd === (Songs.length - 1) ?  0 : currentSongInd + 1);
    }, [currentSongInd]);


    const handleSongEnded = () => {
      setIsPlaying(false);
      setCurrentSongInd(nextSongInd);
      setIsPlaying(true);
    }


    useEffect(() => {
      audioEl.current.addEventListener('ended', handleSongEnded)
      return () => audioEl.current.removeEventListener('ended', handleSongEnded)
    },[]);


  return (
    <div className="player-wrapper">
        <audio src={Songs[currentSongInd].src} ref={audioEl}>
          Your browser does not support the <code>audio</code> element
        </audio>
        <TrackInfo song={Songs[currentSongInd]}/>
        <Controls isPlaying={isPlaying} skipSong={skipSong} handlePlayBtn={handlePlayBtn}/>
        <div className="next">
          <p className="next-info">Next song is {Songs[nextSongInd].title} by {Songs[nextSongInd].artist}</p>
        </div>
      </div>
  )
}

