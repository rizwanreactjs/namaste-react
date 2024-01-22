import ResturantCard from "./ResturantCard"
import {useEffect, useState} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body =() => {

    const [resList,setResList] = useState([]);
    const [filteredResList,setFilteredResList] = useState([]);
    const [searchText,setSearchText] = useState("");

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json();
        setResList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredResList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      }


    

      //Conditional rendering
    if(resList.length === 0){
        return <Shimmer />
    }

    return (
        <div className="body">
            <div className="filter">
               <div className="search">
                 <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                  setSearchText(e.target.value)
                 }}></input>

                 <button onClick={()=>{
                    const filteredList1 = resList.filter((e) => (e.info.name).toLowerCase().includes(searchText.toLowerCase()))
                    setFilteredResList(filteredList1)
                 }}>Search</button>
               </div>

               <button className="filter-btn" onClick={()=>{
                  const filteredList = resList.filter((e) => e.info.avgRating >= 4.2)
                  setFilteredResList(filteredList)
                }}>
                Top Rated Resturants</button>
            </div>
            <div className="res-container">
              {filteredResList.map( resturant => <Link key={resturant.info.id} to={"/restaurants/"+resturant.info.id}><ResturantCard resData = {resturant}/></Link>)}
            </div>
        </div>
    )
}

export default Body