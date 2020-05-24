import React, { Component } from 'react'

export default class BigCard extends Component {
  constructor (props) {
    super(props)
    this.state = {
      image: '',
      title: '',
      description: '',
      author: '',
      date: '',
    }
  }
  render () {
    return (
      <div className="row">
        <div className="col-12">
          <img src="" alt="" />
        </div>
        <div className="col-12">
          title
        </div>
        <div className="col-12">
          description
        </div>
      </div>
    )
  }
}