import React, { useEffect, useState } from 'react';
import style from "../styles/navbar.module.css"
import Link from 'next/link';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { MdShoppingCartCheckout } from 'react-icons/md';
import { BiUserCircle } from 'react-icons/bi';
import { Offcanvas, OffcanvasHeader, Button, OffcanvasBody, Modal, ModalHeader, ModalFooter } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
    resetCart,
} from "../slices/cart/reducer";
import { useRouter } from 'next/router';
import { logoutUser } from '../slices/auth/thunk';

export default function Navbar() {
    const router = useRouter();
    const dispatch = useDispatch();
    const userData = useSelector((state) => state?.Login?.user);
    const cartData = useSelector((state) => state?.Cart);
    const isCartNull = cartData?.cart?.length;

    const [isOffcanvasOpen, setOffcanvasOpen] = useState(false);
    const [modal, setModal] = useState(false);
    const [isClient, setIsClient] = useState(false);


    const toggleOffcanvas = () => {
        setOffcanvasOpen(!isOffcanvasOpen);
    };
    const toggleModal = () => setModal(!modal);
    const clearCart = () => {
        toast.success("Cart Cleared Successfully!", {
            autoClose: 800
        })
        dispatch(resetCart());
        toggleModal();
        toggleOffcanvas();
    }
    useEffect(() => {
      setIsClient(true);
    }, [])
    

    return (
        <>
            <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" href="/">CustomizeMe Co.</Link>
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
                        {isClient ? (
                            <div className="d-flex" role="search">
                            {Object.keys(userData).length === 0 ? (
                                <Link href="/auth/login">
                                    <Button type='button' className='btn btn-sm mx-2'>Login</Button>
                                </Link>
                            ) : (
                                <div className="dropstart dropdown-menu-end">
                                    <BiUserCircle type='button' className='fs-3 text-light mx-2 dropdown-toggle' data-bs-toggle="dropdown" aria-expanded="false"/>
                                    <ul className="dropdown-menu">
                                        <li className='dropdown-item'>{`Welcome! ${userData?.name}`}</li>
                                        <li className='dropdown-item'>{userData?.email}</li>
                                        <li><hr className="dropdown-divider"/></li>
                                        <li onClick={()=> dispatch(logoutUser())} type="button" className='dropdown-item'>Logout</li>
                                    </ul>
                                </div>
                            )}

                            <AiOutlineShoppingCart type='button' className='fs-3 text-light' onClick={toggleOffcanvas} />
                        </div>
                        ) : null}
                    </div>
                </div>
            </nav>
            <div>
                <Offcanvas scrollable direction="end" isOpen={isOffcanvasOpen} toggle={toggleOffcanvas}>
                    <OffcanvasHeader toggle={toggleOffcanvas}>
                        <p className="outfit fw-bold">Shopping Cart</p>
                    </OffcanvasHeader>
                    {
                        !isCartNull ? (
                            <OffcanvasHeader>
                                <p className="outfit fw-medium fs-5">Cart is Empty! Enter Few Items to Checkout!</p>
                            </OffcanvasHeader>
                        ) : (
                            <OffcanvasBody className="outfit fw-medium fs-5">
                                {
                                    cartData?.cart?.map((item, index) => {
                                        return (
                                            <h5 key={index}>
                                                {`${index + 1} - ${item?.name} `}
                                                <span className="text-muted">
                                                    ({`${item?.color}/${item?.size}/${item?.quantity} piece(s)`})
                                                </span>
                                            </h5>
                                        )
                                    })
                                }
                                <hr />
                                <h5>SubTotal: ${(cartData?.subTotal).toFixed(2)}</h5>
                                <div className="mt-4">
                                    <Link href="/checkout" onClick={() => toggleOffcanvas()} className='btn btn-success'>Checkout <MdShoppingCartCheckout className='fs-4' /> </Link>
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