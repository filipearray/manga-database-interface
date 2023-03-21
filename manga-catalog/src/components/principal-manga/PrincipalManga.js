import React from "react";
import "../principal-manga/PrincipalManga.css";

export default ({ item }) => {
  // item é igual a featuredData la no App
  return (
    <section
      className="featured"
      style={{
        backgroundImage: `url(${item.coverImg})`,
      }}
    >
      <div className="featured-vertical">
        <div className="featured-horizontal">
          <div className="featured-name">{item.name}</div>

          <div className="featured-info">
            <div className="featured-points">★ {item.score}</div>
            <div className="featured-year">{item.publishingYear}</div>
          </div>
          <div className="featured-description">{item.description}</div>
          <div className="featured-buttons">
            <a href="" className="featured-watchbutton">
              ▶ Read
            </a>
            <a href="" className="featured-mylistbutton">
              + Add to Favorites
            </a>
          </div>

          <div className="featured-genres">
            Genres: {item.genres.join(", ")}
          </div>
        </div>
      </div>
    </section>
  );
};
