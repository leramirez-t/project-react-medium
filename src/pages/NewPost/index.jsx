import React, { Component } from "react"

// Components
import NavBar from '../Dashboard/components/NavBar'
import HeaderDashboard from '../Dashboard/components/HeaderDashboard'

// Services
import { SubmitNewPost as SubmitNewPostService } from "../../services"

// CSS
import './NewPost.css'
import '../Dashboard/components/HeaderDashboard/HeaderDashboard.css'

export default class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      image: '',
      description: '',
      author: '',
      category: '', 
      estimatedReadTime: '',
      date: '',
      fullDescription: '',
      success: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleServiceResponse = this.handleServiceResponse.bind(this)
  }

  handleInput({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  handleServiceResponse(response) {
    if (response.success) {
      this.setState({
        success: true
      })
    } else {
      console.log(response.error)
    }
  } 

  handleSubmit(event) {
    event.preventDefault();
    const { title, image, description, author, category, estimatedReadTime, date, fullDescription } = this.state;
    const data = {
      title,
      image,
      description,
      author,
      category, 
      estimatedReadTime,
      date,
      fullDescription
    }
    SubmitNewPostService(data, this.handleServiceResponse)
  }

  render() {
    const { title, image, description, author, category, estimatedReadTime, date, fullDescription, success } = this.state;
    if (success) {
      window.location.href = "/";
    }
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
        <div>
          <div className="wrapper fadeInDown">
            <div id="formContent">
              <h1>New Post</h1>
              <form onSubmit={this.handleSubmit}>
                <input
                  type={"text"}
                  value={title}
                  onChange={this.handleInput}
                  name={"title"}
                  placeholder={"Title"}
                />
                <input
                  type={"text"}
                  value={category}
                  onChange={this.handleInput}
                  name={"category"}
                  placeholder={"Category"}
                />
                <input
                  type={"text"}
                  value={image}
                  onChange={this.handleInput}
                  name={"image"}
                  placeholder={"Image URL"}
                />
                <input
                  type={"text"}
                  value={description}
                  onChange={this.handleInput}
                  name={"description"}
                  placeholder={"Description"}
                />
                <input
                  type={"text"}
                  value={author}
                  onChange={this.handleInput}
                  name={"author"}
                  placeholder={"Author"}
                />
                <input
                  type={"text"}
                  value={estimatedReadTime}
                  onChange={this.handleInput}
                  name={"estimatedReadTime"}
                  placeholder={"Estimated Read Time"}
                />
                <input
                  type={"text"}
                  value={date}
                  onChange={this.handleInput}
                  name={"date"}
                  placeholder={"Date"}
                />
                <input
                  type={"text"}
                  value={fullDescription}
                  onChange={this.handleInput}
                  name={"fullDescription"}
                  placeholder={"Feel free to put content for your post here!"}
                />
                <br/>
                <button type="submit"><h1>Submit new post!</h1></button>
                <br/>
                <p> </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
