import React from 'react';
import MediumHome from '../../../../components/body/body-medium-card'
import BlogMedium from '../../../../components/body/blog'
import CardBody from '../../../../components/body/card-body'
import MediumNews from '../../../../components/body/medium-news'
import Article from '../../../../components/body/article';
import ArticleBlog from '../../../../components/body/blog-article';


export default function Articles ({ title, description, estimatedReadTime, date }) {
  return (
    <div>  
      <Article
        
        title = {title}
        description= {description}
      
        publicationDate= {date}
        readTime = {estimatedReadTime}
        
      />
    </div>  
  )
}