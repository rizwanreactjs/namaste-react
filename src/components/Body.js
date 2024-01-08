import ResturantCard from "./ResturantCard"

const resturantObjList = [
    {
        "data":{
            "id":0,
            "name": "Meghna Food",
            "cuisines":["Biryani","North Indian","Indian","Hyderabadi"],
            "rating":4.4,
            "deliveryTime":38,
            "costForTwo":400,
            "imageId":"vt1mquaxmeugaf9dl5pp"
        }
    },
    {
        "data":{
            "id":1,
            "name": "KFC",
            "cuisines":["Pizza,Fastfood"],
            "rating":4.4,
            "deliveryTime":38,
            "costForTwo":500,
            "imageId":"vt1mquaxmeugaf9dl5pp"
        }
    },
    {
        "data":{
            "id":2,
            "name": "Barcus",
            "cuisines":["Biryani","Mandi","Arabian","Hyderabadi"],
            "rating":4.4,
            "deliveryTime":38,
            "costForTwo":800,
            "imageId":"vt1mquaxmeugaf9dl5pp"
        }
    }
  ]

const Body =() => {
    return (
        <div className="body">
            <div className="search"> Search</div>
            <div className="res-container">
              {resturantObjList.map( resturant => <ResturantCard key={resturant.data.id} resData= {resturant}/> )}
            </div>
        </div>
    )
}

export default Body