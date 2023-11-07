import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { beverageActions, addToCart } from '../redux/action'
import { Link } from 'react-router-dom'
const Beverages = () => {
    const beverageList = useSelector((state)=> state.beverageList)

    const {beverages,loading, error} = beverageList
    console.log("beverages",beverages)
    
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(beverageActions())
    },[dispatch])
  return (
    <div><Navbar/>

    <div className='container-fluid'>
        <div className='row'>
            <div className='col-lg-1 col-md-1 col-sm-1'></div>
            <div className='col-lg-10 col-md-4 col-sm-1 my-5' style={{ display: 'flex', flexWrap: 'wrap'  }}>
                {beverages && beverages.length>0 ?
                    beverages.map((pro =>{
                        return(
                            <div className="card me-5 mb-5" style={{ width: '18rem' }}>
                            <Link to={`/SingleProductPage/${pro._id}`}> <img src={`http://localhost:8000/uploads/${pro.image}`} width={300} height={300} className="card-img-top" alt="..." /></Link>
                            <div className="card-body">
                                <h5 className="card-title">{pro.title}</h5>
                                <p className="card-text">Rs. {pro.price}/-</p>
                                <br/>
                                <a onClick={()=>dispatch(addToCart(pro))} href="#" className="btn btn-primary">Order</a>
                            </div>
                        </div>
                        )
                    }))
                    : <p>No vm available</p>
                }
            </div>
            <div className='col-lg-1 col-md-1 col-sm-1'></div>
        </div>
    </div>
    
    <Footer/></div>
  )
}

export default Beverages