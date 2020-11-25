import React, { Component } from 'react';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import Cart from './components/Cart';
import Default from './components/Default';
import HomeScreen from './components/HomeScreen';
import Login from './components/Login';
import ProductScreen from './components/ProductScreen';
import Axios from 'axios';
import Register from './components/Register';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
        this.getproduct=this.getproduct.bind(this);
        this.addCart=this.addCart.bind(this);
    }
    componentDidMount() {
        Axios.get('http://localhost:3000/product').then(res => {
            this.setState({
                products:res.data
            });
        });
    }
    getproduct(id) {
        let tempProducts = [...this.state.products];
        const product = tempProducts.find(item=> item.id_product == id);
        return product;
    }
    addCart(quantity,product) {
        console.log("App-quantity: ", quantity);
        console.log(product);
    }
    // addCart(event) {
    //     event.preventDefault();
    //     var quantity = event.target['select'].value;
    //     console.log(quantity);
    //     // console.log("APP: ", id);
    // }
    
    render() {
        return (
            <div className="grid-container">
                <header className="header">
                    <div className="brand">
                        <Link to="/">Domino</Link>
                    </div>
                    <div className="header-link">
                        <Link to="/cart">Cart</Link>
                        <Link to="/login">Login</Link>
                    </div>
                </header>
                <main>
                    <Switch>
                        <Route exact path="/" render={(routeProps) => <HomeScreen
                                                                        products={this.state.products}
                                                                    {...routeProps} />} />
                        <Route exact path="/product/:id" render={(routeProps) => <ProductScreen
                                                                        getproduct={this.getproduct}
                                                                        addCart={this.addCart}
                                                                    {...routeProps} />} />
                        <Route exact path="/cart" render={(routeProps) => <Cart
                                                                    {...routeProps} />} />
                        <Route exact path="/login" render={(routeProps) => <Login
                                                                    {...routeProps} />} />
                        <Route exact path="/register" render={(routeProps) => <Register
                                                                    {...routeProps} />} />
                        {/* <Route exact path="/product" component={ProductScreen} /> */}
                        <Route component={Default} />
                    </Switch>
                </main>
                <footer className="footer">
                    @ All right reserved
                </footer>
            </div>
        )
    }
}

export default App;
