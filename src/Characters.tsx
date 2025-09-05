import { useEffect, useState} from 'react'
import List from './components/list';
import Button from './components/button';
import CharactersModal from './CharactersModal';
import { getChars } from "./services/Api";
import type { Characters } from "./types";

import './styles.css'

function Spells() {
  const [characters, setCharacters] = useState<Characters[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    getChars().then(setCharacters).catch(console.error);
  }, []);

  return (
     <>
      <h1>Characters</h1>
      <List 
        className="spells-list"
        items={characters}
        renderItem={(characters, index) => (
          <Button className="spell-button" onClick={() => setSelectedIndex(index)}>
            <strong>{characters.fullName}</strong>
          </Button>
        )}
      />

       <CharactersModal
        isOpen={selectedIndex !== null}
        onClose={() => setSelectedIndex(null)}
        index={selectedIndex}
      />
    </>
  )
}

export default Spells
