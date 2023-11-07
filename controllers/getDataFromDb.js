import burgerModel from "../models/burgerModel.js";
import beveragesModel from "../models/beveragesModel.js";
import dessertsModel from "../models/dessertsModel.js";
import chickenAndFishModel from "../models/chickenAndFishModel.js";
import crispyChickenModel from "../models/crispyChickenModel.js";
import breakfastModel from "../models/breakfastModel.js";
import wrapsModel from "../models/wrapsModel.js";
import extraValueMealsModel from "../models/extraValueMealsModel.js";
import happyMealsModel from "../models/happyMealsModel.js";
import valueMealsModel from "../models/valueMealsModel.js";
import friesAndSidesModel from "../models/friesAndSidesModel.js";
import mccafeModel  from "../models/mccafeModel.js";



export const getDataFromMongoDb = async (req, res) => {
    try {
      // Use Promise.all to fetch data from all models concurrently
      const [burgerData, beveragesData, dessertsData, chickenAndFishData, crispyChickenData, 
        breakfastData, wrapsData, extraValueMealsData, happyMealsData, valueMealsData, friesAndSidesData,
         mccafeData] = await Promise.all([
        burgerModel.find().exec(),
        beveragesModel.find().exec(),
        dessertsModel.find().exec(),
        chickenAndFishModel.find().exec(),
        crispyChickenModel.find().exec(),
        breakfastModel.find().exec(),
        wrapsModel.find().exec(),
        extraValueMealsModel.find().exec(),
        happyMealsModel.find().exec(),
        valueMealsModel.find().exec(),
        friesAndSidesModel.find().exec(),
        mccafeModel.find().exec(),
      ]);
  
      // Create an object or array to hold all the data
      const responseData = {
        burgers: burgerData,
        beverages: beveragesData,
        desserts: dessertsData,
        chickenAndFish: chickenAndFishData,
        crispyChicken: crispyChickenData,
        breakfast: breakfastData,
        wraps: wrapsData,
        extraValueMeals: extraValueMealsData,
        happyMeals: happyMealsData,
        valueMeals: valueMealsData,
        friesAndSides: friesAndSidesData,
        mccafe: mccafeData,
      };
  
      // Send the combined data as a JSON response
      res.json(responseData);
    } catch (error) {
      // Handle any errors that may occur during data retrieval
      console.error(error);
      res.status(500).json({ error: 'An error occurred while fetching data' });
    }
  };
