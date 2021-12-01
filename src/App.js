import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/notFound/NotFound';
import FoodDatails from './components/Fooddatails/FoodDatails';
import Login from './components/Login/Login';

function App() {
  return (
    <>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/login'>
            <Login></Login>
          </Route>
          <Route exact path='/signup'>

          </Route>
          <Route exact path='/food/:id'>
            <FoodDatails></FoodDatails>
          </Route>
          <Route exact path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
