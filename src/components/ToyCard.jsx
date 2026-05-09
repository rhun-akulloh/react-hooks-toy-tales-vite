import React from "react";

function ToyCard({ toy, onDeleteToy, onUpdateToy }) {
  // Handle like button click - sends PATCH request to backend to increase likes
  function handleLike() {
    const newLikes = toy.likes + 1;
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ likes: newLikes }),
    })
      .then((res) => res.json())
      .then((updatedToy) => onUpdateToy(updatedToy));
  }

  // Handle delete button click - sends DELETE request to backend
  function handleDelete() {
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "DELETE",
    }).then(() => onDeleteToy(toy.id));
  }

  return (
    <div className="card" data-testid="toy-card">
      {/* Display the toy's name */}
      <h2>{toy.name}</h2>
      {/* Display the toy's image */}
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      {/* Display the toy's current likes count */}
      <p>{toy.likes} Likes </p>
      <button className="like-btn" onClick={handleLike}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDelete}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
