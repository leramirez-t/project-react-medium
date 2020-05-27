import React from 'react';
import MediumHome from '../../../../components/body/body-medium-card'
import BlogMedium from '../../../../components/body/blog'
import CardBody from '../../../../components/body/card-body'
import MediumNews from '../../../../components/body/medium-news'
import Article from '../../../../components/body/article';
import ArticleBlog from '../../../../components/body/blog-article';


export default function CardsBody ({ title, image, description, author, category, estimatedReadTime, date }) {
  return (
    <div>  
      <CardBody
        category= {category}
        title = {title}
        description= {description}
        author = {author}
        publicationDate= {date}
        readTime = {estimatedReadTime}
        image = {image}
      />
    </div>  
  )
}