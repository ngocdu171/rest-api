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
import myURL from './myURL';
import AddProduct from './components/AddProduct';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            username: '',
            Loggedin: false,
            Carted: []
        };
        this.getproduct=this.getproduct.bind(this);
        this.LoginSuccess=this.LoginSuccess.bind(this);
        this.LoginFail=this.LoginFail.bind(this);
        this.Logout=this.Logout.bind(this);
        this.deleteItem=this.deleteItem.bind(this);
        this.addCart=this.addCart.bind(this);
    }
    componentDidMount() {
        // Axios.get('http://localhost:3000/product').then(res => {
        Axios.get(myURL+'/product').then(res => {
            this.setState({
                products:res.data
            });
        });
    }
    getproduct(id_product) {
        let tempProducts = [...this.state.products];
        const product = tempProducts.find(item=> item.id_product == id_product);
        return product;
    }
    addCart(productadd) {
        console.log(productadd);
        let tempCarted = [...this.state.Carted];
        let tam = tempCarted.filter(item => item.id_product !== productadd.id_product);
        console.log(tempCarted);
        if(tam) {
            tam.push(productadd);
            this.setState({
                Carted: tam
            })
        }
        else {
            tempCarted.push(productadd);
            this.setState({
                Carted: tempCarted
            })
        }
        // tempCarted.push(productadd);
        // this.setState({
        //     Carted: tempCarted
        // })
        // Axios.get(myURL + '/cart/'+ username).then(res =>{
        //     this.setState({
        //         Carted: res.data
        //     })
        // });
    }
    
    // addCart(event) {
    //     event.preventDefault();
    //     var quantity = event.target['select'].value;
    //     console.log(quantity);
    //     // console.log("APP: ", id);
    // }

    LoginSuccess() {
        this.setState({
            username:localStorage.getItem("username"),
            Loggedin: true
        })
        alert("Login Success!");
        Axios.get(myURL + '/user/'+ this.state.username).then(res =>{
            this.setState({
                userInfo: res.data
            })
        });
    }

    LoginFail() {
        alert("wrong username or password!");
    }

    Logout() {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        this.setState({
            username:localStorage.removeItem("username"),
            Loggedin: false,
            Carted: [],
        })
    }

    deleteItem(id_product) {
        let tempCarted = this.state.Carted.filter(item => item.id_product !== id_product)
        // console.log(tempCarted);
        this.setState({
            Carted: tempCarted
        })
    }
    
    render() {
        return (
            <div className="grid-container">
                <header className="header">
                    <div className="brand">
                        <Link to="/">Domino</Link>
                    </div>
                    <div className="header-link">
                        <Link to="/cart">Cart</Link>
                        {this.state.username === 'ngocdu171'?<Link to="/add">{this.state.username}</Link>:this.state.username}
                        {this.state.Loggedin?<Link to="/" onClick={this.Logout}>Logout</Link>:<Link to="/login">Login</Link>}
                        {/* this.state.Loggedin&&<Link to="/edit">{this.state.username}</Link> */}
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
                                                                        username={this.state.username}
                                                                        Carted={this.state.Carted}
                                                                        deleteItem={this.deleteItem}
                                                                    {...routeProps} />} />
                        <Route exact path="/login" render={(routeProps) => <Login
                                                                        LoginSuccess={this.LoginSuccess}
                                                                        LoginFail={this.LoginFail}
                                                                    {...routeProps} />} />
                        <Route exact path="/register" render={(routeProps) => <Register
                                                                    {...routeProps} />} />
                        <Route exact path="/add" render={(routeProps) => <AddProduct
                                                                        username={this.state.username}
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
