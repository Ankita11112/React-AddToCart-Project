import React from 'react'
import { CartState } from '../context/Context'
import SingleProduct from './SingleProduct';
// import './Styles.css';
import Filters from './Filters';

const Home = () => {

  const { state: { products },
    productState: {
      byStock, byFastDelivery, sort, byRating, searchQuery
    }
  } = CartState();

  const transformProducts = () => {
    let sortedProducts = products;
    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }
    if(!byStock){
      sortedProducts = sortedProducts.filter((prod) => prod.inStock);
    }

    if(byFastDelivery) {
      sortedProducts = sortedProducts.filter((prod)=> prod.fastDelivery);
    }

    if(byRating){
      sortedProducts = sortedProducts.filter(
        (prod) => prod.ratings >= byRating
      )
    }

    if(searchQuery){
      sortedProducts = sortedProducts.filter((prod) => prod.name.toLowerCase().includes(searchQuery))
    }

    return sortedProducts;
  }

  return (
    <div className=' container-fluid w-100 mt-0' >
      <div className=" row">
        <div className="col-md-2 col-12 h-100 bg-dark" style={{ height: "100vh" }}>
          <Filters />
        </div>
        <div className=" col-md-10 col-11 mx-auto" >
          <div className="productContainer">
            {
              transformProducts().map((prod) => {
                return <SingleProduct prod={prod} key={prod.id} />
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home