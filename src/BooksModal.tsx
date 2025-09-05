import { useEffect, useState} from 'react'
import Modal from './components/modal';
import { getBookByIndex } from "./services/Api";
import type { Books, ModalType } from "./types";
import './styles.css'
import Span from './components/span';

function BooksModal({ index, isOpen, onClose }: ModalType) {
  const [selectedBook, setSelectedBook] = useState<Books | null>(null);

  useEffect(() => {
    if (isOpen && index !== null) {
      getBookByIndex(index)
        .then(setSelectedBook)
        .catch(console.error);
    }
  }, [index, isOpen]);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        {selectedBook && (
          <>
            <img src={selectedBook.cover} alt={selectedBook.title}/>
            <p><Span>Book Number: </Span>{selectedBook.number}</p>
            <p><Span>Title: </Span>{selectedBook.title}</p>
            <p><Span>Original Title: </Span>{selectedBook.originalTitle}</p>
            <p><Span>Release Date: </Span>{selectedBook.releaseDate}</p>
            <p><Span>Pages: </Span>{selectedBook.pages}</p>
            <p><Span>Description: </Span>{selectedBook.description}</p>
          </>
        )}
      </Modal>
    </>
  )
}

export default BooksModal
