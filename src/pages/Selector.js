import { selectBurgers, selectBeverage, selectMuffins, selectchickenAndFish, selectcrispyChicken, selectHappyMeal,
     selectEvm, selectVm, selectDessert, selectMccafe, selectWraps, selectFas, selectRemoveCartRed } from '../redux/reducer'



     const selectAllProducts = (state) => ({
        burgers: selectBurgers(state),
        muffins: selectMuffins(state),
        beverages: selectBeverage(state),
        chickenAndFish: selectchickenAndFish(state),
        crispyChicken: selectcrispyChicken(state),
        happyMeal: selectHappyMeal(state),
        evm: selectEvm(state),
        vm: selectVm(state),
        dessert: selectDessert(state),
        mccafe: selectMccafe(state),
        wraps: selectWraps(state),
        fas: selectFas(state), 
        removeCartRed: selectRemoveCartRed(state)
    });

    export default selectAllProducts;