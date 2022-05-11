import { useEffect, } from 'react';
import './App.css';
import Header from './Component/layout/Header/Header'
import Footer from './Component/layout/Footer/Footer'
import ProductDetails from './Component/Product/ProductDetails'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home/Home'
import LoginSignUp from './Component/user/LoginSignUp';
import WebFont from 'webfontloader'
import React from 'react';
import Products from './Component/Products/Products'
import Search from './Component/Products/Search'
import store from './store'
import { loadUser } from './actions/userAction';
import UserOptions from './Component/layout/Header/UserOptions.js'
import { useSelector } from 'react-redux';
import Profile from "./Component/user/Profile.js"
import ProtectedRoute from './Component/Route/ProtectedRoute';
import UpadteProfile from './Component/user/UpadteProfile.js'
import UpdatePassword from './Component/user/UpdatePassword.js'
import ForgotPassword from './Component/user/ForgotPassword.js'
import ResetPassword from './Component/user/ResetPassword.js'
import Dashboard from "./Component/admin/Dashboard.js"
import ProductList from "./Component/admin/ProductList.js"
import NewProduct from "./Component/admin/NewProduct.js"
import UpdateProduct from "./Component/admin/UpdateProduct.js"
import UserList from "./Component/admin/UserList.js"
import UpdateUser from './Component/admin/UpdateUser.js'
import ProductReviews from "./Component/admin/ProductReviews.js"
import About from './Component/layout/About/About';
import Contact from './Component/layout/Contact/Contact';
import SendInquiry from './Component/SendInquiry/SendInquiry';
import Machine from './Component/Machine/Machine';
import MachineDetails from './Component/Machine/MachineDetails';
import MachineDesc from './Component/Machine/MachineDesc';
import MachineBoi from './Component/Machine/Machines';
import MachineBhai from './Component/Machine/Machineji';
import NotFound from './Component/layout/NotFound/NotFound';


function App() {


  const { isAuthenticated, user } = useSelector(state => state.user);

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Roboto', 'Droid sans', 'Chilanka']
      }
    });

    store.dispatch(loadUser())
  }, [])

  return (
    <Router>
      <Header />
      {isAuthenticated && <UserOptions user={user} />}
      <Switch>
        <Route exact path="/" >
          <Home />
        </Route>

        <Route exact path="/product/:id" >
          <ProductDetails />
        </Route>

        <Route exact path="/about" >
          <About />
        </Route>

        <Route exact path="/contact" >
          <Contact />
        </Route>

        <Route exact path="/sendinquiry" >
          <SendInquiry />
        </Route>

        <ProtectedRoute exact path="/account" component={Profile} />

        <ProtectedRoute exact path="/profile/update" component={UpadteProfile} />

        <ProtectedRoute exact path="/password/update" component={UpdatePassword} />

        <ProtectedRoute isAdmin={true} exact path="/admin/dashboard" component={Dashboard} />    

        <ProtectedRoute isAdmin={true} exact path="/admin/products" component={ProductList} />    

        <ProtectedRoute isAdmin={true} exact path="/admin/product" component={NewProduct} />    

        <ProtectedRoute isAdmin={true} exact path="/admin/product/:id" component={UpdateProduct} />    

        <ProtectedRoute isAdmin={true} exact path="/admin/users" component={UserList} />    

        <ProtectedRoute isAdmin={true} exact path="/admin/user/:id" component={UpdateUser} />    

        <ProtectedRoute isAdmin={true} exact path="/admin/reviews" component={ProductReviews} />    


        <Route exact path="/products" >
          <Products />
        </Route>


        <Route exact path="/password/forgot" >
          <ForgotPassword />
        </Route>

        <Route exact path="/password/reset/:token" >
          < ResetPassword />
        </Route>

        <Route exact path="/Search" >
          <Search />
        </Route>

        <Route exact path="/login" >
          <LoginSignUp />
        </Route>

        <Route exact path="/products/:keyword" >
          <Products />
        </Route>


        <Route exact path="/machine" >
          <Machine/>
        </Route>

        <Route exact path="/machine/623b2d5f3723174d01db71f7" >
          <MachineDetails/>
        </Route>

        <Route exact path="/machine/623b2d5f3723174d01db61e3" >
          <MachineDesc/>
        </Route>

        <Route exact path="/machine/623b2d5f3723174d01db52k2" >
          <MachineBoi/>
        </Route>

        <Route exact path="/machine/623b2d5f3723174d01db91m5" >
          <MachineBhai/>
        </Route>


         <Route >
          <NotFound />
        </Route>

      </Switch>
      <Footer />
    </Router>




  );
}

export default App;
