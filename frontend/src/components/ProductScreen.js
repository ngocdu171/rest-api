import Axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import myURL from '../myURL';

export default function ProductScreen(props) {
    var id_product = props.match.params.id;
    // props.getproduct(id);
    const product = props.getproduct(id_product);
    const [quantity, setquantity] = useState(1);
    const [productadd, setproductadd] = useState(product);
    // console.log(product);
    // const {name_product,category,image,price,brand,rating,numReviews,description,countinstock}=product;
    // const {id_product,name_product,category,image,price,brand,rating,numReviews,description,countinstock}=product;
    // const username = localStorage.getItem("username");
    function addToCart(event) {
            event.preventDefault();
            // console.log("ProductScreen: ", id);
            // props.addCart(event.target['select'].value);
            // console.log(Quantity);
            /////////////
            // Axios.post(myURL + '/cart',{id_product,name_product,category,image,price,brand,rating,numReviews,description,countinstock,quantity,username}).then(res => {
            //     alert("add success!");
            // });
            // setaddItem([id_product,name_product,image,price,quantity]);
            // props.addCart(addItem);
            // console.log(product, quantity);
            productadd.quantity = quantity; //////////////add items to json object javascript
            // setproductadd(productadd.push(quantity));
            // console.log(productadd);
            props.addCart(productadd);
            props.history.push('/cart');
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
                            Price: {product.price * quantity}
                        </li>
                        <li>
                            Status: {product.countinstock > 0 ?"In stock": "Out of Stock"}
                        </li>
                        <li>
                            Qty: <select value={quantity} onChange={(event)=> setquantity(event.target.value)}>
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