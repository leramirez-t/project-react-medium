import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './article.css'

function Article ({

    id,
    category,
    title,
    description,
    author,
    publicationDate,
    readTime,

}) {
    return (


        <div className='row'>
            <div className='container_card col-md-6'>
                <div className='style_card'>
                    <Link to={`/${id}`}>
                        <p className='container_info'><strong className='info_style'>{title}</strong></p>
                    </Link>
                    <p className='description_style'>{description}</p>
                    <p className='date_style'>{publicationDate},{readTime}</p>
                </div>

            </div>
        </div>

    )
}


export default Article