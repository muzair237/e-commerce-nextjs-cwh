import Image from 'next/image'
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useRouter } from 'next/router'
import axios from 'axios';
import { useState } from 'react';

export default function slug() {
  const [service, setService] = useState();
  const [showPinCodeMessage, setShowPinCodeMessage] = useState(false);
  const initialValues = {
    pinCode: ""
  }
  const validationSchema = Yup.object().shape({
    pinCode: Yup
      .number()
      .typeError('Please Enter a Valid Number!') 
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

  const router = useRouter()
  return (
    //  <p>Post: {router.query.slug}</p>
    <>
      <section className="py-5">
        <div className="container px-4 px-lg-5 my-2">
          <div className="row gx-4 gx-lg-5 align-items-center">
            <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0" src="http://localhost:3000/_next/image?url=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F81gb2Hwt0qL._AC_UL600_FMwebp_QL65_.jpg&w=640&q=75" alt="..." /></div>
            <div className="col-md-6">
              <div className="small mb-1">SKU: BST-498</div>
              <h1 className="display-5 fw-bolder">Shop item template</h1>
              <div className="fs-5 mb-5">
                <span>$40.00</span>
              </div>
              <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium at dolorem quidem modi. Nam sequi consequatur obcaecati excepturi alias magni, accusamus eius blanditiis delectus ipsam minima ea iste laborum vero?</p>
              <div className="d-flex">
                <input className="form-control text-center me-3" id="inputQuantity" type="num" value="1" style={{ maxWidth: "3rem" }} />
                <button className="btn btn-outline-dark flex-shrink-0" type="button">
                  <i className="bi-cart-fill me-1"></i>
                  Add to cart
                </button>
              </div>

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