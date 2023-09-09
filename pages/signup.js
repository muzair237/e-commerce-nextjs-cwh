import React from 'react'
import style from "../styles/login.module.css"
import Link from 'next/link'
export default function login() {
    return (
        <>
            <div className="container-fluid ps-md-0">
                <div className="row g-0">
                    <div className="col-md-8 col-lg-6">
                        <div className={`${style.login} d-flex align-items-center py-5`}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-9 col-lg-8 mx-auto">
                                        <h3 className={`${style.loginHeading} mb-4`}>SignUp Here!</h3>
                                        <form>
                                        <div className="form-floating mb-3">
                                                <input type="text" className="form-control" id="floatingName" placeholder="Name" />
                                                <label for="floatingName">Name</label>
                                            </div>
                                            <div className="form-floating mb-3">
                                                <input type="text" className="form-control" id="floatingEmail" placeholder="Email" />
                                                <label for="floatingEmail">Email</label>
                                            </div>
                                            <div className="form-floating mb-3">
                                                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                                <label for="floatingPassword">Password</label>
                                            </div>
                                            <div className="d-grid">
                                                <button className={`btn btn-lg btn-primary ${style.btnLogin} text-uppercase fw-bold mb-2`} type="submit">SignUp</button>
                                                <div className='text-center'>
                                                    Already a Member? <Link href="/login">Login </Link>
                                                </div>
                                            </div>
                                        </form>
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
