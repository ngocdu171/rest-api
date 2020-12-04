import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Cart(props) {
    const product = props.Carted;
    // const [quantity, setquantity] = useState();
    // console.log(product);

    // function adjustQty(id_product) {
    //     product.forEach(item => {
    //         if(item.id_product === id_product) {
    //             console.log(quantity);
    //         }
    //     });
    // }

    function removeItem(id_product) {
        props.deleteItem(id_product);
    }
    function checkout() {
        if(props.username) {
            alert("next step");
        }
        else {
            alert("You have to login!");
            props.history.push('/login');
        }
    }
    return (
        <div>
            
                <div className="cart">
                    <div className="cart-list">
                        <ul className="cart-list-container">
                            <li>
                                <h3>Shopping Cart</h3>
                                <div>Price</div>
                            </li>
                            { product.length === 0?<div>Cart is Empty</div>:
                                <div>
                                    {product.map((product, index) =>
                                        <li key={index}>
                                            <div className="cart-image">
                                                <img src={product.image} alt="product" />
                                            </div>
                                            <div className="cart-name">
                                                <div>
                                                    <Link to={"/product/" + product.id_product}>
                                                        {product.name_product}
                                                    </Link>
                                                </div>
                                                <div>
                                                    Qty: {product.quantity}
                                                    {/* <select value={product.quantity} onChange={(event) => adjustQty(product.id_product,setquantity(event.target.value))}>
                                                        {[...Array(product.countinstock).keys()].map(x =>
                                                            <option key={x + 1} value={x + 1}>{x + 1}</option>
                                                        )}
                                                        </select> */}
                                                    <button type="button" onClick={() => removeItem(product.id_product)}>Delete</button>
                                                </div>
                                            </div>
                                            <div className="cart-price">
                                                {product.price}$
                                        </div>
                                        </li>
                                    )}
                                </div>
                            }
                        </ul>
                    </div>
                    <div className="cart-action">
                        <h3>
                            Subtotal( {product.reduce((a,c) => a + c.quantity, 0)} items):
                            $ {product.reduce((a,c) => a + c.price * c.quantity, 0)}
                        </h3>
                        { /* <h3>Subtotal({quantity} items): {product.price * quantity}</h3> 
                        <h3>
                            Subtotal( {product.reduce((a,c) => a + quantity, 0)} items):
                            $ {product.reduce((a,c) => a + product.price * quantity, 0)}
                                                </h3> */}
                        <button onClick={checkout} className="btnProceed" disabled={product.length === 0}>
                            <strong> Proceed to checkout </strong>
                        </button>
                    </div>
                </div>
        </div>
    )
}

// <div>
//         {product.length === 0?<div>Cart is Empty</div>:
//             <div className="cart">
//                 <div className="cart-list">
//                     <ul className="cart-list-container">
//                         <li>
//                             <h3>Shopping Cart</h3>
//                             <div>Price</div>
//                         </li>
//                         {product.map((product, index) =>
//                             <li key={index}>
//                                 <div className="cart-image">
//                                     <img src={product.image} alt="product" />
//                                 </div>
//                                 <div className="cart-name">
//                                     <div>
//                                         <Link to={"/product/" + product.id_product}>
//                                             {product.name}
//                                         </Link>
//                                     </div>
//                                     <div>
//                                         Qty:
//                                         <select value={quantity} onChange={(event) => setquantity(event.target.value)}>
//                                             {[...Array(product.countinstock).keys()].map(x =>
//                                                 <option key={x + 1} value={x + 1}>{x + 1}</option>
//                                             )}
//                                         </select>
//                                         <button type="button" onClick={() => removeItem(product.id_product)}>Delete</button>
//                                     </div>
//                                 </div>
//                                 <div className="cart-price">
//                                     {product.price}$
//                             </div>
//                             </li>
//                         )}
//                     </ul>
//                 </div>
//                 <div className="cart-action">
//                     { /* <h3>Subtotal({quantity} items): {product.price * quantity}</h3> */ }
//                     <h3>
//                         Subtotal( {product.reduce((a,c) => a + quantity, 0)} items):
//                         $ {product.reduce((a,c) => a + product.price * quantity, 0)}
//                     </h3>
//                     <button className="btnProceed" disabled={product.id_product === 0}>
//                         Proceed to checkout
//             </button>
//                 </div>
//             </div>
//         }
//         </div>