import React from 'react'
import style from "../styles/login.module.css"
import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'

export default function fogotPassword() {
    const router = useRouter();
    useEffect(() => {
        if (sessionStorage.getItem("authUser")) {
            router.push("/")
        }
    }, [])
    return (
        <>
            <Head>
                <title>Forgot Password</title>
            </Head>
            <div className="container-fluid ps-md-0">
                <div className="row g-0">
                    <div className="col-md-8 col-lg-6">
                        <div className={`${style.login} d-flex align-items-center py-5`}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-9 col-lg-8 mx-auto">
                                        <h3 className={`${style.loginHeading} mb-4`}>Forgot Password?</h3>
                                        <form>
                                            <div className="form-floating mb-3">
                                                <input type="text" className="form-control" id="floatingEmail" placeholder="Email" />
                                                <label htmlFor="floatingEmail">Email</label>
                                            </div>
                                            <div className="d-grid">
                                                <button className={`btn btn-lg btn-primary ${style.btnLogin} text-uppercase fw-bold mb-2`} type="submit">Continue</button>
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
