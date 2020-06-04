import React, { Component } from 'react'

import HeaderDashboard from '../Dashboard/components/HeaderDashboard'
import IconsSocialMedia from '../../components/icons-social-media'

import './post-details.css'

export default class PostDetails extends Component {
  constructor (props) {
    super(props)
    this.state = {
      post: {}
    }
  }

  async componentWillMount () {
    const id = this.props.match.params.id

    fetch(`http://localhost:8080/posts/${id}`)
      .then((response) => response.json())
      .then(({ data: { post } }) => {
        this.setState({
          post
        })
      })
  }

  render () {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <HeaderDashboard />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <br/>
            <h1>{this.state.post.title}</h1>
            <br/>
          </div>
        </div>
        <div className="row">
          <div className="col-9">
            <h2 dangerouslySetInnerHTML={{__html:this.state.post.description}}></h2>
          </div>
          <div className="col-3">
            <IconsSocialMedia />
          </div>
        </div>
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <img src={this.state.post.image} alt="" className='imageDetails' />
          </div>
          <div className="col-12">
            <br/>
            <h3 dangerouslySetInnerHTML={{__html:this.state.post.fullDescription}}></h3>
          </div>
        </div>
      </div>
    )
  }

}