import axios from 'axios'

const ACCESS_KEY = 'Y3fYvsyJcrdRWSwXjgy-bOFjMNdRn_LXKUDe3tj9Ly8'

axios.defaults.baseURL = 'https://api.unsplash.com'
axios.defaults.headers.common = {
  Authorization: `Client-ID ${ACCESS_KEY}`,
  'Accept-Version': 'v1',
}

export const fetchImages = async (query, pages) => {
  const response = await axios.get('/search/photos', {
    params: {
      query,
      pages,
      per_page: 12,
      orientation: 'landscape',
    },
  })

  return response.data.results
}
