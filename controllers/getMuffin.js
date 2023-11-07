import breakfastModel from "../models/breakfastModel.js";

const gettingMuffins = async (req, res) => {
    try {

        let data = await breakfastModel.find();
        res.send(data)
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: "Error in getting muffins",
            
        })
    }
}

export default gettingMuffins;