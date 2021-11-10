import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AddProduct from './pages/AddProduct/AddProduct';
import Explore from './pages/Explore/Explore';
import Home from './pages/Home/Home/Home';
import Navigation from './pages/Home/Navigation/Navigation';

function App() {
  return (
    <div className="App">
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
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
