import { useEffect, useState} from 'react'
import Modal from './components/modal';
import { getSpellByIndex } from "./services/Api";
import type { Spell, ModalType } from "./types";
import './styles.css'
import Span from './components/span';

function SpellsModal({ index, isOpen, onClose }: ModalType) {
  const [selectedSpell, setSelectedSpell] = useState<Spell | null>(null);

  useEffect(() => {
    if (isOpen && index !== null) {
      getSpellByIndex(index)
        .then(setSelectedSpell)
        .catch(console.error);
        // console.log(selectedSpell)
    }
  }, [index, isOpen]);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        {selectedSpell && (
          <>
            <p><Span>Spell: </Span>{selectedSpell.spell}</p>
            <p><Span>Use: </Span>{selectedSpell.use}</p>
          </>
        )}
      </Modal>
    </>
  )
}

export default SpellsModal
