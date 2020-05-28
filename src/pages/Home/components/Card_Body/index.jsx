import React from 'react';
import CardBody from '../../../../components/body/card-body'
import { Link } from 'react-router-dom';


export default function CardsBody ({ title, image, description, author, category, estimatedReadTime, date, id }) {
  return (
    <Link to={`/${id}`}>
      <CardBody
        category={category}
        title={title}
        description={description}
        author={author}
        publicationDate={date}
        readTime={estimatedReadTime}
        image={image}
      />
    </Link >

  )
}