import { OrderItem, MenuItemType } from '../types';
import { formatCurrency } from '../helpers/index';

type OrderProps = {
    order: OrderItem[],
    removeItem: (id: MenuItemType["id"]) => void
}
export const OrderContents = ({ order, removeItem }: OrderProps) => {

    console.log(order);

    return (
        <>
            <h2 className="text-2xl text-indigo-700 uppercase font-medium" >Orden</h2>
            <div className='space-y-3 mt-10'>
                {order.map((item) => (
                    <div key={item.id} className='w-full flex justify-between items-center border-t border-gray-200 py-3 last-of-type:border-b'>

                        <div className='w-full'>
                            <div className='w-full flex justify-between'>
                                <p className='flex-1 text-lg'>{item.name}</p>
                                <p className='flex-1 text-lg'>{formatCurrency(item.price)}</p>
                            </div>
                            <div className='w-full flex justify-between'>
                                <p className='flex-1 font-black'> Cantidad: {item.quantity} </p>
                                <p className='flex-1 font-black'>Total: {formatCurrency(item.price * item.quantity)}</p>

                            </div>
                        </div>

                        <button
                            className='bg-red-500 text-white h-8 w-8 rounded-full'
                            onClick={() => removeItem(item.id)}>X</button>
                    </div>
                ))
                }
            </div>
        </>

    )
}
