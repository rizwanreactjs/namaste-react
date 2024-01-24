import { LOGO } from "../utils/constant"

const ResturantCard = (props) => {
    const {resData}=props
  return (
    <div className="m-4 p-4 w-[220px] rounded-lg bg-gray-100 hover:bg-gray-300">
        <img className="rounded-lg w-48 h-28 object-cover" src={LOGO+resData.info.cloudinaryImageId}></img>
        <h3 className="font-bold py-4 text-lg">{resData.info.name}</h3>
        <h4>{resData.info.cuisines.slice(0,3).join(",")}</h4>
        <h4>{resData.info.costForTwo}</h4>
        <h4>Rating {resData.info.avgRating}</h4>
        <h4>Delivery Time {resData.info.sla.deliveryTime} min</h4>
    </div>
  )
}

export const withPromotedLabel = (ResturantCard) => {
  return (props) => {
    return (
      <div>
           <label className="absolute bg-black text-white m-2 p-0 rounded-lg">Open</label>
           <ResturantCard {...props}/>
      </div>
    )
  }
}

export default ResturantCard