import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { muffinActions, addToCart } from '../redux/action'
import { Link } from 'react-router-dom'

const Breakfast = () => {

    const muffinList = useSelector((state)=> state.muffinList)

    const {muffins,loading, error} = muffinList
    console.log("muffins_____",muffins)
    
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(muffinActions())
    },[dispatch])


  return (
    <div>
        <Navbar/>

        <div className='container-fluid breakfastcontainer'>
            <div className='row breakfastrow my-5'>
                <div className='col-lg-1 col-md-1 col-sm-1'></div>
                <div className='col-lg-10 col-md-10 col-sm-10 ' style={{ display: 'flex', flexWrap: 'wrap'  }}>
                    {muffins && muffins.length > 0 ?
                        muffins.map((items =>{
                            return (
                            <div className="card me-5 mb-5" style={{ width: '18rem' }}>
                                <Link to={`/SingleProductPage/${items._id}`}><img src={`http://localhost:8000/uploads/${items.image}`} width={300} height={300} className="card-img-top" alt="..." /></Link>
                                <div className="card-body">
                                    <h5 className="card-title">{items.title}</h5>
                                    <p className="card-text">{items.price}</p>
                                    <a onClick={()=>dispatch(addToCart(items))} href="#" className="btn btn-primary">Order</a>
                                </div>
                            </div>
                            )

                        }

                        ))
                        : <p>No Muffins available</p>
                    }
                </div>
                <div className='col-lg-1 col-md-1 col-sm-1'></div>
            </div>
        </div>

        <Footer/>
    </div>
  )
}

export default Breakfast