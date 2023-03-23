import React, { useState } from "react";
import "./MangaRow.css";

export default ({ title, items }) => {
  const [scrollX, setScrollX] = useState(-400);

  function handleLeftArrow() {
    let x = scrollX + Math.round(window.innerWidth) / 2; // Gets the half width of the screen.

    if (x > 0) {
      x = 0;
    }

    setScrollX(x);
  }

  function handleRightArrow() {
    let x = scrollX - Math.round(window.innerWidth) / 2;
    let listWidth = items.length * 150;
    if (window.innerWidth - listWidth > x) {
      x = window.innerWidth - listWidth - 60;
    }

    setScrollX(x);
  }

  return (
    <div className="movieRow">
      <h2>{title}</h2>
      <div className="movieRowLeft" onClick={handleLeftArrow}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enable-background="new 0 0 24 24"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <rect fill="none" height="24" width="24" />
          <g>
            <polygon
              fill="#FFF"
              points="17.77,3.77 16,2 6,12 16,22 17.77,20.23 9.54,12"
              stroke="#FFF"
              stroke-width="2"
            />
          </g>
        </svg>
      </div>
      <div className="movieRowRight" onClick={handleRightArrow}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enable-background="new 0 0 24 24"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <g>
            <path d="M0,0h24v24H0V0z" fill="none" />
          </g>
          <g>
            <polygon
              fill="#FFF"
              points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12"
              stroke="#FFF"
              stroke-width="2"
            />
          </g>
        </svg>
      </div>
      <div className="movieRow-listarea">
        <div
          className="movieRow-list"
          style={{
            marginLeft: scrollX,
            width: items.length * 150,
          }}
        >
          {items.length > 0 &&
            items.map((item, key) => (
              <div key={key} className="movieRow-item">
                <img src={item.coverImg} key={key} alt={item.name}></img>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
