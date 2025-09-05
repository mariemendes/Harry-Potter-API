import { useEffect, useState} from 'react'
import Modal from './components/modal';
import { getHouseByIndex } from "./services/Api";
import type { Houses, ModalType } from "./types";
import './styles.css'
import Span from './components/span';

function HousesModal({ index, isOpen, onClose }: ModalType) {
  const [selectedHouse, setSelectedHouse] = useState<Houses | null>(null);

  useEffect(() => {
    if (isOpen && index !== null) {
      getHouseByIndex(index)
        .then(setSelectedHouse)
        .catch(console.error);
    }
  }, [index, isOpen]);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        {selectedHouse && (
          <>
            <p><Span>House: </Span>{selectedHouse.house}</p>
            <p><Span>Emoji: </Span>{selectedHouse.emoji}</p>
            <p><Span>Founder: </Span>{selectedHouse.founder}</p>
            <p>
              <Span>Colors: </Span>
              {selectedHouse.colors.length === 0
                ? "N/A"
                : selectedHouse.colors.length === 1
                ? selectedHouse.colors[0]
                : selectedHouse.colors.length >= 2
                ? `${selectedHouse.colors[0]} and ${selectedHouse.colors[1]}`
                : selectedHouse.colors.join(", ")}
            </p>            
            <p><Span>Animal: </Span>{selectedHouse.animal}</p>
          </>
        )}
      </Modal>
    </>
  )
}

export default HousesModal
