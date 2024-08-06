import { Dispatch } from "react"
import type { MenuItemType } from "../types/index"
import { OrderActions } from "../reducer/order-reducer"
type MenuItemProps = {
  item: MenuItemType,
  dispatch: Dispatch<OrderActions>
}
export const MenuItem = ({ item, dispatch}: MenuItemProps) => {
  return (
    <button
      className="border-2 border-indigo-500 p-2 w-full flex justify-between rounded-lg hover:bg-indigo-300 hover:text-white"
      onClick={() => dispatch({ type: "add-item", payload: {item} })}>
      <p>{item.name}</p>
      <p>${item.price}</p>
    </button>
  )
}
