import React, {Component} from 'react'
import {Link} from 'react-router-dom' 
import './blog-article.css'

class ArticleBlog extends Component {
    render(){
        return(
            
            <div className='App'>
                <div className='row'>
                    <Link to='/' >
                        <img className='logoBlog' src="https://miro.medium.com/max/244/1*emiGsBgJu2KHWyjluhKXQw.png" 
                            alt="back"/>
                    </Link>
                
                </div>

              
                
                <div className='row'>
                <div className='col-md-3'></div>
                <div className='col-md-6'>
                    <h1 className='title_blog '>
                        The Unique Frustration of Being Black and in Charge
                    </h1>

                    <p className='blog_inf'>
                    How am I supposed to run a team if my co-workers are scared of direct conversations?
                    </p>
                    
                    <img className='image_blog' src='https://miro.medium.com/max/2000/1*4j4PPA9AET6gtcot7CM6KQ.jpeg' alt='back'></img>


                </div>
                <div className='col-md-3'></div>
                </div>
            </div>
          
            
        )
    }
}

export default ArticleBlog