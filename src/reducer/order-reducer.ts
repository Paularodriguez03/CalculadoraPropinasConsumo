import { menuItems } from './../data/db';
import { MenuItemType, OrderItem } from "../types";


export type OrderActions = 
    { type: 'add-item', payload: { item: MenuItemType}} |
    { type: 'remove-item', payload: { id: MenuItemType["id"]}} |
    { type: 'place-order'} |
    { type: 'set-tip', payload: { tip: number}}

export type OrderState = {
    data: MenuItemType[],
    order: OrderItem[],
    tip: number //?
};

const localstorageState = (): OrderItem[] => {
    return JSON.parse(localStorage.getItem('order')!) || []
}


export const initialState = {
    data: menuItems,
    order: localstorageState(),
    tip: 0
}

export const orderReducer = (state: OrderState, action: OrderActions) => {

    if (action.type === 'add-item') {
        const itemExiste = state.order.find((orderItem) => orderItem.id === action.payload.item.id);
        let updateItem: OrderItem[] = [];
        if (itemExiste) {
            updateItem = state.order.map((orderItem) => orderItem.id === action.payload.item.id ? { ...orderItem, quantity: orderItem.quantity + 1 } : orderItem);
        } else {
            const newItem = { ...action.payload.item, quantity: 1 };
            updateItem = [...state.order, newItem];
        }

        return {
            ...state,
            order: updateItem
        }
        
    }


    if (action.type === 'remove-item') {
        const updateItem = state.order.filter((orderItem) => orderItem.id !== action.payload.id);
        return {
            ...state,
            order: updateItem
        }
        
    }

    if (action.type === 'place-order') {
        return {
            ...state,
            order: [],
            tip: 0
        }
    }

    if (action.type === 'set-tip') {
        return {
            ...state,
            tip: action.payload.tip
        }
    }
    return state
}
