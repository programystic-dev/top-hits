const getApiUrl = (limit = 100) => `https://itunes.apple.com/us/rss/topalbums/limit=${limit}/json`;

export default function fetchHits() {
  return fetch(getApiUrl())
           .then(response => response.json())
}
