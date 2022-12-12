import foodData from "../../data/food.json";
import FoodListItem from "../listItem/FoodListItem";

function FoodList() {
   return (
     foodData.food.map((food) => {
       return (
    <FoodListItem foodData={food} />
  )
     })

   )
}

export default FoodList