import './App.css'
import { useEffect, useState } from 'react'
import ErrorMessage from './ErrorMessage/ErrorMessage'
import ImageGallery from './ImageGallery/ImageGallery'
import ImageModal from './ImageModal/ImageModal'
import Loader from './Loader/Loader'
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn'
import SearchBar from './SearchBar/SearchBar'
import { fetchImages } from '../api/unsplash'

export default function App() {
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)
  const [page, setPage] = useState(1)
  const [query, setQuery] = useState('')

  useEffect(() => {
    if (!query) {
      return
    }

    async function getData() {
      try {
        setIsLoading(true)
        setError(false)
        const data = await fetchImages(query, page)
        setImages((prev) => {
          return [...prev, ...data]
        })
      } catch (error) {
        setError(true)
      } finally {
        setIsLoading(false)
      }
    }

    getData()
  }, [page, query])

  const handleSearch = async (newQuery) => {
    setQuery(newQuery)
    setPage(1)
    setImages([])
  }

  const handleLoadMore = () => {
    setPage(page + 1)
  }
  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage>Please, reload the page</ErrorMessage>}
      {images.length > 0 && <ImageGallery images={images} />}
      {images.length > 0 && !isLoading && (
        <LoadMoreBtn onClick={handleLoadMore}>Lode more</LoadMoreBtn>
      )}
      <ImageModal />
      {isLoading && <Loader isLoading={isLoading} />}
    </div>
  )
}
