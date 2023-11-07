import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, burgerActions } from '../redux/action'
import { Link } from 'react-router-dom'



const Beef = () => {
    
    const burgerList = useSelector((state)=> state.burgerList)

    const {burgers,loading, error} = burgerList
    console.log("burgers_____",burgers)
    
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(burgerActions())
    },[dispatch])

    // if (loading) {
    //     return <p>Loading...</p>; 
    //   }
    
    //   if (error) {
    //     return <p>Error: {error.message}</p>;
    //   }

  return (
    <div>
        <Navbar/>

        <div className='container-fluid breakfastcontainer'>
            <div className='row breakfastrow my-5'>
                <div className='col-lg-1 col-md-1 col-sm-1'></div>
                <div className='col-lg-10 col-md-10 col-sm-10 ' style={{ display: 'flex', flexWrap: 'wrap'  }}>
                    {burgers && burgers.length > 0 ?
                        burgers.map(items =>{
                            return (
                            <div className="card me-5 mb-5" style={{ width: '18rem' }}>
                                {/* <img src={items.image} width={300} height={300} className="card-img-top" alt="..." /> */}
                             <Link to={`/SingleProductPage/${items._id}`}>   <img src={`http://localhost:8000/uploads/${items.image}`} width={300} height={300} className="card-img-top" alt="..." /></Link>
                                <div className="card-body">
                                    <h5 className="card-title">{items.title}</h5>
                                    <p className="card-text">Rs. {items.price}</p>
                                    <a onClick={()=>dispatch(addToCart(items))} href="#" className="btn btn-primary">Add to Cart</a>
                                </div>
                            </div>
                            )

                        }

                        )
                        : <p>No burgers available</p>
                    }
                </div>
                <div className='col-lg-1 col-md-1 col-sm-1'></div>
            </div>
        </div>

        <Footer/>
    </div>
  )
}

export default Beef