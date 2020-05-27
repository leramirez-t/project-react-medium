import React, { Component } from 'react'
import NavBar from './Dashboard/components/NavBar'
import Header from './Home/components/Header'
import CardsBody from '../pages/Home/components/Card_Body'

export default class Dashboard extends Component {

    constructor(props){
        super(props)
        this.state={
            articles = []        
        }
        this.renderArticle = this.renderArticle.bind(this)
    }

    componentDidMount(){
        fetch('http://localhost:8080/post')
        .then(response => response.json())
        .then(({articles})=>{
        var articlesArray =[]
        for (let key in articles){
            articlesArray.push({
                key,
                title: articles[key]['title'],
                image: articles[key]['image'] ,
                description: articles[key]['description'],
                author: articles[key]['author'],
                category: articles[key]['category'],
                estimatedReadTime: articles[key]['estimatedReadTime'],
                date: articles[key]['date']
            
            })
        }
    })
}
    
    renderArticle () {
        const { articles } = this.state;
        return articles.reverse().map(({ key, title, description, author, category, estimatedReadTime, date }) => {
          return <Note key={key} title={title} description={description} image={image} author={author} category={category}  date={date} estimatedReadTime={estimatedReadTime}/>;
        });
      }

    render(){
        return(
           <div>
            <div className='row'>
                <div className='col-md-12'><Header/></div>
                <div className='col-md-12'><NavBar/></div>
                
            </div>
            <div className='row'>
                <div className='col-md-12'><CardsBody/></div>
            </div>
            </div>
        )
    }
}

