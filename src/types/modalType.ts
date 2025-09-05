export interface ModalType {
  isOpen: boolean;
  onClose: () => void;
  index: number | null;
}