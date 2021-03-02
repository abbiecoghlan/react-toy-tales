import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = (props) => {

  const allToys = props.toys.map((toy) => {
    return (
      <ToyCard
      toy={toy}
      key={toy.id}
      id={toy.id}
      name={toy.name}
      image={toy.image}
      likes={toy.likes}
      updateToy={props.updateToy}
      deleteToy={props.deleteToy}
      />
    )
  })



  console.log(allToys)

  return(
    <div id="toy-collection">
      {allToys}
    </div>
  );
}

export default ToyContainer;
