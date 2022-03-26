//import approutes from './Routes'
import React from 'react';

import {
    BrowserRouter,
    Route,
    Routes
} from 'react-router-dom';

import Home from '../pages/admin/home/index.jsx';
import NewUserPage from '../pages/admin/newUser/NewUserPage.jsx';
import User from '../pages/admin/user/User.jsx';
import UserList from '../pages/admin/userList/UserList';
import ShopIndex from '../pages/shop/template1/home/index.js';




const RoutesComp = (props) => {

    //console.log(" size paassed=>",props.size);
  //  const ResizeHoc = WithWindowResize(RoutesComp);

    return (
                <Routes> 
                        <Route exact path="/admin"   element={<Home />} />
                        <Route path="/users"  element={ <UserList /> } />
                        <Route path="/user/:userId"  element={<User />} />
                        <Route path="/newuser"  element={<NewUserPage />} />
                        <Route path="/shop"  element={<ShopIndex />} />
                        
                </Routes>
    )
}


export default RoutesComp