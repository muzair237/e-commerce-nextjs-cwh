import { Formik, Field, Form, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from 'next/router'
import axios from 'axios';
import { useState } from 'react';
import {
  pushCart,
  subTotalIncrement,
  manipulateCart
} from "../../slices/cart/reducer"
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
export default function slug() {
  const dispatch = useDispatch();
  const router = useRouter();
  const cartData = useSelector((state) => state?.Cart);
  let { id, title, price, description, image, color, size } = router.query;
  color = color ? color.split(',') : [];
  size = size ? size.split(',') : [];

  const [service, setService] = useState();
  const [showPinCodeMessage, setShowPinCodeMessage] = useState(false);

  const initialState = {
    quantity: 1,
    color: "",
    size: "",
  }
  const validationModal = Yup.object().shape({
    color: Yup.string().required("Color is required"),
    size: Yup.string().required("Size is required"),
  });
  const onHandle = (values) => {
    let modified;

    const unique = cartData?.cart?.find((item) => {
      return item?.name === title && item?.color === values?.color && item?.size === values?.size;
    });

    const numericQuantity = parseInt(quantity.value); // Extract numeric value from HTMLInputElement

    if (unique?.color === values?.color && unique?.size === values?.size ) {
      modified = {
        ...unique,
        quantity: numericQuantity + unique?.quantity,
        price: price * numericQuantity + parseFloat(unique?.price),
      };
      dispatch(manipulateCart(modified));
      dispatch(subTotalIncrement(parseFloat(price * numericQuantity)));
      toast.success("Item Added to Cart!");
      return;
    } else if (values?.quantity > 1) {
      modified = {
        id: id,
        name: title,
        quantity: values?.quantity,
        price: price * parseInt(values?.quantity),
        ...values
      };
    } else {
      modified = {
        id: id,
        name: title,
        quantity: values.quantity,
        price: price,
        ...values
      };
    }
    dispatch(pushCart(modified));
    dispatch(subTotalIncrement(parseFloat(modified?.price)));
    toast.success("Item Added to Cart!");
  };





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
      setTimeout(() => {
        setShowPinCodeMessage(false)
      }, 6000);
    } else {
      setShowPinCodeMessage(true);
      setService(false);
      setTimeout(() => {
        setShowPinCodeMessage(false)
      }, 6000);
    }
  }
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  })

  return (
    <>
      <section className="py-5">
        <div className="container px-4 px-lg-5 my-2">
          <div className="row gx-4 gx-lg-5 align-items-center">
            <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0" src={image} alt="..." /></div>
            <div className="col-md-6">
              <div className="small mb-1">SKU: BST-498</div>
              <h1 className="display-5 fw-bolder">{title}</h1>
              <div className="fs-5 mb-5">
                <span>${price}</span>
              </div>
              <p className="lead">{description}</p>
              <Formik
                initialValues={initialState}
                validationSchema={validationModal}
                onSubmit={onHandle}
              >
                <Form>
                  <div className="d-flex mt-3">
                    <Field
                      type="number"
                      name="quantity"
                      id="quantity"
                      className="form-control text-center me-3"
                      min={1}
                      style={{ maxWidth: "4.5rem" }}
                    />
                    <Field
                      as="select"
                      name="color"
                      id="color"
                      className="form-select"
                      style={{ width: "150px" }}
                    >
                      <option selected value="" disabled>
                        Select Color
                      </option>
                      {color.map((color, index) => (
                        <option key={index} value={color}>
                          {color}
                        </option>
                      ))}
                    </Field>
                    <ErrorMessage name='color'>{error => <div className='error'>{error}</div>}</ErrorMessage>
                    <Field
                      as="select"
                      name="size"
                      id="size"
                      className="form-select mx-2"
                      style={{ width: "150px" }}
                    >
                      <option selected value="" disabled>
                        Select Size
                      </option>
                      {size.map((size, index) => (
                        <option key={index} value={size}>
                          {size}
                        </option>
                      ))}
                    </Field>
                    <ErrorMessage name='size'>{error => <div className='error'>{error}</div>}</ErrorMessage>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-outline-dark flex-shrink-0 mt-3"
                  >
                    <i className="bi-cart-fill me-1"></i>
                    Add to Cart
                  </button>
                </Form>
              </Formik>
              <form onSubmit={formik.handleSubmit}>
                <div className="d-flex mt-3">
                  <input
                    style={{ width: "33%" }}
                    placeholder="Enter Pin Code"
                    name="pinCode"
                    id="pinCode"
                    className="form-control"
                    {...formik.getFieldProps("pinCode")}
                  />
                  <button type="submit" className="btn btn-outline-success mx-3">
                    Check
                  </button>
                </div>
                {formik.touched.pinCode && formik.errors.pinCode ? (
                  <div className="text-danger">{formik.errors.pinCode}</div>
                ) : null}
                {showPinCodeMessage ? (
                  !service ? (
                    <p>Sorry! We couldn't deliver to this place</p>
                  ) : (
                    <p>Yay! This Pincode is serviceable</p>
                  )
                ) : null}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}