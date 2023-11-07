import mccafeModel from "../models/mccafeModel.js";





const gettingMccafe = async (req, res) => {
    try {

        let data = await mccafeModel.find();
        res.send(data)
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: "Error in getting mccafe",
            
        })
    }
}

export default gettingMccafe;