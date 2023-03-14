const mangaDb = "../src/data/mangadb.json";
const BASE_URL = "http://localhost:3000";

async function basicFetch(endpoint) {
  const req = await fetch(`${BASE_URL}${endpoint}`);
  const json = await res.json();
  req.json();
}

const mangaDatabase = {
  getMangaDb: async () => {
    return [
        {
            SEOfriendly: 'toprated', // SEOfriendly is like a slug.
            title: 'Top Rated',
            mangaItems: await basicFetch()
        },
        {
            SEOfriendly: 'trending',
            title: 'Trending',
            mangaItems: await basicFetch()
        },
        {
            SEOfriendly: 'action',
            title: 'Action',
            mangaItems: await basicFetch()
        },
        {
            SEOfriendly: 'drama', 
            title: 'Drama',
            mangaItems: await basicFetch()
        },
        {
            SEOfriendly: 'sports', 
            title: 'Sports',
            mangaItems: await basicFetch()
        },
        {
            SEOfriendly: 'comedy',
            title: 'Comedy',
            mangaItems: await basicFetch()
        },
        {
            SEOfriendly: 'awardwinning', 
            title: 'Award Winning',
            mangaItems: await basicFetch()
        },
        {
            SEOfriendly: 'ongoing',
            title: 'Ongoing',
            mangaItems: await basicFetch()
        },
];
  },
};

export default mangaDatabase

/* fetch(mangaDb)
    .then(res => {
        console.log(res.json())
    }) */
