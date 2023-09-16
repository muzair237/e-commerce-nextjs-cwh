import React, { useEffect } from 'react'
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import style from "../../styles/auth.module.css"
import Link from 'next/link'
import { registerUser } from '../../slices/auth/thunk';
import { useDispatch, useSelector } from 'react-redux';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function signup() {
    const router = useRouter();
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.Login.isLoading);
    const initialValues = {
        name: "",
        email: "",
        password: ""
    }
    const validationSchema = Yup.object({
        name: Yup.string()
            .min(3, 'Name must be at least 3 characters')
            .required('Name is required'),
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required')
    });
    const onSubmit = async (values) => {
        const signupInfo = {
            name: values.name,
            email: values.email,
            password: values.password,
        }
        dispatch(registerUser({ signupInfo: signupInfo, router }));
        resetform();
    }
    useEffect(() => {
        if(sessionStorage.getItem("authUser")){
          router.push("/")
        }
      }, [])
    return (
        <>
            <Head>
                <title>SignUp</title>
            </Head>
            <div className="container-fluid ps-md-0">
                <div className="row g-0">
                    <div className="col-md-8 col-lg-6">
                        <div className={`${style.login} d-flex align-items-center py-5`}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-9 col-lg-8 mx-auto">
                                        <h3 className={`${style.loginHeading} mb-4`}>SignUp Here!</h3>
                                        <Formik
                                            initialValues={initialValues}
                                            validationSchema={validationSchema}
                                            onSubmit={onSubmit}
                                        >
                                            <Form>
                                                <div className="form-floating mb-3">
                                                    <Field type="text" className="form-control" id="name" name="name" placeholder="Name" />
                                                    <label htmlFor="name">Name</label>
                                                    <ErrorMessage name='name'>{error => <div className='error'>{error}</div>}</ErrorMessage>
                                                </div>
                                                <div className="form-floating mb-3">
                                                    <Field type="text" className="form-control" id="email" name="email" placeholder="Email" />
                                                    <label htmlFor="email">Email</label>
                                                    <ErrorMessage name='email'>{error => <div className='error'>{error}</div>}</ErrorMessage>
                                                </div>
                                                <div className="form-floating mb-3">
                                                    <Field type="password" className="form-control" id="password" name="password" placeholder="Password" />
                                                    <label htmlFor="password">Password</label>
                                                    <ErrorMessage name='password'>{error => <div className='error'>{error}</div>}</ErrorMessage>
                                                </div>
                                                <div className="d-grid">
                                                    <button
                                                        className={`btn btn-lg btn-dark ${style.btnLogin} text-uppercase fw-bold mb-2`}
                                                        disabled={isLoading}
                                                        type="submit"
                                                    >
                                                        {isLoading ? "Signing Up..." : "Sign Up"}
                                                    </button>

                                                    <div className='text-center'>
                                                        Already a Member? <Link className='text-decoration-underline' href="/auth/login">Login</Link>
                                                    </div>
                                                </div>
                                            </Form>
                                        </Formik>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
