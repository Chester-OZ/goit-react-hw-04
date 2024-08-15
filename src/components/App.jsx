import './App.css'
import { useEffect, useState } from 'react'
import ErrorMessage from './ErrorMessage/ErrorMessage'
import ImageGallery from './ImageGallery/ImageGallery'
import ImageModal from './ImageModal/ImageModal'
import Loader from './Loader/Loader'
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn'
import SearchBar from './SearchBar/SearchBar'
import fetchImages from '../api/unsplash'

export default function App() {
  const isModalState = {
    isShow: false,
    url: '',
    alt: '',
  }

  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)
  const [page, setPage] = useState(1)
  const [query, setQuery] = useState('')
  const [modalData, setModalData] = useState(isModalState)
  const [totalPages, setTotalPages] = useState()

  useEffect(() => {
    if (!query) {
      return
    }

    async function getData() {
      try {
        setIsLoading(true)
        setError(false)
        const { results, totalPages } = await fetchImages(query, page)
        setImages((prevImages) => {
          return [...prevImages, ...results]
        })
        setTotalPages(totalPages)
      } catch (error) {
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }

    getData()
  }, [query, page])

  const handleSearch = async (newQuery) => {
    setQuery(newQuery)
    setPage(1)
    setImages([])
  }

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1)
  }

  const openModal = (url, alt) => {
    setModalData({
      isShow: true,
      url,
      alt,
    })
  }

  const closeModal = () => {
    setModalData(isModalState)
  }

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage>Please, reload the page</ErrorMessage>}
      {images.length > 0 && (
        <ImageGallery images={images} openModal={openModal} />
      )}
      {images.length > 0 && !isLoading && page < totalPages && (
        <LoadMoreBtn onClick={handleLoadMore}>Lode more</LoadMoreBtn>
      )}
      {isLoading && <Loader isLoading={isLoading} />}
      <ImageModal
        onCloseModal={closeModal}
        isOpen={modalData.isShow}
        modalUrl={modalData.url}
        modalAlt={modalData.alt}
      />
    </div>
  )
}
