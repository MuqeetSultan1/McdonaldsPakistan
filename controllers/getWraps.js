import wrapsModel from "../models/wrapsModel.js";



const gettingWraps = async (req, res) => {
    try {

        let data = await wrapsModel.find();
        res.send(data)
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: "Error in getting crispy Chicken",
            
        })
    }
}

export default gettingWraps;