import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  
  const {resId} = useParams()
  const menuData = useRestaurantMenu(resId)

  if(menuData === null){
    return (
      <Shimmer/>
    )
  }

  const {itemCards} = menuData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
  const {name,costForTwoMessage,cuisines,avgRating} = menuData.cards[0].card.card.info
  
  return (
    <div className="menu">
        <h1>{name}</h1>
        <p>{cuisines.join(", ")} : {costForTwoMessage}</p>
        <h2>Menu</h2>
        <ul>
          {itemCards.map(item => <li key={item.card.info.id}>{item.card.info.name}</li>)}
        </ul>
    </div>
  )
}

export default RestaurantMenu