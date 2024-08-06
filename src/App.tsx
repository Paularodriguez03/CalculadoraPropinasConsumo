import { menuItems } from "./data/db";
import { MenuItem } from "./components/MenuItem";
import { OrderContents } from "./components/OrderContents";
import { TipPersentageForm } from "./components/TipPersentageForm";
import { OrderTotals } from "./components/OrderTotals";
import { useOrder } from "./hooks/useOrder";
import { useReducer } from "react";
import { initialState, orderReducer } from "./reducer/order-reducer";

function App() {


  const [state, dispatch] = useReducer(orderReducer, initialState)

  return (
    <>
      <header className=" bg-indigo-500  py-5">
        <h1 className="text-center text-4xl text-white font-black">Calculadora de propinas</h1>
      </header>

      <main className="max-w-7xl mx-auto mt-20 grid gap-4 md:grid-cols-2">
        <div>
          <h2 className="text-2xl text-indigo-700 uppercase font-medium" >menu</h2>

          <div className="space-y-3 mt-10">
            {state.data.map((item) => (
              <MenuItem
                key={item.id}
                item={item}
                dispatch={dispatch}/>
            ))}
          </div>


        </div>

        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">

          {state.order.length ?
            (<>
              <OrderContents order={state.order} dispatch={dispatch}/>
              <TipPersentageForm
                tip={state.tip}
                dispatch={dispatch}
              />
              <OrderTotals order={state.order} tip={state.tip} dispatch={dispatch} />
            </>)
            :
            (<p className='text-center'>No hay elementos en el carrito</p>)
          }

        </div>

      </main>
    </>
  )
}

export default App
