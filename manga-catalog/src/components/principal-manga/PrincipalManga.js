import React from "react";
import "../principal-manga/PrincipalManga.css";

export default ({ item }) => {
  return (
    <section
      className="featured"
      style={{
        backgroundImage: `url(${item.coverImg})`,
      }}
    >
      <div className="featured-vertical">
        <div className="featured-horizontal">
          <div className="featured-2-horizontal">
            <div className="separator"></div>
            <div className="separator2"></div>
            <div className="featured-points">★ {item.score}</div>
            <div className="featured-year">{item.publishingYear}</div>
            <div className="featured-author">{item.story}</div>
            <div className="featured-demographic">{item.demographic}</div>
            <div className="featured-chapters">{item.chapters} chp.</div>
            <div className="featured-vol">{item.volumes} vol.</div>
            <div className="featured-members">{item.members} readers</div>
            <div className="featured-serialization">{item.serialization}</div>
            <div className="featured-genres">{item.genres.join(", ")}</div>
            <a href="" className="featured-watchbutton">
              ▶ Read
            </a>
            <a href="" className="featured-mylistbutton">
              + Add to Favorites
            </a>
            <div className="featured-name">{item.name}</div>
            <div className="featured-description">{item.description}</div>
          </div>
        </div>
      </div>
    </section>
  );
};
