import { useState } from "react"
import type { OrderItem, MenuItemType } from "../types/index"

export const useOrder = () => {

    const [order, setOrder] = useState<OrderItem[]>([]);
    const [tip, setTip] = useState(0);

    const addItem = (item: MenuItemType) => {
        const itemExiste = order.find((orderItem) => orderItem.id === item.id);
        if (itemExiste) {
            const updateItem = order.map((orderItem) => orderItem.id === item.id ? { ...orderItem, quantity: orderItem.quantity + 1 } : orderItem);
            setOrder(updateItem);
        } else {
            const newItem = { ...item, quantity: 1 };
            setOrder([...order, newItem]);
        }
    }

    const removeItem = (id: MenuItemType["id"]) => {
        const updateItem = order.filter((orderItem) => orderItem.id !== id);
        setOrder(updateItem);
    }

    const placeOrder = () => {
        setOrder([]);
        setTip(0);
    }

    return {
        order,
        tip, 
        setTip,
        addItem,
        removeItem,
        placeOrder
    }
}
