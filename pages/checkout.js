import React from 'react'
import {
  Container,
  Row,
  Col,
  Label,
} from "reactstrap";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { useSelector } from 'react-redux';
export default function checkout() {
  const cartData = useSelector((state) => state?.Cart);
  const initialValues = {
    name: "",
    email: "",
    address: "",
    phone: "",
    city: "",
    pinCode: ""
  }
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('Name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    address: Yup.string()
      .required('Address is required'),
    phone: Yup.string()
      .min(10, "Phone number must be 10 digits")
      .required('Phone number is required'),
    city: Yup.string()
      .required('City is required'),
    pinCode: Yup.string()
      .min(5, 'PIN code must be 6 digits')
      .required('PIN code is required'),
  });
  const onSubmit = (values) => {
    console.log("Formik Values: ", values)
  }
  return (
    <>
      <Container className='mt-5'>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          enableReinitialize={true}
          onSubmit={onSubmit}>
          <Form className="tablelist-form">
            {/* Your form inputs */}
            <Field type="hidden" id="id-field" />
            <Row className="g-3 mt-3">
              <Col>
                <div>
                  <Label htmlFor="name" className="form-label">
                    <span style={{ color: "red" }}>*</span>Name
                  </Label>
                  <Field
                    name="name"
                    id='name'
                    className="form-control"
                    type="text"
                  />
                  <ErrorMessage name='name'>{error => <div className='error'>{error}</div>}</ErrorMessage>
                </div>
              </Col>
              <Col>
                <div>
                  <Label htmlFor="email" className="form-label">
                    <span style={{ color: "red" }}>*</span>
                    E-mail
                  </Label>
                  <Field
                    name="email"
                    id="email"
                    className="form-control"
                    type="text"
                  />
                  <ErrorMessage name='email'>{error => <div className='error'>{error}</div>}</ErrorMessage>
                </div>
              </Col>
            </Row>
            <Row className="g-3 mt-3">
              <Col>
                <div>
                  <Label htmlFor="address" className="form-label">
                    <span style={{ color: "red" }}>*</span>
                    Address
                  </Label>
                  <Field as="textarea" id="address" name="address" className="form-control" />
                  <ErrorMessage name='address'>{error => <div className='error'>{error}</div>}</ErrorMessage>
                </div>
              </Col>
              <Col>
                <div>
                  <Label
                    htmlFor="phone"
                    className="form-label"
                  >
                    <span style={{ color: "red" }}>*</span>
                    Phone
                  </Label>
                  <Field
                    name="phone"
                    id="phone"
                    className="form-control"
                    type="text"
                  />
                  <ErrorMessage name='phone'>{error => <div className='error'>{error}</div>}</ErrorMessage>
                </div>
              </Col>
            </Row>
            <Row className="g-3 mt-3 mt-1">
              <Col>
                <div>
                  <Label
                    htmlFor="city"
                    className="form-label"
                  >
                    <span style={{ color: "red" }}>*</span>
                    City
                  </Label>
                  <Field
                    name="city"
                    id="city"
                    className="form-control"
                    type="text"
                  />
                  <ErrorMessage name='city'>{error => <div className='error'>{error}</div>}</ErrorMessage>
                </div>
              </Col>
              <Col>
                <div>
                  <Label
                    htmlFor="pinCode"
                    className="form-label"
                  >
                    <span style={{ color: "red" }}>*</span>
                    Pincode
                  </Label>
                  <Field
                    name="pinCode"
                    id="pinCode"
                    className="form-control"
                    type="text"
                  />
                  <ErrorMessage name='pinCode'>{error => <div className='error'>{error}</div>}</ErrorMessage>
                </div>
              </Col>
            </Row>
            <div className="d-grid gap-2 col-3 mx-auto mt-4">
              <button className="btn btn-outline-dark" type="button">Submit</button>
            </div>
          </Form>
        </Formik>
        <hr />
      </Container>
      <Container className='mt-4'>
        <h4 className=''>Review Cart Items: </h4>
        <div className="cartItems mt-4 mx-4">
          <h5>{`No. of T-Shirts => ${cartData?.tShirt}`}</h5>
          <h5>{`No. of Hoodies => ${cartData?.hoodie}`}</h5>
          <h5>{`No. of Stickers => ${cartData?.sticker}`}</h5>
          <h5>{`No. of Mugs => ${cartData?.mug}`}</h5>

          <h5>Sub Total: ${cartData?.subTotal}</h5>
        </div>
      </Container>
      
    </>
  )
}
