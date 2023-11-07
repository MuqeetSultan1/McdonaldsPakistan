import burgerModel from "../models/burgerModel.js";
import breakfastModel from "../models/breakfastModel.js";
import chickenAndFishModel from "../models/chickenAndFishModel.js";
import crispyChickenModel from "../models/crispyChickenModel.js";
import wrapsModel from "../models/wrapsModel.js";
import happyMealsModel from "../models/happyMealsModel.js";
import extraValueMealsModel from "../models/extraValueMealsModel.js";
import valueMealsModel from "../models/valueMealsModel.js";
import dessertsModel from "../models/dessertsModel.js";
import beveragesModel from "../models/beveragesModel.js";
import mccafeModel from "../models/mccafeModel.js";
import friesAndSidesModel from "../models/friesAndSidesModel.js";



export const burgerController = async (req, res)=>{
    const { title, price, } = req.body;
    const { filename } = req.file;

    if(!title || !price){
       return res.status(401).json({message: "Please provide all the required fields"})
    }
    if(!filename){
       return res.status(401).json({message: "Please provide image, image is must"})
    }

    try {

        // checking if burger is already present in db
        let isBurgerPresent = await burgerModel.findOne({title})

        if(isBurgerPresent){
            return res.status(201).json({
                success: false,
                message: "Burger already present in database"})
        }

        // adding new item to database
        let newBurger = await new burgerModel({        
            title,
            price,
            image: filename,
            
        }).save();
        
        
        res.status(200).json
             ({
                success: true,
                message: "New burger added successfully",
                newBurger,
            })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error in adding new burger",
            error,
        })
        
    }


}



export const breakfastController = async (req, res)=>{
    const { title, price, } = req.body;
    const { filename } = req.file;

    if(!title || !price){
       return res.status(401).json({message: "Please provide all the required fields"})
    }
    if(!filename){
       return res.status(401).json({message: "Please provide image, image is must"})
    }

    try {

        // checking if burger is already present in db
        let isMuffinPresent = await breakfastModel.findOne({title})

        if(isMuffinPresent){
            return res.status(201).json({
                success: false,
                message: "Muffin already present in database"})
        }

        // adding new item to database
        let newMuffin = await new breakfastModel({        
            title,
            price,
            image: filename,
            
        }).save();
        
        
        res.status(200).json
             ({
                success: true,
                message: "New Muffin added successfully",
                newMuffin,
            })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error in adding new Muffin",
            error,
        })
        
    }


}



export const chickenandfishController = async (req, res)=>{
    const { title, price, } = req.body;
    const { filename } = req.file;

    if(!title || !price){
       return res.status(401).json({message: "Please provide all the required fields"})
    }
    if(!filename){
       return res.status(401).json({message: "Please provide image, image is must"})
    }

    try {

        // checking if burger is already present in db
        let isChickenAndFishPresent = await chickenAndFishModel.findOne({title})

        if(isChickenAndFishPresent){
            return res.status(201).json({
                success: false,
                message: "chicken and fish already present in database"})
        }

        // adding new item to database
        let newchickenAndFish = await new chickenAndFishModel({        
            title,
            price,
            image: filename,
            
        }).save();
        
        
        res.status(200).json
             ({
                success: true,
                message: "chicken and fish added successfully",
                newchickenAndFish,
            })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error in adding new chicken and fish",
            error,
        })
        
    }


}



export const crispyChickenController = async (req, res)=>{
    const { title, price, } = req.body;
    const { filename } = req.file;

    if(!title || !price){
       return res.status(401).json({message: "Please provide all the required fields"})
    }
    if(!filename){
       return res.status(401).json({message: "Please provide image, image is must"})
    }

    try {

        // checking if burger is already present in db
        let isCrispyChickenPresent = await crispyChickenModel.findOne({title})

        if(isCrispyChickenPresent){
            return res.status(201).json({
                success: false,
                message: "Crispy Chicken already present in database"})
        }

        // adding new item to database
        let newCrispyChicken = await new crispyChickenModel({        
            title,
            price,
            image: filename,
            
        }).save();
        
        
        res.status(200).json
             ({
                success: true,
                message: "New Crispy Chicken added successfully",
                newCrispyChicken,
            })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error in adding new Crispy Chicken",
            error,
        })
        
    }


}


export const wrapsController = async (req, res)=>{
    const { title, price, } = req.body;
    const { filename } = req.file;

    if(!title || !price){
       return res.status(401).json({message: "Please provide all the required fields"})
    }
    if(!filename){
       return res.status(401).json({message: "Please provide image, image is must"})
    }

    try {

        // checking if burger is already present in db
        let isWrapPresent = await wrapsModel.findOne({title})

        if(isWrapPresent){
            return res.status(201).json({
                success: false,
                message: "Wrap already present in database"})
        }

        // adding new item to database
        let newWrap = await new wrapsModel({        
            title,
            price,
            image: filename,
            
        }).save();
        
        
        res.status(200).json
             ({
                success: true,
                message: "New wrap added successfully",
                newWrap,
            })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error in adding new wrap",
            error,
        })
        
    }


}


export const happyMealController = async (req, res)=>{
    const { title, price, } = req.body;
    const { filename } = req.file;

    if(!title || !price){
       return res.status(401).json({message: "Please provide all the required fields"})
    }
    if(!filename){
       return res.status(401).json({message: "Please provide image, image is must"})
    }

    try {

        // checking if burger is already present in db
        let isHappyMealPresent = await happyMealsModel.findOne({title})

        if(isHappyMealPresent){
            return res.status(201).json({
                success: false,
                message: "Happy Meal is already present in database"})
        }

        // adding new item to database
        let newHappMeal = await new happyMealsModel({        
            title,
            price,
            image: filename,
            
        }).save();
        
        
        res.status(200).json
             ({
                success: true,
                message: "New Happy Meal added successfully",
                newHappMeal,
            })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error in adding new Happy Meal",
            error,
        })
        
    }


}



export const extraValueMealController = async (req, res)=>{
    const { title, price, } = req.body;
    const { filename } = req.file;

    if(!title || !price){
       return res.status(401).json({message: "Please provide all the required fields"})
    }
    if(!filename){
       return res.status(401).json({message: "Please provide image, image is must"})
    }

    try {

        // checking if burger is already present in db
        let isevmPresent = await extraValueMealsModel.findOne({title})

        if(isevmPresent){
            return res.status(201).json({
                success: false,
                message: "EVM is already present in database"})
        }

        // adding new item to database
        let newevm = await new extraValueMealsModel({        
            title,
            price,
            image: filename,
            
        }).save();
        
        
        res.status(200).json
             ({
                success: true,
                message: "New EVM added successfully",
                newevm,
            })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error in adding new EVM",
            error,
        })
        
    }


}




export const ValueMealController = async (req, res)=>{
    const { title, price, } = req.body;
    const { filename } = req.file;

    if(!title || !price){
       return res.status(401).json({message: "Please provide all the required fields"})
    }
    if(!filename){
       return res.status(401).json({message: "Please provide image, image is must"})
    }

    try {

        // checking if burger is already present in db
        let isvmPresent = await valueMealsModel.findOne({title})

        if(isvmPresent){
            return res.status(201).json({
                success: false,
                message: "VM is already present in database"})
        }

        // adding new item to database
        let nevm = await new valueMealsModel({        
            title,
            price,
            image: filename,
            
        }).save();
        
        
        res.status(200).json
             ({
                success: true,
                message: "New VM added successfully",
                nevm,
            })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error in adding new VM",
            error,
        })
        
    }


}



export const dessertsController = async (req, res)=>{
    const { title, price, } = req.body;
    const { filename } = req.file;

    if(!title || !price){
       return res.status(401).json({message: "Please provide all the required fields"})
    }
    if(!filename){
       return res.status(401).json({message: "Please provide image, image is must"})
    }

    try {

        // checking if burger is already present in db
        let isDessertPresent = await dessertsModel.findOne({title})

        if(isDessertPresent){
            return res.status(201).json({
                success: false,
                message: "dessert is already present in database"})
        }

        // adding new item to database
        let newDessert = await new dessertsModel({        
            title,
            price,
            image: filename,
            
        }).save();
        
        
        res.status(200).json
             ({
                success: true,
                message: "New dessert added successfully",
                newDessert,
            })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error in adding new dessert",
            error,
        })
        
    }


}


export const beveragesController = async (req, res)=>{
    const { title, price, } = req.body;
    const { filename } = req.file;

    if(!title || !price){
       return res.status(401).json({message: "Please provide all the required fields"})
    }
    if(!filename){
       return res.status(401).json({message: "Please provide image, image is must"})
    }

    try {

        // checking if burger is already present in db
        let isBeveragePresent = await beveragesModel.findOne({title})

        if(isBeveragePresent){
            return res.status(201).json({
                success: false,
                message: "Beverage is already present in database"})
        }

        // adding new item to database
        let newBeverage = await new beveragesModel({        
            title,
            price,
            image: filename,
            
        }).save();
        
        
        res.status(200).json
             ({
                success: true,
                message: "New Beverage added successfully",
                newBeverage,
            })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error in adding new Beverage",
            error,
        })
        
    }


}



export const mccafeController = async (req, res)=>{
    const { title, price, } = req.body;
    const { filename } = req.file;

    if(!title || !price){
       return res.status(401).json({message: "Please provide all the required fields"})
    }
    if(!filename){
       return res.status(401).json({message: "Please provide image, image is must"})
    }

    try {

        // checking if burger is already present in db
        let isMccafePresent = await mccafeModel.findOne({title})

        if(isMccafePresent){
            return res.status(201).json({
                success: false,
                message: "Mccafe is already present in database"})
        }

        // adding new item to database
        let newMccafe = await new mccafeModel({        
            title,
            price,
            image: filename,
            
        }).save();
        
        
        res.status(200).json
             ({
                success: true,
                message: "New Mccafe added successfully",
                newMccafe,
            })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error in adding new Mccafe",
            error,
        })
        
    }


}



export const friesAndSidesController = async (req, res)=>{
    const { title, price, } = req.body;
    const { filename } = req.file;

    if(!title || !price){
       return res.status(401).json({message: "Please provide all the required fields"})
    }
    if(!filename){
       return res.status(401).json({message: "Please provide image, image is must"})
    }

    try {

        // checking if burger is already present in db
        let isFASPresent = await friesAndSidesModel.findOne({title})

        if(isFASPresent){
            return res.status(201).json({
                success: false,
                message: "fries and sides is already present in database"})
        }

        // adding new item to database
        let newFAS = await new friesAndSidesModel({        
            title,
            price,
            image: filename,
            
        }).save();
        
        
        res.status(200).json
             ({
                success: true,
                message: "New fries and sides added successfully",
                newFAS,
            })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error in adding new fries and sides",
            error,
        })
        
    }


}

