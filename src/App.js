import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'


class App extends React.Component{

  state = {
    display: false,
    allToys: []
  }

  componentDidMount(){
    fetch("http://localhost:4000/toys")
    .then((response) => response.json())
    .then(toys => {
      this.setState({
        allToys: toys
      })

    })
  }

  createToy = (newToy) => {
    this.setState({
      allToys: [...this.state.allToys, newToy]
    })
  }

  updateToy = (updatedToy) => {
    const updatedToys = this.state.allToys.map((toy) => {
      if (toy.id === updatedToy.id){
        return updatedToy
      }
      else {
        return toy
      }
    })

    this.setState({
      allToys: updatedToys
    })
    
  }

  deleteToy = (id) => {
    const updatedToys = this.state.allToys.filter((toy) => toy.id !== id)
    
    this.setState({
      allToys: updatedToys
    })

  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  render(){
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm createToy={this.createToy}/>
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer deleteToy={this.deleteToy} updateToy={this.updateToy} toys={this.state.allToys}/>
      </>
    );
  }

}

export default App;


//App state- toy array, component did mount- fetch, 


  //header


  //toyform


  //toycontainer


  //toycard