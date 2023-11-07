import happyMealsModel from "../models/happyMealsModel.js";


const gettingHappyMeals = async (req, res) => {
    try {

        let data = await happyMealsModel.find();
        res.send(data)
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: "Error in getting happy meals",
            
        })
    }
}

export default gettingHappyMeals;