import React, { useEffect, useState} from 'react'
import List from './components/list';
import Button from './components/button';
import SpellsModal from './SpellsModal';
import { getSpells } from "./services/Api";
import type { Spell } from "./types";

import './styles.css'

function Spells() {
  const [spells, setSpells] = useState<Spell[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    getSpells().then(setSpells).catch(console.error);
  }, []);

  return (
     <>
      <h1>Spells</h1>
      <List 
        className="spells-list"
        items={spells}
        renderItem={(spell, index) => (
          <Button className="spell-button" onClick={() => setSelectedIndex(index)}>
            <strong>{spell.spell}</strong>
          </Button>
        )}
      />

       <SpellsModal
        isOpen={selectedIndex !== null}
        onClose={() => setSelectedIndex(null)}
        index={selectedIndex}
      />
    </>
  )
}

export default Spells
