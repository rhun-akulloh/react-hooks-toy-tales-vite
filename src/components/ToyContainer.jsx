import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys }) {
  // Render individual ToyCard components for each toy in the toys array
  return (
    <div id="toy-collection">
      {toys.map((toy) => (
        <ToyCard key={toy.id} toy={toy} />
      ))}
    </div>
  );
}

export default ToyContainer;
