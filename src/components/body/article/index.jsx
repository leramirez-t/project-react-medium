import React, {Component} from 'react'
import {Link} from 'react-router-dom' 
import './article.css'

function Article ({

    category,
    title,
    description,
    author,
    publicationDate,
    readTime,

}){
    return(
            <>
            <div className='row'>
                <span className='aticle_title'>Popular on Medium</span>
            </div>
            <div className='row'>
                <div className='container_card col-md-3'>
                <div className='style_card'>
                <Link to='/ArticleBlog'>
                    <p className='container_info'><strong className='info_style'>{title}</strong></p>
                </Link>
                    <p className='description_style'>{description}</p>
                    <p className='date_style'>{publicationDate},{readTime}</p>
                </div>
                
                </div>
            </div>    
            </>
        )
    }


export default Article