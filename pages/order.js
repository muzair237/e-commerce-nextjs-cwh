import React from 'react'
import { useSelector } from 'react-redux'

export default function Order() {
  const cartData = useSelector((state)=> state?.Cart?.cart);
  return (
    <>
      <header className="pb-5">
        <div className="container px-5">
          <div className="row gx-5 ">
            <div className="col-lg-8 col-xl-7 col-xxl-6">
              <div className="my-5 text-center text-xl-start">
                <p>CODESWEAR.COM</p>
                <h2 className="fw-bolder mb-2">Order Id: 12345</h2>
                <p className="lead fw-normal mb-4">Your Order has been Successfully Placed!</p>
                <div className='order-details'>
                  <table class="table">
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
                <p className='fs-5'><span className='fw-bold'>Sub Total: </span>$410.00 </p>
                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                  <button className="btn btn-outline-dark btn-sm px-4 mt-3 me-sm-3" href="#features">Track Order</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
