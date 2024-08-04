import type { MenuItemType } from "../types/index"
type MenuItemProps = {
  item: MenuItemType,
  addItem: (item: MenuItemType) => void
}
export const MenuItem = ({ item, addItem }: MenuItemProps) => {
  return (
    <button
      className="border-2 border-indigo-500 p-2 w-full flex justify-between rounded-lg hover:bg-indigo-300 hover:text-white"
      onClick={() => addItem(item)}>
      <p>{item.name}</p>
      <p>${item.price}</p>
    </button>
  )
}
