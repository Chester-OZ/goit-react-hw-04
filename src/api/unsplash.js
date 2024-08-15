import axios from 'axios'

const ACCESS_KEY = import.meta.env.VITE_ACCESS_KEY

const apiClient = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID ${ACCESS_KEY}`,
    'Accept-Version': 'v1',
  },
})

export default async function fetchImages(query, page) {
  const response = await apiClient.get('/search/photos', {
    params: {
      query,
      page,
      per_page: 12,
      orientation: 'landscape',
    },
  })

  const { results: results, total_pages: totalPages } = response.data
  return { results, totalPages }
}
