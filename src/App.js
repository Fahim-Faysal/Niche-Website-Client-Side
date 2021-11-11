import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import AddProduct from './pages/AddProduct/AddProduct';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import Explore from './pages/Explore/Explore';
import Footer from './pages/Home/Footer/Footer';
import Home from './pages/Home/Home/Home';
import Navigation from './pages/Home/Navigation/Navigation';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import Purchase from './pages/Purchase/Purchase';
import Register from './pages/Register/Register';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Navigation />
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/explore'>
              <Explore></Explore>
            </Route>
            <Route path='/addproduct'>
              <AddProduct></AddProduct>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <PrivateRoute path='/dashboard'>
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path='/purchase/:id'>
              <Purchase></Purchase>
            </PrivateRoute>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>

        </BrowserRouter>
      </AuthProvider>


    </div>
  );
}

export default App;
