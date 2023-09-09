import React, { useState } from 'react';
import style from "../styles/navbar.module.css"
import Link from 'next/link';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BiPlusCircle, BiMinusCircle } from 'react-icons/bi';
import { MdShoppingCartCheckout } from 'react-icons/md';
import { Offcanvas, OffcanvasHeader, Button, OffcanvasBody, Modal, ModalHeader, ModalFooter } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
    resetCart,
    tShirtsIncrement,
    tShirtsDecrement,
    hoodiesIncrement,
    hoodiesDecrement,
    stickersIncrement,
    stickersDecrement,
    mugsIncrement,
    mugsDecrement,
    subTotalIncrement,
    subTotalDecrement
} from "../slices/cart/reducer";
import { useRouter } from 'next/router';

export default function Navbar() {
    const router = useRouter();
    const dispatch = useDispatch();
    const cartData = useSelector((state) => state?.Cart);
    const areAllCartDataNull = Object.values(cartData).every((value) => value === 0);

    const [isOffcanvasOpen, setOffcanvasOpen] = useState(false);
    const [modal, setModal] = useState(false);


    const toggleOffcanvas = () => {
        setOffcanvasOpen(!isOffcanvasOpen);
    };
    const toggleModal = () => setModal(!modal);
    const clearCart = () => {
        toast.success("Cart Cleared Successfully!")
        dispatch(resetCart());
        toggleModal();
        toggleOffcanvas();
    }

    return (
        <>
            <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" href="/">Wear The Code</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" href="/tshirts">TShirts</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/hoodies">Hoodies</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/stickers">Stickers</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/mugs">Mugs</Link>
                            </li>

                        </ul>
                        <div className="d-flex" role="search">
                            <AiOutlineShoppingCart type='button' className='fs-3 text-light' onClick={toggleOffcanvas} />
                        </div>
                    </div>
                </div>
            </nav>
            <div>
                <Offcanvas scrollable direction="end" isOpen={isOffcanvasOpen} toggle={toggleOffcanvas}>
                    <OffcanvasHeader toggle={toggleOffcanvas}>
                        <p className="outfit fw-bold">Shopping Cart</p>
                    </OffcanvasHeader>
                    {
                        areAllCartDataNull ? (
                            <OffcanvasHeader>
                                <p className="outfit fw-medium fs-5">Cart is Empty! Enter Few Items to Checkout!</p>
                            </OffcanvasHeader>
                        ) : (
                            <OffcanvasBody className="outfit fw-medium fs-5">
                                <div className="d-flex">
                                    <p className={`${style.itemName}`}>1. T-Shirts</p>
                                    <p className={`${style.itemName}`}> — {cartData?.tShirt}</p>
                                </div>
                                <div className="d-flex">
                                    <p className={`${style.itemName}`}>2. Hoodies</p>
                                    <p className={`${style.itemName}`}> — {cartData?.hoodie}</p>
                                </div>
                                <div className="d-flex">
                                    <p className={`${style.itemName}`}>3. Stickers</p>
                                    <p className={`${style.itemName}`}> — {cartData?.sticker}</p>
                                </div>
                                <div className="d-flex">
                                    <p className={`${style.itemName}`}>4. Mugs</p>
                                    <p className={`${style.itemName}`}> — {cartData?.mug}</p>
                                </div>
                                <div className="mt-4">
                                    <Link href="/checkout" onClick={()=>toggleOffcanvas()} className='btn btn-success'>Checkout <MdShoppingCartCheckout className='fs-4' /> </Link>
                                    <button onClick={toggleModal} className='btn btn-danger mx-2'>Clear Cart</button>

                                    <Modal isOpen={modal} toggle={toggleModal}>
                                        <ModalHeader toggle={toggleModal}>Are you sure you want to clear the Cart?</ModalHeader>
                                        <ModalFooter>
                                            <Button color="danger" onClick={clearCart}>
                                                Yes, Clear Cart.
                                            </Button>{' '}
                                            <Button color="secondary" onClick={toggleModal}>
                                                Cancel
                                            </Button>
                                        </ModalFooter>
                                    </Modal>
                                </div>
                            </OffcanvasBody>
                        )
                    }
                </Offcanvas>
            </div>
        </>
    )
}