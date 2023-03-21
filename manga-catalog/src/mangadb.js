const BASE_URL = 'http://localhost:3000';

async function concatFetch(endpoint) {
  const req = await fetch(`${BASE_URL}${endpoint}`);
  const json = await req.json();
  return json;
}

const Mdb = {
    getMangaList: async () => {
        return [
            {
                SEOfriendly: 'toprated', // SEOfriendly is like a slug.
                title: 'Top Rated',
                mangaItems: await concatFetch('/manga/toprated')
            },
            {
                SEOfriendly: 'action',
                title: 'Action',
                mangaItems: await concatFetch('/manga/action')
            },
            {
                SEOfriendly: 'drama', 
                title: 'Drama',
                mangaItems: await concatFetch('/manga/drama')
            },
            {
                SEOfriendly: 'sports', 
                title: 'Sports',
                mangaItems: await concatFetch('/manga/sports')
            },
            {
                SEOfriendly: 'comedy',
                title: 'Comedy',
                mangaItems: await concatFetch('/manga/comedy')
            },
            {
                SEOfriendly: 'trending',
                title: 'Trending',
                mangaItems: await concatFetch('/manga/trending')
            },
            {
                SEOfriendly: 'awardwinning', 
                title: 'Award Winning',
                mangaItems: await concatFetch('/manga/awardwinning')
            },
            {
                SEOfriendly: 'ongoing',
                title: 'Ongoing',
                mangaItems: await concatFetch('/manga/ongoing')
            },
    ];
      },     
};

export default Mdb;
