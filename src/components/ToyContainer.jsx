import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, onDeleteToy }) {
  // Render individual ToyCard components for each toy in the toys array
  return (
    <div id="toy-collection">
      {toys.map((toy) => (
        <ToyCard key={toy.id} toy={toy} onDeleteToy={onDeleteToy} />
      ))}
    </div>
  );
}

export default ToyContainer;
