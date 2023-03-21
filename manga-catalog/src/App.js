    import React, { useEffect, useState } from "react";
    import Mdb from "./mangadb.js"; // Mdb is mangaDatabase
    import MangaRow from "./components/MangaRow.js";
    import FeaturedManga from "./components/FeaturedManga.js";
    import "./App.css"


    export default () => {

      const [mangaList, setMangaList] = useState([]);
      const [featuredData, setFeaturedData] = useState(null)

      useEffect(() => {
        const fullRender = async () => {
        let inventory = await Mdb.getMangaList();
        setMangaList(inventory); // O mangaList recebeu um array vazio pra começar, e vai ter uma função chamada setMangaList que vai começar recebendo o array com o banco de dados de mangás.

        // Pegando o Featured
        let topRatedManga = inventory.filter(index => index.SEOfriendly === 'toprated')
        // Pegando um mangá aleatório
        let randomManga = Math.floor(Math.random() * (topRatedManga[0].mangaItems.length))
        let chosenRandomManga = topRatedManga[0].mangaItems[randomManga];
        setFeaturedData(chosenRandomManga);  
        };  

        fullRender();
      }, []); 

      return (  // Vamos fazer um loop pois todos são iguais estruturalmente.
        <div className="page">

        {featuredData && <FeaturedManga item={featuredData} />}

          <section className="lists">
            {mangaList.map((item, key) => (
              <MangaRow key={key} title={item.title} items={item.mangaItems} />
            ))} 
          </section>
        </div>
      )
    };





