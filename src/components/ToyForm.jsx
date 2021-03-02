import React, { Component } from 'react';

class ToyForm extends Component {

  constructor(){
    super()
    this.state = {
      name: "",
      image: ""
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })

  }

  handleSubmit = (e) => {
    e.preventDefault()

    const newToy = {
      ...this.state,
      likes: 0
    }

    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newToy)
    }

    fetch("http://localhost:4000/toys", reqObj)
    .then((response) => response.json())
    .then(newToy => {
      console.log(newToy)
      this.props.createToy(newToy)
    })

  }

  render() {
    return (
      <div className="container">
        <form onSubmit={event => this.handleSubmit(event)} className="add-toy-form">
          <h3>Create a toy!</h3>
          <input type="text" name="name" placeholder="Enter a toy's name..." className="input-text" value={this.state.name} onChange={(e) => this.handleChange(e)}/>
          <br/>
          <input type="text" name="image" placeholder="Enter a toy's image URL..." className="input-text" value={this.state.image} onChange={(e) => this.handleChange(e)}/>
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit"/>
        </form>
      </div>
    );
  }

}

export default ToyForm;
