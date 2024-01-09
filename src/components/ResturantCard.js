//import { LOGO } from "src/utils/constant"
const LOGO = 
"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"


const ResturantCard = (props) => {
    const {resData}=props
  return (
    <div className="res-card">
        <img className="resImage" src={LOGO+resData.data.imageId}></img>
        <h3>{resData.data.name}</h3>
        <h4>{resData.data.cuisines.join(", ")}</h4>
        <h4>Rs {resData.data.costForTwo} for two</h4>
        <h4>Rating {resData.data.rating}</h4>
        <h4>{resData.data.deliveryTime} minutes</h4>
    </div>
  )
}

export default ResturantCard