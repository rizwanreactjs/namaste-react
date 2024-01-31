import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory"
import { useState } from "react";

const RestaurantMenu = () => {
  
  const {resId} = useParams()
  const menuData = useRestaurantMenu(resId)
  const [showIndex,setShowIndex] = useState(null)

  if(menuData === null){
    return (
      <Shimmer/>
    )
  }

  //const {itemCards} = menuData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
  const {name,costForTwoMessage,cuisines} = menuData.cards[0].card.card.info
  
  const allCategories = menuData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  const categories = allCategories.filter(c => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
  
  //console.log(categories)

  return (
    <div className="text-center">
        <h1 className="font-bold my-6 text-2xl">{name}</h1>
        <p className="font-bold text-lg">{cuisines.join(", ")} : {costForTwoMessage}</p>

        {categories.map((category,index) => 
          <RestaurantCategory 
          key={category?.card?.card.title} 
          data={category?.card?.card}
          showItem={index===showIndex ? true : false}
          setShowIndex = {() => setShowIndex(index)}
          />

        )}
       
    </div>
  )
}

export default RestaurantMenu