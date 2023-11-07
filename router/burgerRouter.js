import express from "express";
import { breakfastController, burgerController, chickenandfishController, crispyChickenController,
    dessertsController, extraValueMealController, ValueMealController,
    beveragesController,happyMealController,wrapsController, mccafeController, friesAndSidesController } from "../controllers/burgerController.js";
import upload from "../multer/imgConfig.js";
import gettingBurgers from "../controllers/getBurger.js";
import gettingMuffins from "../controllers/getMuffin.js";
import gettingChickenAndFish from "../controllers/getChickenAndFish.js";
import gettingCrispyChicken from "../controllers/getCrispyChicken.js";
import gettingWraps from "../controllers/getWraps.js";
import gettingHappyMeals from "../controllers/getHappyMeal.js";
import gettingEVM from "../controllers/getEVM.js";
import gettingVM from "../controllers/getVM.js";
import gettingDesserts from "../controllers/getDesserts.js";
import gettingBeverages from "../controllers/getBeverages.js";
import gettingMccafe from "../controllers/getMccafe.js";
import gettingFAS from "../controllers/getFAS.js";
import { getDataFromMongoDb } from "../controllers/getDataFromDb.js";




const router = express.Router();

router.post("/addItem", upload.single('image'), burgerController)
router.post("/addMuffin",upload.single('image'), breakfastController)
router.post("/addChickenAndFish",upload.single('image'), chickenandfishController)
router.post("/addCrispyChicken",upload.single('image'), crispyChickenController)
router.post("/addWraps",upload.single('image'), wrapsController)
router.post("/addHappyMeals",upload.single('image'), happyMealController)
router.post("/addEVM",upload.single('image'), extraValueMealController)
router.post("/addVM",upload.single('image'), ValueMealController)
router.post("/addDesserts",upload.single('image'), dessertsController)
router.post("/addBeverages",upload.single('image'), beveragesController)
router.post("/addMccafe",upload.single('image'), mccafeController)
router.post("/addFAS",upload.single('image'), friesAndSidesController)

router.get("/getBurgers", gettingBurgers)
router.get("/getMuffins", gettingMuffins)
router.get("/getChickenAndFish", gettingChickenAndFish)
router.get("/getCrispyChicken", gettingCrispyChicken)
router.get("/getWraps", gettingWraps)
router.get("/getHappyMeals", gettingHappyMeals)
router.get("/getEVM", gettingEVM)
router.get("/getVM", gettingVM)
router.get("/getDesserts", gettingDesserts)
router.get("/getBeverages", gettingBeverages)
router.get("/getMccafe", gettingMccafe)
router.get("/getFAS", gettingFAS)
router.get("/getData/:id", getDataFromMongoDb)


export default router;