import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {useSelector} from 'react-redux';

import Register from '../sections/Registration';
import Login from '../sections/Login';
import Services from '../sections/Services';

import Dashboard from '../sections/Dashboard';
// import NotFound from '../layout/NotFound';
import PrivateRoute from './PrivateRoute';
import Consultants from '../sections/Consultants';
import Users from '../sections/Dashboard/pages/users';
import AboutUs from '../sections/About-Us';
import Bookings from '../sections/Dashboard/pages/bookings';
import Contact from '../sections/Dashboard/pages/contact';
import Newsletter from '../sections/Dashboard/pages/newsletter';
const Routes = () => {
  const username = useSelector(state => state.userInfo.username);
  console.log(username);
  return (
    
      <Switch>
        <Route exact path='/registration' component={Register} />
        <Route exact path='/login' component={Login} />
         <Route exact path='/services' component={Services} />
         <PrivateRoute  path='/dashboard' component={Dashboard} username={username} />
         <Route exact path='/our-consultants' component ={Consultants}/>
         <Route exact path='/about-us' component={AboutUs}/>
         <PrivateRoute exact path='/users' component={Users} username={username} />
         <PrivateRoute exact path='/bookings' component={Bookings} username={username} />
         <PrivateRoute exact path='/contact' component={Contact} username={username}/>
         <PrivateRoute exact path='/newsletter' component={Newsletter} username={username}/>
        {/*<Route component={NotFound} /> */}
      </Switch>
 
  );
};

export default Routes;
