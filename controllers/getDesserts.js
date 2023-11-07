import dessertsModel from "../models/dessertsModel.js";



const gettingDesserts = async (req, res) => {
    try {

        let data = await dessertsModel.find();
        res.send(data)
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: "Error in getting Desserts",
            
        })
    }
}

export default gettingDesserts;