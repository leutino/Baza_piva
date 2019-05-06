
const getBeersForPage = i => {
  return fetch (`https://api.punkapi.com/v2/beers?page=${i}&per_page=80`)
  .then(res => res.json())
}

export default getBeersForPage;
