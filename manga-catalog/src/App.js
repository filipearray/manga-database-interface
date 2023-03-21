import React, { useEffect, useState } from "react";
import Mdb from "./data/mangadb.js"; // Mdb is mangaDatabase.
import MangaRow from "./components/manga-row/MangaRow";
import PrincipalManga from "./components/principal-manga/PrincipalManga";
import "./App.css";

export default () => {
  const [mangaList, setMangaList] = useState([]);
  const [principalData, setPrincipalData] = useState(null);

  useEffect(() => {
    const fullRender = async () => {
      let inventory = await Mdb.getMangaList();
      setMangaList(inventory); // The mangaList received an empty array to start with, and there will be a function called setMangaList that will start receiving the array with the manga database.

      // Getting the principal manga.
      let topRatedManga = inventory.filter(
        (index) => index.SEOfriendly === "toprated"
      );
      // Getting a random manga.
      let randomManga = Math.floor(
        Math.random() * topRatedManga[0].mangaItems.length
      );
      let chosenRandomManga = topRatedManga[0].mangaItems[randomManga];
      setPrincipalData(chosenRandomManga);
    };

    fullRender();
  }, []);

  return (
    // Let's make a loop because they are all the same structurally.
    <div className="page">
      {principalData && <PrincipalManga item={principalData} />}

      <section className="lists">
        {mangaList.map((item, key) => (
          <MangaRow key={key} title={item.title} items={item.mangaItems} />
        ))}
      </section>
    </div>
  );
};
