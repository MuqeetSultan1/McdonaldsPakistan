import valueMealsModel from "../models/valueMealsModel.js";


const gettingVM = async (req, res) => {
    try {

        let data = await valueMealsModel.find();
        res.send(data)
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: "Error in getting Value meals",
            
        })
    }
}

export default gettingVM;