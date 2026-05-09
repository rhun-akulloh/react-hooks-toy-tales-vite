import React from "react";

function ToyCard({ toy }) {
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
      <button className="like-btn">Like {"<3"}</button>
      <button className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
