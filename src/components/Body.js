import ResturantCard, {withPromotedLabel} from "./ResturantCard"
import {useEffect, useState} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus"

const Body =() => {

    const [resList,setResList] = useState([]);
    const [filteredResList,setFilteredResList] = useState([]);
    const [searchText,setSearchText] = useState("");

    const PromotedResturantCard = withPromotedLabel(ResturantCard)

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json();
        setResList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredResList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

        //console.log(json)
      }

      const onlineStatus = useOnlineStatus()
     if(onlineStatus === false)
     {
      return(
        <h1>Looks like you are offline, Please check your internet connection</h1>
      )
     }
    

      //Conditional rendering
    if(resList.length === 0){
        return <Shimmer />
    }

    return (
        <div className="body">
            <div className="filter flex">

               <div className="search m-4 p-4">
                 <input type="text" className="border border-solid" value={searchText} onChange={(e)=>{
                  setSearchText(e.target.value)
                 }}></input>

                  <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={()=>{
                    const filteredList1 = resList.filter((e) => (e.info.name).toLowerCase().includes(searchText.toLowerCase()))
                    setFilteredResList(filteredList1)
                 }}>Search</button>
                </div>

                <div className="search m-4 p-4 flex items-center">
                  <button className="px-4 py-2 bg-gray-300 m-4 rounded-lg" onClick={()=>{
                  const filteredList = resList.filter((e) => e.info.avgRating >= 4.2)
                  setFilteredResList(filteredList)
                }}>
                Top Rated Resturants</button>
                </div>

            </div>
            <div className="flex flex-wrap">
              {filteredResList.map( resturant =>
               <Link key={resturant.info.id} to={"/restaurants/"+resturant.info.id}>
               {resturant.info.isOpen ? <PromotedResturantCard resData = {resturant}/> : <ResturantCard resData = {resturant}/>}

               </Link>)}
            </div>
        </div>
    )
}

export default Body