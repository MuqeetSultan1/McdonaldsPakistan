import crispyChickenModel from "../models/crispyChickenModel.js";



const gettingCrispyChicken = async (req, res) => {
    try {

        let data = await crispyChickenModel.find();
        res.send(data)
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: "Error in getting crispy Chicken",
            
        })
    }
}

export default gettingCrispyChicken;