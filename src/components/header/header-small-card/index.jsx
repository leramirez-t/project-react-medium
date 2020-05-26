import React from 'react'
import { Link } from 'react-router-dom'

export default function HeaderSmallCard (props) {
  const { title, imageUrl, description, date, author, id } = props.article
  return (
    <Link to={`/${id}`}>
      <div className="row">
        <div className="col-4">
          <img className='small-card-image' src={imageUrl} alt="" />
        </div>
        <div className="col-8">
          <div className="row">
            <div className="col-12">
              <CardTitle title={title} />
            </div>
            <div className="col-12">
              <CardDescription description={description} />
            </div>
            <div className="col-12">
              <CardAuthor author={author} />
            </div>
            <div className="col-12">
              <CardDate date={date} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}