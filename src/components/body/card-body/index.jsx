import React from 'react'

import './card-body-medium.css'
import { Link } from 'react-router-dom'

function CardBody({
    title,
    image, 
    description, 
    author, 
    category, 
    estimatedReadTime, 
    date
}){
    return(

            <div className='row'>
                <div className='container_card col-md-6'>
                <div className='style_card'>
                <p className='title_style'>Based on your reading history</p>
                    <p className='container_info'><strong className='info_style'>{title}</strong></p>
                    <p className='description_style'>{description}</p>
                    <p className='author_style'>{author} in {category}</p>
                    <p className='date_style'>{date},{estimatedReadTime}</p>
                </div>
                <div className='col-md-2'>
                    <Link to='/MediumNews'>
                        <img className='img_card' src={image} alt="card_body"/>
                    </Link>
                </div>
                </div>
            </div>    



            /*<div className='App'>
                <div className='row'>

                </div>
                <br/>
                <br/>
                <div className='row'>
                    <div className='col-md-1'></div>
                    <div className='col-md-6 card_principal'>
                    
                        <div className='card_title'>5 Myths About Running That You Shouldn’t Believe and 5 Absolutely True Facts</div>
                        <p>Hide content from authors or publications on 
                            your Medium homepage and in emails by clicking 
                            the more icon (…) and selecting mute.</p>
                        <Link to='/MediumNew'>
                            <button className='button_blog'>Learn more</button>
                        </Link>
                    
                    </div>
                </div>
            </div>*/
        )
    }

export default CardBody