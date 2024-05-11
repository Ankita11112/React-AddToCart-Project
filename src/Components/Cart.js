import React, { useState, useEffect } from 'react'
import { CartState } from '../context/Context'
import './Styles.css'
import ListGroup from 'react-bootstrap/ListGroup';
import {Button , Image} from 'react-bootstrap';
import Ratings from './Ratings';
import Form from 'react-bootstrap/Form';
import { AiFillDelete } from "react-icons/ai";

const Cart = () => {
 
const {state:{cart},
dispatch,
} = CartState();

const [total, setTotal] = useState();

useEffect(() => {
setTotal(cart.reduce((acc, curr) =>  acc + parseInt(curr.price)*curr.qty ,0));
}, [cart])


  return (
    <>
    
    <div className=' container-fluid w-100 mt-0'>
      <div className="home row">
        <div className=" col-md-9 col-10" >
          <div className="productContainer">
            <ListGroup>
              {
              cart.map((prod) => (
                <ListGroup.Item key={prod.id}>
                  <div className="row productRow justify-content-between align-items-center px-3 py-2 ">
                    <div className="col-md-2">
                      <Image src={prod.image} alt={prod.name} fluid rounded/>
                    </div>
                    <div className="col-md-2">
                      <span>{prod.name}</span>
                    </div>
                    <div className="col-md-2">
                      ₹ {prod.price}/-
                    </div>
                    <div className="col-md-2 ">
                      <Ratings rates={prod.ratings} />
                    </div>
                    <div className="col-md-2 "> 
                    <Form.Control as="select" 
                    onChange={(e) => dispatch({
                      type: "CHANGE_CART_QTY",
                      payload: {
                        id: prod.id,
                        qty: e.target.value
                      },
                    }) 
                  } value={prod.qty}>
                      {[...Array(prod.inStock).keys()].map((x) => (
                        <option key={x+1}>{x+1}</option>
                      ))}
                    </Form.Control>
                    </div>
                    <div className="col-md-2">
                      <Button
                      type='button'
                      variant='light'
                      onClick={() => dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: prod,
                      })}
                      >
                      <AiFillDelete fontSize="20px" />Del to Cart
                      </Button>
                    </div>
                  </div>
                </ListGroup.Item>
              ))
            }
            </ListGroup>
            
          </div>
        </div>
        <div className="col-md-3 col-12 h-100 bg-dark" style={{height: "100vh"}}>
         <div className="filters summary">
          <span className='title'>
            Subtotal ({cart.length}) items
          </span>
          <span>Total: ₹ {total} </span><hr/>
          <Button type='button' disabled={cart.length === 0} >Proceed to Checkout</Button>
         </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Cart