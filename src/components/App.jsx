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

  const handleSearch = async (newQuery) => {
    try {
      setImages([])
      setError(false)
      setIsLoading(true)
      const data = await fetchImages(newQuery)
      setImages(data)
    } catch (error) {
      setError(true)
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {isLoading && <Loader isLoading={isLoading} />}
      {error && <ErrorMessage>Please, reload the page</ErrorMessage>}
      {images.length > 0 && <ImageGallery images={images} />}
      <LoadMoreBtn />
      <ImageModal />
    </div>
  )
}
