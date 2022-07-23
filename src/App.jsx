import {
  BrowserRouter as Router, Redirect, Route, Switch
} from "react-router-dom";
import Home from "../src//pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
const App = () => {
  const user = true
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products/:category">
          <ProductList/>
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/login">
          {user ? <Redirect to="/"/> : <Login/>}
          <Login />
        </Route>
        <Route path="/register">
        {user ? <Redirect to="/"/> : <Register/>}
          <Register />
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
