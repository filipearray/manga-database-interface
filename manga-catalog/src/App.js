  import React, { useEffect } from "react";
  import Mdb from "./mangadb.js"; // Mdb is mangaDatabase

  export default () => {

    useEffect(() => {
      const fullRender = async () => {
      const inventory = await Mdb.getMangaList();
      console.log(inventory);
      };

      fullRender();
    }, []);

    return (  
      <header>
        
      </header>
    )
  };





