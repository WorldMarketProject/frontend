export interface InfoTypes {
  key: string;
  label: string;
}

export interface MenuTypes {
  key: string;
  label: string;
  url: string;
  children?: MenuTypes[];
}

export interface ModalPropsTypes {
  children: React.ReactNode;
  title: string;
  isOpen: boolean;
  closeModal: () => void;
}
