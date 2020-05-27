import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './body-medium-card.css'

class MediumHome extends Component {

    render(){
        return(
            <div className='App'>
                <div className='row'>
                    <div className='col-md-1'></div>
                    <div className='col-md-6 card_principal'>
                    
                        <div className='card_title'>A new way to control your experience</div>
                        <p>Hide content from authors or publications on 
                            your Medium homepage and in emails by clicking 
                            the more icon (…) and selecting mute.</p>
                        <Link to='/BlogMedium'>
                            <button className='button_blog'>Learn more</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
export default MediumHome