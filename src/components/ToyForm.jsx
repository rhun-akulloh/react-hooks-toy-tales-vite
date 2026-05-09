import React, { useState } from "react";

function ToyForm({ onAddToy }) {
  // State to manage form input values for controlled component
  const [formData, setFormData] = useState({
    name: "",
    image: "",
  });

  // Handle input changes and update form state
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  // Handle form submission - POST request to create new toy
  function handleSubmit(e) {
    e.preventDefault();

    // Create new toy object with initial likes set to 0
    const newToy = {
      name: formData.name,
      image: formData.image,
      likes: 0,
    };

    // Send POST request to backend to create toy
    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newToy),
    })
      .then((res) => res.json())
      .then((toy) => {
        // Add toy to parent state and clear form
        onAddToy(toy);
        setFormData({ name: "", image: "" });
      });
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={formData.image}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
