import burgerModel from "../models/burgerModel.js";

const gettingBurgers = async (req, res) => {
    try {

        let data = await burgerModel.find();
        res.send(data)
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: "Error in getting burgers",
            
        })
    }
}

export default gettingBurgers;