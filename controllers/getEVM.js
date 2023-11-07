import extraValueMealsModel from "../models/extraValueMealsModel.js";

const gettingEVM = async (req, res) => {
    try {

        let data = await extraValueMealsModel.find();
        res.send(data)
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: "Error in getting Extra Value meals",
            
        })
    }
}

export default gettingEVM;