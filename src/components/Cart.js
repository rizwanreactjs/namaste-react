import { useSelector,useDispatch } from "react-redux";

import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice"

const Cart = () => {
  
    const cartItems = useSelector((store) => store.reducer.items)

    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(clearCart())
      }

    return (
        <div className="text-center m-4 p-4">
            <h1 className="font-bold text-xl">Cart</h1>
            <div className="w-6/12 m-auto">
                <button className="m-2 p-2 bg-black text-white rounded-lg" onClick={handleClick}>Clear Cart</button>
            <ItemList items={cartItems}/>
            </div>
        </div>
    )
}

export default Cart