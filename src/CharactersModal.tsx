import React, { useEffect, useState} from 'react'
import Modal from './components/modal';
import { getCharacterByIndex } from "./services/Api";
import type { Characters, ModalType } from "./types";
import './styles.css'
import Span from './components/span';

function CharactersModal({ index, isOpen, onClose }: ModalType) {
  const [selectedChars, setSelectedChars] = useState<Characters | null>(null);

  useEffect(() => {
    if (isOpen && index !== null) {
      getCharacterByIndex(index)
        .then(setSelectedChars)
        .catch(console.error);
    }
  }, [index, isOpen]);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        {selectedChars && (
          <>
            <img src={selectedChars.image} alt={selectedChars.fullName}/>
            <p><Span>Name: </Span>{selectedChars.fullName}</p>
            <p><Span>Nickname: </Span>{selectedChars.nickname}</p>
            <p><Span>House: </Span>{selectedChars.hogwartsHouse}</p>
            <p><Span>Interpreted By: </Span>{selectedChars.interpretedBy}</p>
            {selectedChars.children && selectedChars.children.length > 0 && (
              <p>
                <Span>Children: </Span>
                {selectedChars.children.length === 0
                  ? "N/A"
                  : selectedChars.children.length === 1
                  ? selectedChars.children[0]
                  : selectedChars.children.length === 2
                  ? `${selectedChars.children[0]} and ${selectedChars.children[1]}`
                  : selectedChars.children.join(", ")}
              </p>    
            )}
            <p><Span>Birth Date: </Span>{selectedChars.birthdate}</p>
          </>
        )}
      </Modal>
    </>
  )
}

export default CharactersModal
