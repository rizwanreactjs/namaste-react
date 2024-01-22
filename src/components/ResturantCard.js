import { LOGO } from "../utils/constant"

const ResturantCard = (props) => {
    const {resData}=props
  return (
    <div className="res-card">
        <img className="resImage" src={LOGO+resData.info.cloudinaryImageId}></img>
        <h3>{resData.info.name}</h3>
        <h4>{resData.info.cuisines.slice(0,3).join(",")}</h4>
        <h4>{resData.info.costForTwo}</h4>
        <h4>Rating {resData.info.avgRating}</h4>
        <h4>Delivery Time {resData.info.sla.deliveryTime}</h4>
    </div>
  )
}

export default ResturantCard