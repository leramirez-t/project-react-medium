import React from 'react'

export default function DetailsPostTitle (props) {
  return (
    <div className="wraper-title">
      <h1 className='detailsPostTilta'>
        {props.title}
      </h1>
    </div>
  )
}