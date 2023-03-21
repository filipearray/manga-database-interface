import React from "react";
import './MangaRow.css'

export default ({title, items}) => { // "items" é o mangaItems e o "item" é o index (i)
    return (
        <div className="movieRow">
            <h2>{title}</h2>
            <div className="movieRow--listarea">
                <div className="movieRow--list">
                {items.length > 0 && items.map((item, key) => (
                    <div key={key} className="movieRow--item">
                        <img src={item.coverImg} key={key} alt={item.name}></img>
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}