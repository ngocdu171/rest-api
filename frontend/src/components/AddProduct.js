import Axios from 'axios';
import React from 'react';
import myURL from '../myURL';

export default function AddProduct(props) {
    function AddProduct(event) {
        event.preventDefault();
        const name_product = event.target['name_product'].value;
        const category = event.target['category'].value;
        const image = event.target['image'].value;
        const price = event.target['price'].value;
        const brand = event.target['brand'].value;
        const rating = event.target['rating'].value;
        const numReviews = event.target['numReviews'].value;
        const description = event.target['description'].value;
        const countinstock = event.target['countinstock'].value;
        console.log(name_product, category, image, price, brand, rating, numReviews, description, countinstock);
        if (name_product !== '' && image !== '') {
            Axios.post(myURL + '/product', { name_product, category, image, price, brand, rating, numReviews, description, countinstock }).then(res => {
                alert("Created new product!");
            })
        }
        else {
            alert("name_product and image can not be empty!");
        }
    }
    if (props.username === 'ngocdu171') {
        return (
            <div className="form">
                <form onSubmit={AddProduct}>
                    <ul className="form-container">
                        <li className="title">Add Product</li>
                        <li>
                            <label>Name product</label>
                            <input type="text" id="name_product" name="name_product" placeholder="Name product..." />
                        </li>
                        <li>
                            <label>Category</label>
                            <input type="text" id="category" name="category" placeholder="Category..." />
                        </li>
                        <li>
                            <label>Image</label>
                            <input type="text" id="image" name="image" placeholder="Image..." />
                        </li>
                        <li>
                            <label>Price</label>
                            <input type="number" id="price" name="price" placeholder="Price..." />
                        </li>
                        <li>
                            <label>Brand</label>
                            <input type="text" id="brand" name="brand" placeholder="Brand..." />
                        </li>
                        <li>
                            <label>Rating</label>
                            <input type="number" id="rating" name="rating" placeholder="Rating..." />
                        </li>
                        <li>
                            <label>Number Reviews</label>
                            <input type="number" id="numReviews" name="numReviews" placeholder="Number Reviews..." />
                        </li>
                        <li>
                            <label>Description</label>
                            <input type="text" id="description" name="description" placeholder="Description..." />
                        </li>
                        <li>
                            <label>Count In Stock</label>
                            <input type="number" id="countinstock" name="countinstock" placeholder="Count In Stock..." />
                        </li>
                        <li>
                            <button type="submit" className="btn-Signin">Create</button>
                        </li>
                    </ul>
                </form>
            </div>
        )
    }
    else {
        return (
            <h1>Page is not exist!</h1>
        )
    }
}
