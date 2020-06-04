import React, {Component} from 'react'
import {Link} from 'react-router-dom' 
import './medium-news.css'

class MediumNews extends Component {
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
                    <div className='container_text col-md-12'>
                        <img className='nav_logo' src='https://miro.medium.com/max/422/1*IOJrKVmLnRcFz3E_KrrN_Q.png' alt='back'></img>
                        <span className='options_menu'> TOP STORY</span>
                        <span className='options_menu'>SUBMIT</span>    
                        
                    </div>   
                </div>
                
                <div className='row'>
                <div className='col-md-3'></div>
                <div className='col-md-6'>
                    <h1 className='title_blog '>
                        The Ultimate List of Audiobooks and
                        Podcasts You Need in 2020
                    </h1>
                    <img className='image_news' src="https://miro.medium.com/max/1400/1*cJMe3Zyn8ord3K3wvN2i7g.jpeg" alt=""/>
                   
                </div>
                <div className='col-md-3'></div>
                </div>
            </div>
          
            
        )
    }
}

export default MediumNews