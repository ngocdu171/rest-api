import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function ProductScreen(props) {
    const [Quantity, setQuantity] = useState(1)
    var id = props.match.params.id;
    // props.getproduct(id);
    const product = props.getproduct(id);
    console.log(product);
    function addToCart(event) {
        event.preventDefault();
        // console.log("ProductScreen: ", id);
        // props.addCart(event.target['select'].value);
        // console.log(Quantity);
        props.addCart(Quantity,product);
    }
    return (
        // <form onSubmit={props.addCart}>
        <div>
            <div className="back-to-homepage">
                <Link to="/">Back to Homepage</Link>
            </div>
            <div className="details">
                <div className="details-image">
                    <img src={product.image} alt={product.name_product} />
                </div>
                <div className="details-info">
                    <ul>
                        <li>
                            <h4>{product.name_product}</h4>
                        </li>
                        <li>
                            {product.rating} Stars ({product.numReviews} Customer reviews)
                        </li>
                        <li>
                            Price: $ <b>{product.price}</b>
                        </li>
                        <li>
                            Description: {product.description}
                        </li>
                    </ul>
                </div>
                <div className="details-action">
                    <ul>
                        <li>
                            Price: {product.price}
                        </li>
                        <li>
                            Status: {product.countInStock > 0 ?"In stock": "Out of Stock"}
                        </li>
                        <li>
                            Qty: <select value={Quantity} onChange={(event)=> setQuantity(event.target.value)}>
                                    {[...Array(product.countinstock).keys()].map(x =>
                                        <option key={x+1} value={x + 1}>{x + 1}</option>
                                    )}
                            </select>
                        </li>
                        <li>
                            {product.countinstock > 0 && <button 
                                onClick={addToCart}
                                className="btn-Add-to-cart">Add to Cart</button>
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        // </form>
    )
}

// <li>
//                             Qty: <select 
//                                     value={qty}
//                                     onChange={(event) => {setQty(event.target.value);}}>
//                                     {[...Array(product.countInStock).keys()].map(x =>
//                                         <option key={x+1} value={x + 1}>{x + 1}</option>
//                                     )}
//                             </select>
//                         </li>