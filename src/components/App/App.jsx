import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import AboutPage from '../AboutPage/AboutPage';
import Box from '@mui/material/Box';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
//my pages created
import EditPost from '../EditPost/EditPost';
import CreatePost from '../CreatePost/CreatePost';
import PersonalProfile from '../PersonalProfile/PersonalProfile';
import HomePage from '../HomePage/HomePage';
//import Header from '../Header/Header';
import './App.css';
// importing the theme for app 
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SideNav from '../SideNav/SideNav';



const drawerWidth = 200;


const theme = createTheme ({
  palette: {
    primary: {
      main: '#990033'
    },
    secondary: {
      main: '#6699ff'
    },
  }

})

function App() {

  const dispatch = useDispatch();
  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Box sx={{ display: 'flex' }}>
      <div>
        <Nav />
        {/* <Header /> */}
        <SideNav />
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/home" />

          {/* Visiting localhost:3000/about will show the about page.
          <Route
            shows AboutPage at all times (logged in or not)
            exact
            path="/about">
            <AboutPage />
          </Route> */}

          {/* //move to protected routes */}
          <ProtectedRoute exact path="/homepage">
            <HomePage />
          </ProtectedRoute>
          
          <ProtectedRoute exact path="/create">
            <CreatePost />
          </ProtectedRoute>

          <ProtectedRoute exact path="/edit">
            <EditPost />
          </ProtectedRoute>

          <ProtectedRoute exact path="/profile">
            <PersonalProfile />
          </ProtectedRoute>


          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/user"
          >
            <UserPage />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/info"
          >
            <InfoPage />
          </ProtectedRoute>

          <Route
            exact
            path="/login"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect to the /user page
              <Redirect to="/homepage" />
              :
              // Otherwise, show the login page
              <LoginPage />
            }
          </Route>

          <Route
            exact
            path="/registration"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/homepage" />
              :
              // Otherwise, show the registration page
              <RegisterPage />
            }
          </Route>

          <Route
            exact
            path="/home"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/homepage" />
              :
              // Otherwise, show the Landing page
              <LandingPage />
            }
          </Route>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
        <Footer />
      </div>
      </Box>
    </Router>
    </ThemeProvider>
  );
}

export default App;
