import React from 'react'

import './card-body-medium.css'
import { Link } from 'react-router-dom'

function CardBody ({

    category,
    title,
    description,
    author,
    publicationDate,
    readTime,

}){
    return(

            <div className='row'>
                <div className='container_card col-md-4'>
                <div className='style_card'>
                    <p className='title_style'>{category}</p>
                    <p className='container_info'><strong className='info_style'>{title}</strong></p>
                    <p className='description_style'>{description}</p>
                    <p className='author_style'>{author}</p>
                    <p className='date_style'>{publicationDate},{readTime}</p>
                </div>
                <div className='col-md-2'>
                    <Link to='/MediumNews'>
                        <img className='img_card' src="https://miro.medium.com/max/1400/1*cJMe3Zyn8ord3K3wvN2i7g.jpeg" alt="card_body"/>
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