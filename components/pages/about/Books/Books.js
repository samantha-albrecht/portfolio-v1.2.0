import MainGrid from '@components/foundation/MainGrid'
import Typography from '@components/foundation/Typography'
import styles from './Books.module.scss'

function BookTitles() {
  const books = [
    {
      title: 'Permission To Screw Up',
      author: 'Kristen Hadeed',
      coverImage: '/images/books/permission-to-screw-up.jpg',
    },
    {
      title: 'Daring Greatly',
      author: 'Brene Brown',
      coverImage: '/images/books/daring-greatly.jpg',
    },
    {
      title: 'Leaders Eat Last',
      author: 'Simon Sinek',
      coverImage: '/images/books/leaders-eat-last.jpg',
    },
    {
      title: 'The Accidental Creative',
      author: 'Todd Henry',
      coverImage: '/images/books/accidental-creative.jpg',
    },
    {
      title: 'Quiet',
      author: 'Susan Cain',
      coverImage: '/images/books/quiet.jpg',
    },
    // {
    //     title: 'Make Your Bed',
    //     author: 'Admiral William H. McRaven',
    //     coverImage: '/img/books/make-your-bed.jpg',
    // },
    {
      title: "Man's Search For Meaning",
      author: 'Viktor E. Frankl',
      coverImage: '/images/books/mans-search-for-meaning.jpg',
    },
  ]

  return (
    <div className={styles.bookTitles}>
      {books.map((book, index) => (
        <div className={styles.bookGroup} key={index}>
          <img
            className={styles.bookCoverImage}
            src={book.coverImage}
            alt={`Book cover image: ${book.title}`}
          />
          <div className={styles.bookInfo}>
            <Typography variant="titleM">{book.title}</Typography>
            <Typography variant="bodySmall">{book.author}</Typography>
          </div>
        </div>
      ))}
    </div>
  )
}

function Books() {
  return (
    <div className={styles.booksWrapper}>
      <MainGrid>
        <div className={styles.innerWrapper}>
          <div className={styles.headingWrapper}>
            <Typography variant="caption">Books</Typography>
            <Typography variant="title2xl">Good reads</Typography>
          </div>
          <div className={styles.bodyWrapper}>
            <Typography variant="body">
              I haven’t always been an avid reader, but in the last two years
              I've gained a new appreciation for books and developed a love for
              reading. I read because I crave new thoughts, ideas, and
              perspectives that inspire, teach, and challenge&nbsp;me.
            </Typography>
            <Typography variant="titleM">
              These are a few of my favorites:
            </Typography>
          </div>
          <BookTitles />
        </div>
      </MainGrid>
    </div>
  )
}

export default Books
