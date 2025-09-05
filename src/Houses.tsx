import React, { useEffect, useState} from 'react'
import List from './components/list';
import Button from './components/button';
import HousesModal from './HousesModal';
import { getHouses } from "./services/Api";
import type { Houses } from "./types";

import './styles.css'

function Spells() {
  const [houses, setHouses] = useState<Houses[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    getHouses().then(setHouses).catch(console.error);
  }, []);

  return (
     <>
      <h1>Houses</h1>
      <List 
        className="spells-list"
        items={houses}
        renderItem={(house, index) => (
          <Button className="spell-button" onClick={() => setSelectedIndex(index)}>
            <strong>{house.house}</strong>
          </Button>
        )}
      />

       <HousesModal
        isOpen={selectedIndex !== null}
        onClose={() => setSelectedIndex(null)}
        index={selectedIndex}
      />
    </>
  )
}

export default Spells
