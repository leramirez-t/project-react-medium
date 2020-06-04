import React, {Component} from 'react'
import {Link} from 'react-router-dom' 
import './blog-medium-card.css'

class BlogMedium extends Component {
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
                        <span className='header_blog'> 3 Min Read </span>
                        <span className='options_menu'> PRODUCT NEWS</span>
                        <span className='options_menu'>THE STORIES</span>    
                        <span className='options_menu'>COMPANY</span>    
                        <span className='options_menu'>LEGAL NOTES</span>    
                        <span className='options_menu'>WRITERS</span>   
                    </div>   
                </div>
                
                <div className='row'>
                <div className='col-md-3'></div>
                <div className='col-md-6'>
                    <h1 className='title_blog '>
                        Mute: A new way to control your 
                        Medium experience
                    </h1>

                    <p className='blog_inf'>
                    There are millions of stories told on Medium; thousands are published 
                    every day. Whenever you visit our homepage, launch our apps, or open an
                    email digest, our system pores over these stories and recommends the best 
                    ones for you to read. Most of our recommendations are personalized, taking 
                    into account your reading history and over a hundred other attributes 
                    including the writers, publications, and topics you follow. But no algorithm 
                    is perfect, and sometimes we surface content you aren’t interested in. 
                    </p>
                    <p className='blog_inf'>
                    Today, we’re giving you more agency over content you see on Medium with 
                    Mute. Akin to how you can follow a writer or publication to get content from 
                    them, you can now “mute” them to stop seeing their stories recommended 
                    to you across Medium. Muting a writer or publication means their stories 
                    will no longer be visible in your home feed on the Web and in the app, or in 
                    Medium’s email digests.
                    </p>
                    <p className='blog_inf'>
                    To mute an author or publication from a story preview on iOS, Android, or 
                    Web, tap the overflow (…) icon and then mute this writer or mute this 
                    publication in the context menu.
                    </p>
                </div>
                <div className='col-md-3'></div>
                </div>
            </div>
          
            
        )
    }
}

export default BlogMedium