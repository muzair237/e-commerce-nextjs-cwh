import React from 'react';
import Link from 'next/link';
import { BiSolidHome } from 'react-icons/bi';
import { BiEnvelope } from 'react-icons/bi';
import { BiPhoneCall } from 'react-icons/bi';
import { BiPrinter } from 'react-icons/bi';
import style from '../styles/footer.module.css'

export default function Footer() {
    return (
        <>
            <footer className="text-center text-lg-start bg-light text-muted">
                <section>
                    <div className="container text-center text-md-start mt-5">
                        <div className="row mt-3">
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <Link className={`${style.logo}`} href="/"><h6 className="text-uppercase fw-bold mb-4 logo">Codeswear</h6></Link>
                                <p>
                                    Here you can use rows and columns to organize your footer content. Lorem ipsum
                                    dolor sit amet, consectetur adipisicing elit.
                                </p>
                            </div>
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Products
                                </h6>
                                <p>
                                    <Link href="#!" className={`${style.logo}`}>Angular</Link>
                                </p>
                                <p>
                                    <Link href="#!" className={`${style.logo}`}>React</Link>
                                </p>
                                <p>
                                    <Link href="#!" className={`${style.logo}`}>Vue</Link>
                                </p>
                                <p>
                                    <Link href="#!" className={`${style.logo}`}>Laravel</Link>
                                </p>
                            </div>
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Useful links
                                </h6>
                                <p>
                                    <Link href="#!" className={`${style.logo}`}>Pricing</Link>
                                </p>
                                <p>
                                    <Link href="#!" className={`${style.logo}`}>Settings</Link>
                                </p>
                                <p>
                                    <Link href="#!" className={`${style.logo}`}>Orders</Link>
                                </p>
                                <p>
                                    <Link href="#!" className={`${style.logo}`}>Help</Link>
                                </p>
                            </div>
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                                <p><BiSolidHome /> New York, NY 10012, US</p>
                                <p>
                                    <BiEnvelope />
                                    info@example.com
                                </p>
                                <p><BiPhoneCall /> + 01 234 567 88</p>
                                <p><BiPrinter /> + 01 234 567 89</p>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
                    © 2021 Copyright:
                    <Link className="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</Link>
                </div>
            </footer>
        </>
    )
}
