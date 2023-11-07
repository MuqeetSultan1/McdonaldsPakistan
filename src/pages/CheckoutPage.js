import React, { useState } from 'react'
import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../redux/action'

const CheckoutPage = () => {
    const [total, settotal] = useState(false);

  const burgerList = useSelector((state)=> state.burgerList.burgers)

  const muffinList = useSelector((state)=> state.muffinList.muffins)
  const beverageList = useSelector((state)=> state.beverageList.beverages)
  const chickenAndFishList = useSelector((state)=> state.chickenAndFishList.chickenandfish)
  const crispyChickenList = useSelector((state)=> state.crispyChickenList.crispychicken)
  const dessertList = useSelector((state)=> state.dessertList.desserts)
  const evmList = useSelector((state)=> state.evmList.evms)
  const friesAndSidesList = useSelector((state)=> state.friesAndSidesList.fas)
  const happyMealList = useSelector((state)=> state.happyMealList.happymeals)  
  const mccafeList = useSelector((state)=> state.mccafeList.mccafe)
  const vmList = useSelector((state)=> state.vmList.vms)
  const wrapsList = useSelector((state)=> state.wrapsList.wraps)

  let cardData = useSelector((state) => state.cartRedList);

   /* after debugging it appears that burger list returns an object which
   holds and array inside by the name burgers.

   we use the key "burgers" and set the array to cleanedBurgerList
 */
    const cleanedBurgerList = [burgerList, muffinList, beverageList,chickenAndFishList, 
      crispyChickenList, dessertList, evmList,friesAndSidesList, happyMealList, mccafeList,
        vmList, wrapsList]

    console.log("cleanedBurgerList____",cleanedBurgerList)
    console.log("cleanedBurgerListflat____",cleanedBurgerList.flat())

    useEffect(() => {
      let sum = 0;
  
      cardData.forEach(num => { sum += num.price; })
  
      settotal(sum)
    }, [cardData])  

    const dispatch = useDispatch();

    const handleAddToCart = (item) => {
      dispatch(addToCart(item));
    }

  return (
    <div>
      <Navbar/>


      <div className="container checkoutpagefirstdiv">
        <div className="row">
          <div className="col-xl-8">
            <div className="card shadow-none">
              <div className="card-body"> 
              {
                cardData && cardData.length>0 ? cardData.flat().map(items=>{
                  return(
                    <div key={items.id}>
                      <div className="d-flex align-items-start border-bottom pb-3">
                        <div className="me-4">
                          {/* <img src="/images/beef-img-1.png"/> */}
                          <img src={`http://localhost:8000/uploads/${items.image}`} className="avatar-lg rounded" />
                        </div>
                        <div className="flex-grow-1 align-self-center overflow-hidden">
                          <div>
                            <h5 className="text-truncate font-size-18"><a href="#" className="text-dark">{items.title}</a></h5>
                            <p className="text-muted mb-0">
                              <i className="bx bxs-star text-warning" />
                              <i className="bx bxs-star text-warning" />
                              <i className="bx bxs-star text-warning" />
                              <i className="bx bxs-star text-warning" />
                              <i className="bx bxs-star-half text-warning" />
                            </p>
                            
                          </div>
                        </div>
                        <div className="flex-shrink-0 ms-2">
                          <ul className="list-inline mb-0 font-size-16">
                            <li className="list-inline-item">
                              <a href="#" className="text-muted px-1">
                                <i className="mdi mdi-trash-can-outline" />
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#" className="text-muted px-1">
                                <i className="mdi mdi-heart-outline" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div>
                        <div className="row">
                          <div className="col-md-4">
                            <div className="mt-3">
                              <p className="text-muted mb-2">{items.price}</p>
                            </div>
                          </div>
                          <div className="col-md-5">
                            <div className="mt-3">
                              <p className="text-muted mb-2">Quantity</p>
                              <div className="d-inline-flex">
                                <select className="form-select form-select-sm w-xl">
                                  <option value={1}>1</option>
                                  <option value={2} selected>2</option>
                                  <option value={3}>3</option>
                                  <option value={4}>4</option>
                                  <option value={5}>5</option>
                                  <option value={6}>6</option>
                                  <option value={7}>7</option>
                                  <option value={8}>8</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="mt-3">
                              <p className="text-muted mb-2">Total</p>
                              <h5></h5>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>

                
                  )
                })

                :<p>No items in cart</p>              
                }
              
              
                
              </div>
            </div>
          </div>

            {/* end card */}
          <div className="col-xl-4">
            <div className="mt-5 mt-lg-0">
              <div className="card border shadow-none">
                <div className="card-header bg-transparent border-bottom py-3 px-4">
                  <h5 className="font-size-16 mb-0">Order Summary <span className="float-end">#MN0124</span></h5>
                </div>
                <div className="card-body p-4 pt-2">
                  <div className="table-responsive">
                    <table className="table mb-0">
                      <tbody>
                        <tr>
                          <td>Sub Total :</td>
                          <td className="text-end">$ 780</td>
                        </tr>
                        <tr>
                          <td>Discount : </td>
                          <td className="text-end">- $ 78</td>
                        </tr>
                        <tr>
                          <td>Shipping Charge :</td>
                          <td className="text-end">$ 25</td>
                        </tr>
                        <tr>
                          <td>Estimated Tax : </td>
                          <td className="text-end">$ 18.20</td>
                        </tr>
                        <tr className="bg-light">
                          <th>Total :</th>
                          <td className="text-end">
                            <span className="fw-bold">
                              $ 745.2
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {/* end table-responsive */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end row */}
      </div>

      <Footer/>
    </div>
  )
}

export default CheckoutPage
