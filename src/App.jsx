import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import MediumHome from './components/body/body-medium-card/body-medium-card'
import BlogMedium from './components/body/blog/blog-medium-card'
import CardBody from './components/body/card-body/card-body-medium'
import MediumNews from './components/body/medium-news/medium-news'
import Article from './components/body/article/article';
import ArticleBlog from './components/body/blog-article/blog-article';


function App () {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <MediumHome/>
        </Route>
        <Route path='/BlogMedium' exact>
          <BlogMedium/>
        </Route>
        <Route path='/CardBody' exact>
          <CardBody
          
            category='BASED ON YOUT READING HISTORY'
            title = 'The Ulltimated List of Audiobooks and Podcast you Need in 2020'
            description='Your day really starts the nigth before'
            author = 'Glenna in The Startup'
            publicationDate='Feb 2'
            readTime ='4 min read'
          
          />
         
        </Route>
        <Route path='/MediumNews' exact>
          <MediumNews/>
        </Route>
        <Route path='/ArticleMedium'>
          <Article
          
          
          title = 'The Unique Frustration of Being Black and in Charge'
          description='The Only Blackk Guy In the Office in the Office'
          author = 'Glenna in The Startup'
          publicationDate='May 26'
          readTime ='4 min read'
          
          />
        </Route>
        <Route path='/ArticleBlog'>
            <ArticleBlog/>
        </Route>

      </Switch>
    </Router >
  );

}

export default App;
