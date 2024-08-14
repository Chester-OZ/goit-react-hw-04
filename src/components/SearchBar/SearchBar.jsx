import css from './SearchBar.module.css'
import { IoIosSearch } from 'react-icons/io'
import toast, { Toaster } from 'react-hot-toast'

export default function SearchBar({ onSearch }) {
  const notify = () =>
    toast.error('Please enter a search query', {
      duration: 2000,
      position: 'top-right',
    })

  const handleSubmit = (e) => {
    console.log(e)
    e.preventDefault()
    const query = e.target.elements.search.value.trim()

    if (!query) {
      return notify()
    }

    onSearch(query)
    e.target.reset()
  }

  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">
          <IoIosSearch fontSize={32} />
        </button>
        <Toaster />
      </form>
    </header>
  )
}
