import React from 'react'

export const TrackInfo = (props) => {
  return (
    <>
        <div className="img-wrapper">
          <img src={props.song.img_src} alt={props.song.title} />
        </div>
        <div className="player-info">
          <h3 className="title">{props.song.title}</h3>
          <h5 className="artist">{props.song.artist}</h5>
        </div>
    </>
  )
}
