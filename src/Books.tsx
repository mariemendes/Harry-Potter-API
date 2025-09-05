import React, { useEffect, useState} from 'react'
import List from './components/list';
import Button from './components/button';
import BooksModal from './BooksModal';
import { getBooks } from "./services/Api";
import type { Books } from "./types";
import './styles.css'

function Spells() {
  const [books, setBooks] = useState<Books[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    getBooks().then(setBooks).catch(console.error);
  }, []);

  return (
     <>
      <h1>Books</h1>
      <List 
        className="spells-list"
        items={books}
        renderItem={(books, index) => (
          <Button className="spell-button" onClick={() => setSelectedIndex(index)}>
            <strong>{books.title}</strong>
          </Button>
        )}
      />

       <BooksModal
        isOpen={selectedIndex !== null}
        onClose={() => setSelectedIndex(null)}
        index={selectedIndex}
      />
    </>
  )
}

export default Spells
