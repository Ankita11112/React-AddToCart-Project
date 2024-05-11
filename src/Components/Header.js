import React from 'react';
import { Link } from 'react-router-dom';
import './Styles.css'
import { CartState } from '../context/Context';
import { AiFillDelete } from "react-icons/ai";
import Button from 'react-bootstrap/Button';

const Header = () => {

    const {
        state : { cart },
        dispatch, productDispatch,
     }  = CartState();

    return (
        <>
            <div className="container-fluid p-0 m-0">
                <nav className="navbar navbar-expand-lg w-100 navbar-dark bg-dark fixed-top" >
                    <div className="container-fluid my-3">
                        <Link className="navbar-brand text-decoration-none fs-3" to="/"><strong>Shopping Cart</strong></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                            <div className="offcanvas-header">
                                <Link className="offcanvas-title text-decoration-none text-light" id="offcanvasDarkNavbarLabel" to="/"><h5> Shopping Cart </h5></Link>
                                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <ul className="navbar-nav justify-content-center px-3 flex-grow-1">
                                    <li className="nav-item" style={{ width: "100%" }}>
                                        <form className="d-flex row" style={{ width: "100%" }} role="search">
                                                <div className="col-md-7 mt-2">
                                                    <input className="form-control mx-2" type="text" placeholder="Search a product" onChange={(e) => productDispatch({
                        type: "FILTER_BY_SEARCH",
                        payload: e.target.value
                    })} aria-label=".form-control-lg example" />
                                                </div>
                                                {/* *********************Add to cart button*********************** */}
                                                <div className="col-md-5 mt-2">
                                                    <div className="btn btn-warning px-1 py-0 position-relative ">
                                                        <i className="fa-solid fa-cart-shopping"></i><span className="dropdown mx-auto">
                                                            <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="true">
                                                            </button>
                                                            <div className="dropdown-menu"  >
                                            
                                                                    {cart.length>0 ? (
                                                                        <>
                                                                        {
                                                                            cart.map(prod => (
                                                                                <span className='cartitem' key={prod.id}>
                                                                                   <img src={prod.image} className=' cartItemImg ' alt={prod.name} /> 
                                                                                <div className='cartItemDetail'>
                                                                                <span>{prod.name}</span>
                                                                                <span>₹ {prod.price.split(".")[0]}</span>
                                                                                </div>
                                                                                <AiFillDelete fontSize="20px" style={{cursor: "pointer"}} onClick={() => dispatch({type: "REMOVE_FROM_CART",
                                                                                 payload: prod, })} />
                                                                                </span>
                                                                            ))}
                                                                            <Link to="/cart">
                                                                                <Button className='btn btn-outline-warning' style={{width: "95%", margin: "0 10px"}}>Go to Cart</Button>
                                                                            </Link>
                                                                        </>
                                                                    ) : (<span className="dropdown-item"><strong>Cart is Empty!</strong> </span>) }
                                                            </div>
                                                        </span>
                                                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ height: "25px", width: "25px", paddingTop: "6px" }}>
                                                            {cart.length}
                                                            <span className="visually-hidden">unread messages</span>
                                                        </span>
                                                    </div>
                                                </div>
                                        </form>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Header;