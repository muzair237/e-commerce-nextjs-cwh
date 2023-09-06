import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useRouter } from 'next/router'
import axios from 'axios';
import { useState } from 'react';
import {
  tShirtsIncrement,
  hoodiesIncrement,
  stickersIncrement,
  mugsIncrement,
} from "../../slices/cart/reducer"
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
export default function slug() {
  const dispatch = useDispatch();
  const router = useRouter()
  const { title, price, description, image } = router.query;
  const [service, setService] = useState();
  const [cartItem, setCartItem] = useState(1);
  const [showPinCodeMessage, setShowPinCodeMessage] = useState(false);

  const productTypeToActionMap = {
    'T-Shirt': tShirtsIncrement,
    'Hoody': hoodiesIncrement,
    'Sticker': stickersIncrement,
    'Mug': mugsIncrement,
  };

  const handleCartItem = (e) => {
    e.preventDefault();
    const match = title.match(/\(([^)]+)\)/);
    const result = match ? match[1] : null;
    const action = productTypeToActionMap[result];
    if (action) {
      dispatch(action(parseInt(cartItem)));
      toast.success("Item Added to Cart!")
    } else {
      toast.error("An Error Occured. Please Try Again!");
    }
  }
  const initialValues = {
    pinCode: ""
  }
  const validationSchema = Yup.object().shape({
    pinCode: Yup
      .number()
      .typeError('Please Enter a Valid Number!'),

  });
  const onSubmit = async (values) => {
    let pins = await axios.get(`http://localhost:3000/api/pincode`);
    if (pins?.data.includes(Number(values.pinCode))) {
      setShowPinCodeMessage(true);
      setService(true);
    } else {
      setService(false);
    }
  }


  return (
    //  <p>Post: {router.query.slug}</p>
    <>
      <section className="py-5">
        <div className="container px-4 px-lg-5 my-2">
          <div className="row gx-4 gx-lg-5 align-items-center">
            <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0" src={image} alt="..." /></div>
            <div className="col-md-6">
              <div className="small mb-1">SKU: BST-498</div>
              <h1 className="display-5 fw-bolder">{title}</h1>
              <div className="fs-5 mb-5">
                <span>{price}.00</span>
              </div>
              <p className="lead">{description}</p>
              <form onSubmit={handleCartItem}>
                <div className="d-flex">
                  <input className="form-control text-center me-3" id="cartItem" name="cartItem" onChange={(e) => {
                    e.preventDefault();
                    setCartItem(e.target.value);
                  }} defaultValue={cartItem} min={1} type="number" style={{ maxWidth: "4.5rem" }} />
                  <button className="btn btn-outline-dark flex-shrink-0" type="submit">
                    <i className="bi-cart-fill me-1"></i>
                    Add to Cart
                  </button>
                </div>
              </form>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                <Form>
                  <div className="d-flex mt-3">
                    <Field style={{ width: "33%" }} placeholder="Enter Pin Code" name="pinCode" id="pinCode" className="form-control" />
                    <button type='submit' className='btn  btn-outline-success mx-3'>Check</button>
                  </div>
                  <ErrorMessage name='pinCode' component='div' className='text-danger' />
                  {showPinCodeMessage ? (
                    !service ? (
                      <p>Sorry! We couldn't deliver to this place</p>
                    ) : (
                      <p>Yay! This Pincode is serviceable</p>
                    )
                  ) : null}

                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}