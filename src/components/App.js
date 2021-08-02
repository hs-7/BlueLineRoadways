import React from 'react';
import Home from './User/Home.jsx';
import Login from './Login';
import Footer from './Footer.jsx';
import Register from './Register';
import Navbar from './Navbar';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Routes from './User/Routes.jsx';


function App() {

  const checkTkn = () => {
    if(localStorage.getItem("x-access-token")){
      return true;
    }
    return false;
  }

  let [islogin, setIslogin] = React.useState(checkTkn());

  React.useEffect(() => {
    setInterval(() => {
      setIslogin(localStorage.getItem("x-access-token"));
      }, [])
  }, 5000);

  return (
    <div className="app">
      <BrowserRouter>
        <>
          <Navbar logData={{islogin,setIslogin}}/>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/register" component={Register}></Route>
            <Route path="/routes" component={Routes}></Route>
          </Switch>
          <Footer/>
        </>
      </BrowserRouter>
    </div>
  );
}

export default App;