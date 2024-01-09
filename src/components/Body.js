import ResturantCard from "./ResturantCard"
import {useState} from "react";
import {resturantObjList} from "../utils/mockData"



const Body =() => {

    const [resList,setResList] = useState(resturantObjList);

    return (
        <div className="body">
            <div className="filter">
               <button className="filter-btn" onClick={()=>{
                const filteredList = resList.filter((e) => e.data.rating >= 4)
                setResList(filteredList)
                }}>
                Top Rated Resturants
                </button>
            </div>
            <div className="res-container">
              {resList.map( resturant => <ResturantCard key={resturant.data.id} resData= {resturant}/> )}
            </div>
        </div>
    )
}

export default Body