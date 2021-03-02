import React, { Component } from 'react';

class ToyCard extends Component {

  // constructor(){
  //   super()
  //   this.state = {
  //     toy: this.props.toy
  //   }
  // }

  handleLike = (e) => {
    const { id } = this.props.toy
    // const id = this.props.toy.id
    //   another way to write it^
        
    const reqObj = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        likes: this.props.toy.likes + 1
        })
    }

    fetch(`http://localhost:4000/toys/${id}`, reqObj)
    .then((response) => response.json())
    .then(updatedToy => {
      console.log(updatedToy)
      this.props.updateToy(updatedToy)
    })
  }

  handleDelete = (e) => {
    const { id } = this.props.toy

    fetch(`http://localhost:4000/toys/${id}`, { method: 'DELETE' })
    .then((response) => response.json())
    .then(data => {
      console.log(data)
      this.props.deleteToy(id)
    })

    
  }



  render() {
    return (
      <div className="card">
        <h2>{this.props.name}</h2>
        <img src={this.props.image} alt={this.props.name} className="toy-avatar" />
        <p>{this.props.likes} Likes </p>
        <button onClick={this.handleLike} className="like-btn">Like {'<3'}</button>
        <button onClick={this.handleDelete} className="del-btn">Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
