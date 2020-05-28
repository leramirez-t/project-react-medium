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
            <h1>{this.state.post.title}</h1>
          </div>
          <div className="col-9"></div>
          <div className="col-3">
            <IconsSocialMedia />
          </div>
          <div className="col-8 d-flex">
            <img src={this.state.post.image} alt="" className='imageDetails' />
          </div>
          <div className="col-12">
            <h3 >
              {this.state.post.description}</h3>
          </div>

        </div>
      </div>
    )
  }

}