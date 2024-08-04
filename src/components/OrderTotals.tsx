import { useMemo } from 'react';
import { OrderItem } from '../types';
import { formatCurrency } from '../helpers';
type OrderTotalsProps = {
    order: OrderItem[],
    tip: number,
    placeOrder: () => void
}

export const OrderTotals = ({ order, tip, placeOrder}: OrderTotalsProps) => {

    const subTotalAmount = useMemo(() => {
        return order.reduce((total, item) => total + (item.quantity * item.price), 0)
    }, [order])

    const tipAmount = useMemo(() => {
        return subTotalAmount * tip
    }, [subTotalAmount, tip]);

    const totalAmount = useMemo(() => {
        return subTotalAmount + tipAmount
    }, [subTotalAmount, tipAmount]);

    return (
        <>
            <div className="space-y-3">
                <h2 className="font-black text-xl"> Totales y propina:</h2>
                <p>Subtotral a pagar: {' '}

                    <span className="font-bold">{formatCurrency(subTotalAmount)}</span>
                </p>

                <p>Propina: {' '}

                    <span className="font-bold">{formatCurrency(tipAmount)}</span>
                </p>

                <p>Total a pagar: {' '}

                    <span className="font-bold">{formatCurrency(totalAmount)}</span>
                </p>

            </div>

            <button 
            className='bg-teal-500 text-white h-8 w-full rounded-lg hover:bg-teal-400 disabled:opacity-50' 
            disabled={totalAmount === 0}
            onClick={() => placeOrder()}> Guardar orden</button>

        </>
    )
}
