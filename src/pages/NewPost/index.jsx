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
    //const { title, image, description, author, estimatedReadTime, date, fullDescription } = this.state;
    const { title, image, description, author, category } = this.state;
    const data = {
      title,
      image,
      description,
      author,
      category
    }
    SubmitNewPostService(data, this.handleServiceResponse)
  }

  render() {
    //const { title, image, description, author, estimatedReadTime, date, fullDescription, success } = this.state;
    const { title, image, description, author, category, success } = this.state;
    if (success) {
      window.location.href = "/";
    }
    return (
      <div>
        <div className='row'>
          <div className='col-md-12'>
            <HeaderDashboard />
          </div>
          <div className='rp_nav col-md-12'>
            <NavBar />
          </div>
        </div>
        <div>
          <div className="wrapper fadeInDown">
            {/*<div id="formContent">*/}
            <div id="formPost">
              <h1 className="titlePost">NUEVA PUBLICACIÓN</h1>
              <br/>
              <h3 className="subtitlePost">TITULO</h3>
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
                  value={image}
                  onChange={this.handleInput}
                  name={"image"}
                  placeholder={"Image URL"}
                />
                <input id="escribe"
                  type={"text"}
                  value={description}
                  onChange={this.handleInput}
                  name={"description"}
                  placeholder={"Escribe..."}
                />
                <input
                  type={"text"}
                  value={category}
                  onChange={this.handleInput}
                  name={"category"}
                  placeholder={"Tags"}
                /> 
                <input
                  type={"text"}
                  value={author}
                  onChange={this.handleInput}
                  name={"author"}
                  placeholder={"Author"}
                />
                <br/>
                <button className="postSubmit" type="submit"><h3>Publicar</h3></button>
                <br/>
                <p> </p>
              </form>
              </div>
           {/* </div> */}
          </div>
        </div>
      </div>
    )
  }
}
