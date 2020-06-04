import React from 'react'
import { Link } from 'react-router-dom'
import CardTitle from '../../Cards/card-title'
import CardDescription from '../../Cards/card-description'
import CardAuthor from '../../Cards/card-author'
import CardDate from '../../Cards/card-date'

export default function BigCard (props) {
  const { title, image, description, date, author, id } = props.article

  return (
    <Link to={`/${id}`}>
      <div className="row">
        <div className="col-12">
          <img src={image} alt="" width='100%' height='100%' />
        </div>
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
    </Link>
  )

}