import React, { Component } from 'react'
import NavBar from './components/NavBar'
import HeaderDashboard from './components/HeaderDashboard'
import CardsBody from '../Home/components/Card_Body'
import Header from '../../components/header'
import Articles from '../Home/components/Articles'
export default class Dashboard extends Component {
    constructor (props) {
        super(props)
        this.state = {
            articles: []
        }
        this._renderArticle = this._renderArticle.bind(this)
        this.renderArt = this.renderArt.bind(this)
    }

    componentDidMount () {
        console.log('[did mount]')
        fetch('http://localhost:8080/posts')
            .then(response => response.json())
            .then(({ data: { posts } }) => {
                console.log('[POSTS]:', posts)
                var articlesArray = posts.map((post) => {
                    return {
                        id: post._id,
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

    _renderArticle () {
        const { articles } = this.state;
        console.log('[_render]:', articles)
        return articles.slice(5).map(({ key, title, image, description, author, category, estimatedReadTime, date, id }) => {
            return <CardsBody key={key} title={title} description={description} image={image} author={author} category={category} date={date} estimatedReadTime={estimatedReadTime} id={id} />
        })
    }

    renderArt () {
        const { articles } = this.state;
        console.log('[_render]:', articles)
        return articles.slice(5).map(({ key, title, image, description, author, category, estimatedReadTime, date, id }) => {
            return <Articles key={key} title={title} description={description} image={image} author={author} category={category} date={date} estimatedReadTime={estimatedReadTime} id={id} />
        })
    }

    render () {
        console.log('[state]:', this.state.articles)
        return (
            <div>
                <div className='row'>
                    <div className='col-md-12'>
                        <HeaderDashboard />
                    </div>
                    <div className='col-md-12'>
                        <NavBar />
                    </div>
                </div>
                <div className="container">
                    {
                        this.state.articles.length &&
                        <Header articles={this.state.articles.slice(0, 5)} />
                    }
                    <div className='row'>
                        <div className='col-md-6'>
                            {this._renderArticle()}

                        </div>

                        <div className='col-md-6'>
                            <span className='aticle_title'>Popular on Medium</span>
                            {this.renderArt()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

