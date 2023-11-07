import {createStore, applyMiddleware, combineReducers} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { burgerReducer, chickenAndFishReducer, muffinReducer, crispyChickenReducer, wrapsReducer,
happyMealReducer,evmReducer, vmReducer, dessertReducer, beverageReducer, mccafeReducer, fasReducer, cartRed 
,removeCartRed } from '../redux/reducer';

const reducer = combineReducers({
    burgerList: burgerReducer,
    muffinList: muffinReducer,
    chickenAndFishList: chickenAndFishReducer,
    crispyChickenList: crispyChickenReducer,
    wrapsList: wrapsReducer,
    happyMealList: happyMealReducer,
    evmList: evmReducer,
    vmList: vmReducer,
    dessertList: dessertReducer,
    beverageList: beverageReducer,
    mccafeList: mccafeReducer,
    friesAndSidesList: fasReducer,
    cartRedList: cartRed,
    removerCartList: removeCartRed,    

})

const initialState = {};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(
        applyMiddleware(...middleware)
    )
)

export default store;