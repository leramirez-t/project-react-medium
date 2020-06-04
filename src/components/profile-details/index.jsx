import React from 'react'

import './profile-details.css'
import CardDescription from '../card-description'
import CardDate from '../card-date'

export default function ProfileDetails (props) {

  return (
    <div className="row">
      <div className="col-2">
        <img className='image-profile' src={props.imageUrl} alt="" />
      </div>
      <div className="col-10">
        <div className="row">
          {
            props.authorResume && (
              <div className="col-12">
                <small className='text-muted'>writed by</small>
              </div>
            )
          }
          <div className="col-6">
            <h6>{props.name}</h6>
          </div>
          <div className="col-6 d-flex justify-content-end">
            <button className='btn btn-outline-primary'>follow</button>
          </div>
          {
            props.date && (
              <div className="col-12">
                <CardDate date={props.date} />
              </div>
            )
          }
          {
            props.authorResume && (
              <div className="col-12">
                <CardDescription description={props.authorResume} />
              </div>
            )
          }
        </div>
      </div>
    </div>
  )

}