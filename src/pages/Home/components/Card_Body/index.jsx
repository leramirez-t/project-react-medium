import React from 'react';
import MediumHome from '../../../../components/body/body-medium-card'
import BlogMedium from '../../../../components/body/blog'
import CardBody from '../../../../components/body/card-body'
import MediumNews from '../../../../components/body/medium-news'
import Article from '../../../../components/body/article';
import ArticleBlog from '../../../../components/body/blog-article';
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