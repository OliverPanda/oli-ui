import { createContext } from 'react'

export type OnSelectCallback = (selectedIndex: number) => void;

export interface MenuContextProps {
  index: number;
  onSelect?: OnSelectCallback
}

const MenuContext = createContext<MenuContextProps>({
  index: 0
})

export default MenuContext