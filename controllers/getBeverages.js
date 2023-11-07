import beveragesModel from "../models/beveragesModel.js";




const gettingBeverages = async (req, res) => {
    try {

        let data = await beveragesModel.find();
        res.send(data)
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: "Error in getting beverages",
            
        })
    }
}

export default gettingBeverages;