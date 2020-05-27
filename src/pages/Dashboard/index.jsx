import React, { Component } from 'react'
import NavBar from './components/NavBar'
import Header from './components/HeaderDashboard'
import CardsBody from '../Home/components/Card_Body'
import HeaderHome from '../Home/components/Header'
import BodyHome from '../Home/components/Body'
import FooterHome from '../Home/components/Footer'

export default class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state= {
            articles: []        
        }
        this._renderArticle = this._renderArticle.bind(this)
    }

    componentDidMount(){
        fetch('http://localhost:8080/posts')
        .then(response => response.json())
        .then(({ data : { posts } })=> {
            var articlesArray = posts.map((post) => {
                return {
                    id: post.id,
                    title: post.title,
                    image: post.image,
                    description: post.description,
                    author: post.author,
                    category: post.category,
                    estimatedReadTime: post.estimatedReadTime,
                    date: post.date
                }
            })
            this.setState({
                articles: articlesArray
            })
    })
}
    
    _renderArticle() {
        const { articles } = this.state;
        return articles.map(({ key, title, image, description, author, category, estimatedReadTime, date }) => {
            return <CardsBody key={key} title={title} description={description} image={image} author={author} category={category}  date={date} estimatedReadTime={estimatedReadTime}/>
        })
    }

    render(){
        return(
           <div>
               <div className='row'>
                   <div className='col-md-12'>
                    <Header/>
                </div>
                <div className='col-md-12'>
                    <NavBar/>
                </div>                
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        {this._renderArticle()}
                    </div>
                </div>
            </div>
        )
    }
}

