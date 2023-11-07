import friesAndSidesModel from "../models/friesAndSidesModel.js";




const gettingFAS = async (req, res) => {
    try {

        let data = await friesAndSidesModel.find();
        res.send(data)
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: "Error in getting FAS",
            
        })
    }
}

export default gettingFAS;