const mangaDb = require('../src/data/mangadb.json');

function getManga(request, response){
    return response.json(mangaDb);
};

function getTopRatedManga(request, response) {
    const topRatedManga = mangaDb.filter(manga => manga.toprated === "true");
    return response.json(topRatedManga);
  }

function getTrendingManga(request, response) {
    const trendingManga = mangaDb.filter(manga => manga.trending === "true");
    return response.json(trendingManga);
  }

function getActionManga(request, response){
    const actionManga = mangaDb.filter(manga => manga.genres.includes("Action"));
    return response.json(actionManga);
};

function getDramaManga(request, response){
    const dramaManga = mangaDb.filter(manga => manga.genres.includes("Drama"));
    return response.json(dramaManga);
};

function getSportsManga(request, response){
    const sportsManga = mangaDb.filter(manga => manga.genres.includes("Sports"));
    return response.json(sportsManga);
};

function getComedyManga(request, response){
    const comedyManga = mangaDb.filter(manga => manga.genres.includes("Comedy"));
    return response.json(comedyManga);
};

function getAwardWinning(request, response){
    const awardWinningManga = mangaDb.filter(manga => manga.toprated === "true");
    return response.json(awardWinningManga);
};

function getOngoing(request, response){
    const ongoingManga = mangaDb.filter(manga => manga.ongoing === "true");
    return response.json(ongoingManga);
};

module.exports = {
    getManga,
    getTopRatedManga,
    getTrendingManga,
    getActionManga,
    getDramaManga,
    getSportsManga,
    getComedyManga,
    getAwardWinning,
    getOngoing
  };
  