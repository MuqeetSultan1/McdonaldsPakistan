import chickenAndFishModel from "../models/chickenAndFishModel.js";

const gettingChickenAndFish = async (req, res) => {
    try {

        let data = await chickenAndFishModel.find();
        res.send(data)
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: "Error in getting chicken and fish",
            
        })
    }
}

export default gettingChickenAndFish;