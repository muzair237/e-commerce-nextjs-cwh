import React, { useEffect, useState } from 'react'
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
    }
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])
    return (
        <>
            <Container>
                <header>
                    <div className="container px-5">
                        <div className="row gx-5 ">
                            <div className="col-lg-8 col-xl-7 col-xxl-6">
                                <div className="my-5 text-center text-xl-start">
                                    <p className='fw-bold fs-5'>CODESWEAR.COM</p>
                                    {isClient ? (
                                        cartData?.cart?.length > 0 ? (
                                            <>
                                                <h2 className="fw-bolder mb-2">Order ID: {cartData?.id} </h2>
                                                <p className="lead fw-normal mb-4">Please Verify Your Cart Details!</p>
                                            </>
                                        ) : (
                                            null
                                        )
                                    ) : (
                                        null
                                    )
                                    }
                                    <div className='order-details'>
                                        {isClient ? (
                                            <>
                                                <table className="table">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">#</th>
                                                            <th scope="col">Description</th>
                                                            <th scope="col">Quantity(piece(s))</th>
                                                            <th scope="col">Total</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {cartData?.cart?.length > 0 ? (
                                                            cartData?.cart?.map((item, index) => (
                                                                <tr key={index}>
                                                                    <th>{index + 1}</th>
                                                                    <td>
                                                                        {`${item?.name} `}
                                                                        <span className="text-muted">
                                                                            ({`${item?.color}/${item?.size}`})
                                                                        </span>
                                                                    </td>
                                                                    <td>{item?.quantity}</td>
                                                                    <td>${item?.price}</td>
                                                                </tr>
                                                            ))
                                                        ) : (
                                                            <tr>
                                                                <td className='fw-bold' colSpan={4}>No Items in The Cart!</td>
                                                            </tr>
                                                        )}
                                                    </tbody>
                                                </table>
                                                <p className='fs-5'><span className='fw-bold'>Sub Total: </span>${cartData?.subTotal.toFixed(2)}</p>
                                            </>
                                        ) : (
                                            null
                                        )
                                        }

                                    </div>

                                    <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                                        <button className="btn btn-outline-dark btn-sm px-4 mt-3 me-sm-3" href="#features">Place Order</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <hr />
            </Container>
            <Container>
                <h4 className='fw-bold text-center'>Delivery Information</h4>
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
                            <button className="btn btn-outline-dark" type="submit">Submit</button>
                        </div>
                    </Form>
                </Formik>
            </Container>
        </>
    )
}
