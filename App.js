import React from "react"
import ReactDOM from "react-dom/client"

/*
//React element using JSX
const jsxHeading = <h1 id="heading">This is JSK heading using Javascript code under curly bracket in component</h1>

//React element using functional component
//we can add react element or js code under functional component by using curly bracket
const TitleComponent = () => (
    <div>
    {jsxHeading}
    <h1>This is title using functional component</h1>
    </div>
)

//Component composition - Adding 1 component into another
const HeadingComponent = () => (
     <div id ="container">
        <TitleComponent/>
     <h1>This is react component</h1>
     </div>
)
*/



const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
              <img className="logo" src="https://img.freepik.com/premium-vector/food-delivery-restaurant-logo-design-template_639751-10.jpg"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const ResturantCard = (props) => {
    const {resData}=props
  return (
    <div className="res-card">
        <img className="resImage" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.data.imageId}></img>
        <h3>{resData.data.name}</h3>
        <h4>{resData.data.cuisines.join(", ")}</h4>
        <h4>Rs {resData.data.costForTwo} for two</h4>
        <h4>Rating {resData.data.rating}</h4>
        <h4>{resData.data.deliveryTime} minutes</h4>
    </div>
  )
}


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

const AppLayout = () => {
    return ( <div className="app"> 
     <Header/>
     <Body/>
     </div>)
}


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout/>);