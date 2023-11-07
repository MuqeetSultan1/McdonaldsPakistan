import axios from "axios";
import { GET_BURGER_SUCCESS, GET_BURGER_REQUEST, GET_BURGER_FAILURE, GET_MUFFIN_REQUEST, GET_MUFFIN_SUCCESS,
     GET_MUFFIN_FAILURE, GET_CHICKENANDFISH_REQUEST, GET_CHICKENANDFISH_SUCCESS, GET_CHICKENANDFISH_FAILURE,
    GET_CRISPYCHICKEN_REQUEST, GET_CRISPYCHICKEN_SUCCESS, GET_CRISPYCHICKEN_FAILURE, GET_WRAPS_REQUEST,
GET_WRAPS_SUCCESS, GET_WRAPS_FAILURE, GET_HAPPYMEAL_REQUEST,GET_HAPPYMEAL_SUCCESS, GET_HAPPYMEAL_FAILURE,
GET_EXTRAVALUEMEAL_REQUEST, GET_EXTRAVALUEMEAL_SUCCESS, GET_EXTRAVALUEMEAL_FAILURE, GET_VALUEMEAL_REQUEST,
GET_VALUEMEAL_SUCCESS, GET_VALUEMEAL_FAILURE, GET_DESSERTS_REQUEST, GET_DESSERTS_SUCCESS, GET_DESSERTS_FAILURE,
GET_BEVERAGES_REQUEST, GET_BEVERAGES_SUCCESS, GET_BEVERAGES_FAILURE, GET_MCCAFE_REQUEST, GET_MCCAFE_SUCCESS,
GET_MCCAFE_FAILURE, GET_FRIESANDSIDES_REQUEST, GET_FRIESANDSIDES_SUCCESS, GET_FRIESANDSIDES_FAILURE,
ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART, INCREASE_QUANTITY, DECREASE_QUANTITY } from "./type";

export const burgerActions = () => async (dispatch) => {

    try {

        dispatch({type: GET_BURGER_REQUEST});
        
        let {data} = await axios.get("http://localhost:8000/api/v1/auth/getBurgers",)

        console.log("Burger data:", data);
        dispatch({type: GET_BURGER_SUCCESS, payload: data});
        
    }
    
     catch (error) {
        dispatch({type: GET_BURGER_FAILURE, payload: error.data});
    }
}

export const muffinActions = () => async (dispatch) => {

    try {

        dispatch({type: GET_MUFFIN_REQUEST});
        
        let {data} = await axios.get("http://localhost:8000/api/v1/auth/getMuffins",)

        dispatch({type: GET_MUFFIN_SUCCESS, payload: data});
        
    }
    
     catch (error) {
        dispatch({type: GET_MUFFIN_FAILURE, payload: error.data});
    }
}


export const chickenAndFishActions = () => async (dispatch) => {

    try {

        dispatch({type: GET_CHICKENANDFISH_REQUEST});
        
        let {data} = await axios.get("http://localhost:8000/api/v1/auth/getChickenAndFish",)

        dispatch({type: GET_CHICKENANDFISH_SUCCESS, payload: data});
        
    }
    
     catch (error) {
        dispatch({type: GET_CHICKENANDFISH_FAILURE, payload: error.data});
    }
}


export const crispyChickenActions = () => async (dispatch) => {

    try {

        dispatch({type: GET_CRISPYCHICKEN_REQUEST});
        
        let {data} = await axios.get("http://localhost:8000/api/v1/auth/getCrispyChicken",)

        dispatch({type: GET_CRISPYCHICKEN_SUCCESS, payload: data});
        
    }
    
     catch (error) {
        dispatch({type: GET_CRISPYCHICKEN_FAILURE, payload: error.data});
    }
}


export const wrapsActions = () => async (dispatch) => {

    try {

        dispatch({type: GET_WRAPS_REQUEST});
        
        let {data} = await axios.get("http://localhost:8000/api/v1/auth/getWraps",)

        dispatch({type: GET_WRAPS_SUCCESS, payload: data});
        
    }
    
     catch (error) {
        dispatch({type: GET_WRAPS_FAILURE, payload: error.data});
    }
}

export const happyMealActions = () => async (dispatch) => {

    try {

        dispatch({type: GET_HAPPYMEAL_REQUEST});
        
        let {data} = await axios.get("http://localhost:8000/api/v1/auth/getHappyMeals",)

        dispatch({type: GET_HAPPYMEAL_SUCCESS, payload: data});
        
    }
    
     catch (error) {
        dispatch({type: GET_HAPPYMEAL_FAILURE, payload: error.data});
    }
}

export const EVMActions = () => async (dispatch) => {

    try {

        dispatch({type: GET_EXTRAVALUEMEAL_REQUEST});
        
        let {data} = await axios.get("http://localhost:8000/api/v1/auth/getEVM",)

        dispatch({type: GET_EXTRAVALUEMEAL_SUCCESS, payload: data});
        
    }
    
     catch (error) {
        dispatch({type: GET_EXTRAVALUEMEAL_FAILURE, payload: error.data});
    }
}

export const VMActions = () => async (dispatch) => {

    try {

        dispatch({type: GET_VALUEMEAL_REQUEST});
        
        let {data} = await axios.get("http://localhost:8000/api/v1/auth/getVM",)

        dispatch({type: GET_VALUEMEAL_SUCCESS, payload: data});
        
    }
    
     catch (error) {
        dispatch({type: GET_VALUEMEAL_FAILURE, payload: error.data});
    }
}


export const dessertActions = () => async (dispatch) => {

    try {

        dispatch({type: GET_DESSERTS_REQUEST});
        
        let {data} = await axios.get("http://localhost:8000/api/v1/auth/getDesserts",)

        dispatch({type: GET_DESSERTS_SUCCESS, payload: data});
        
    }
    
     catch (error) {
        dispatch({type: GET_DESSERTS_FAILURE, payload: error.data});
    }
}

export const beverageActions = () => async (dispatch) => {

    try {

        dispatch({type: GET_BEVERAGES_REQUEST});
        
        let {data} = await axios.get("http://localhost:8000/api/v1/auth/getBeverages",)

        dispatch({type: GET_BEVERAGES_SUCCESS, payload: data});
        
    }
    
     catch (error) {
        dispatch({type: GET_BEVERAGES_FAILURE, payload: error.data});
    }
}

export const mccafeActions = () => async (dispatch) => {

    try {

        dispatch({type: GET_MCCAFE_REQUEST});
        
        let {data} = await axios.get("http://localhost:8000/api/v1/auth/getMccafe",)

        dispatch({type: GET_MCCAFE_SUCCESS, payload: data});
        
    }
    
     catch (error) {
        dispatch({type: GET_MCCAFE_FAILURE, payload: error.data});
    }
}


export const fasActions = () => async (dispatch) => {

    try {

        dispatch({type: GET_FRIESANDSIDES_REQUEST});
        
        let {data} = await axios.get("http://localhost:8000/api/v1/auth/getFAS",)

        dispatch({type: GET_FRIESANDSIDES_SUCCESS, payload: data});
        
    }
    
     catch (error) {
        dispatch({type: GET_FRIESANDSIDES_FAILURE, payload: error.data});
    }
}

export const addToCart = (data) =>(dispatch)=>{

        dispatch({type: ADD_TO_CART, payload: data})
        
}
export const removeCartAction = (data) =>(dispatch)=>{
       dispatch({type: REMOVE_FROM_CART, payload: data})        
    
}
export const emptyCart = () =>{
    return{
        type: EMPTY_CART,     
    }
}

export const IncreaseQuantityAction = (data) =>(dispatch)=>{
    dispatch({type: INCREASE_QUANTITY, payload: data})        
}

export const DecreaseQuantityAction = (data) =>(dispatch)=>{
    dispatch({type: DECREASE_QUANTITY, payload: data})        
}