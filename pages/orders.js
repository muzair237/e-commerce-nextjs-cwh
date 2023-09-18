import React from 'react'
import { useSelector } from 'react-redux'

export default function Order() {
  const cartData = useSelector((state)=> state?.Cart?.cart);
  return (
    <>
      <header className="pb-5">
        <div className="container px-5">
          <div className="row gx-5 ">
            <div className="col-12">
              <div className="my-5 text-center text-xl-start">
                <p className='fw-bold fs-5'>CUSTOMIZEME.CO</p>
                <h4 className='fw-bold text-center'>My Orders</h4>
                <p className="lead fw-normal mb-4">Your Order has been Successfully Placed!</p>
                <div className='order-details'>
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Description</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Wear The Code - T-Shirt</td>
                        <td>1</td>
                        <td>$30.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                  <button className="btn btn-outline-dark btn-sm px-4 mt-3 me-sm-3" href="#features">Track Order</button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
