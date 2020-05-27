import MediumHome from './components/body/body-medium-card/body-medium-card'
import BlogMedium from './components/body/blog/blog-medium-card'
import CardBody from './components/body/card-body/card-body-medium'
import MediumNews from './components/body/medium-news/medium-news'
import Article from './components/body/article/article';
import ArticleBlog from './components/body/blog-article/blog-article';


function CardsBody (props) {
  return (
    
        <div><MediumHome/>  
        
        <BlogMedium/>
        
          <CardBody
            category='BASED ON YOUT READING HISTORY'
            title = 'The Ulltimated List of Audiobooks and Podcast you Need in 2020'
            description='Your day really starts the nigth before'
            author = 'Glenna in The Startup'
            publicationDate='Feb 2'
            readTime ='4 min read'
          />
       
          <MediumNews/>
          <Article
          title = 'The Unique Frustration of Being Black and in Charge'
          description='The Only Blackk Guy In the Office in the Office'
          author = 'Glenna in The Startup'
          publicationDate='May 26'
          readTime ='4 min read'
          
          />
            <ArticleBlog/>
        
            </div>
      
  )
}