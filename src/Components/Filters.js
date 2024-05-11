import React from 'react'
import Ratings from './Ratings';
import { CartState } from '../context/Context';

const Filters = () => {
  const {productState:{
    byStock, byFastDelivery, sort, byRating,
  } , productDispatch } =  CartState();

  console.log(byStock, byFastDelivery, sort, byRating, )

    return (
        <div className='filters' >
            <span className='title' >Filter Products</span>

            <span>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="group1" id={`inline-1`}
                    onChange={() => productDispatch({
                        type: "SORT_BY_PRICE",
                        payload: "lowToHigh"
                    })} 
                    checked={sort === "lowToHigh" ? true : false}/>
                    <label className="form-check-label" for="flexRadioDefault1" >
                        Ascending
                    </label>
                </div>
            </span>

            <span>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="group2" id={`inline-2`} onChange={() => productDispatch({
                        type: "SORT_BY_PRICE",
                        payload: "highToLow"
                    })} 
                    checked={sort === "highToLow" ? true : false} />
                    <label className="form-check-label" for="flexRadioDefault2">
                        Descending
                    </label>
                </div>
            </span>

            <span>
                <div class="form-check">
                    <input className="form-check-input" type="checkbox" value="" name='group1' id={`inline-3`} onChange={() => productDispatch({
                        type: "FILTER_BY_STOCK"
                    })} 
                    checked={byStock}/>
                    <label className="form-check-label" for="flexCheckDefault">
                        Include out of Stock
                    </label>
                </div>

            </span>

            <span>
                <div class="form-check">
                    <input className="form-check-input" type="checkbox" value="" name='group1' id={`inline-4`} onChange={() => productDispatch({
                        type: "FILTER_BY_DELIVERY"
                    })} 
                    checked={byFastDelivery}/>
                    <label className="form-check-label" for="flexCheckChecked">
                        Fast Delivery Only
                    </label>
                </div>
            </span>

            <span>
                <label style={{ paddingRight: 10 }} >Rating: </label>
                <Ratings rates={byRating} onClick={(i) => productDispatch({
                    type : "FILTER_BY_RATING",
                    payload : i+1,
                })} style={{ cursor: "pointer" }} />
            </span>
            <button className='btn btn-outline-warning' variant="light" onClick={() => productDispatch({
                        type: "CLEAR_FILTERS"
                    })}>Clear Filters</button>

        </div>
    )
}

export default Filters
