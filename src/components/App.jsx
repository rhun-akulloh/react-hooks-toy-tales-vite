import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  // State for toggling the form visibility
  const [showForm, setShowForm] = useState(false);
  
  // State to store all toys fetched from the backend
  const [toys, setToys] = useState([]);

  // Fetch all toys from the backend on component mount
  // This runs once when the component first renders
  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  // Toggle the form visibility when "Add a Toy" button is clicked
  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  // Handle adding a new toy to the state when form is submitted
  function handleAddToy(newToy) {
    setToys([...toys, newToy]);
    setShowForm(false);
  }

  // Handle deleting a toy from state when delete button is clicked
  function handleDeleteToy(id) {
    setToys(toys.filter((toy) => toy.id !== id));
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddToy={handleAddToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} onDeleteToy={handleDeleteToy} />
    </>
  );
}

export default App;
