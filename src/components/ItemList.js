import {useDispatch} from "react-redux"
import { addItem } from "../utils/cartSlice"

const ItemList = ({items}) => {
    let imageUrl = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
     
  const dispatch = useDispatch()
  
  const handleClick = (item) => {
    dispatch(addItem(item))
  }

    return (
        <div>
            {items.map(item => (
            <div key={item.card.info.id} className="p-2 m-2 border-b-2 text-left flex justify-between">
               <div className="w-9/12 ">
               <div className="py-2">
                  <span className="text-left">{item.card.info.name} {" - "}</span>
                  <span>₹{item.card.info.defaultPrice ? item.card.info.defaultPrice/100 : item.card.info.price/100}</span>
               </div>
               <p className="text-xs">{item.card.info.description}</p>
               </div>

               <div className="w-3/12 p-2">
                <div className="absolute">
                    <button 
                    className="p-2 mx-12 rounded-lg bg-white shadow-lg"
                    onClick={() => handleClick(item)}
                    >Add+</button>
               </div>    
               <img src={imageUrl+item.card.info.imageId} className="w-full h-20 object-cover rounded-lg"></img>
               </div>
            </div>
            ) )}
        </div>
    )
}

export default ItemList