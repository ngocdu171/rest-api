import React from 'react'
import { Link } from 'react-router-dom';

export default function HomeScreen(props) {
    const products = props.products;
    return (
        <ul className="products">
            {products.map((product, index) =>
                <li key={index}>
                    <div className="product">
                        <Link to={"/product/" + product.id_product}>
                            <img className="product-image" src={product.image} alt={product.name_product}/>
                        </Link>
                        <div className="product-name">
                            <Link to={"/product/" + product.id_product}>{product.name_product}</Link>
                        </div>
                        <div className="product-brand">brand: {product.brand}</div>
                        <div className="product-price">{product.price} $</div>
                        <div className="product-rating">{product.rating} stars</div>
                    </div>
                </li>
            )}
        </ul>
    )
}
