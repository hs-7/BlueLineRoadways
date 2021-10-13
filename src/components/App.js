import React, {useState, useEffect} from 'react';
import Home from './User/Home.jsx';
import Login from './Login';
import Footer from './Footer.jsx';
import Register from './Register';
import Navbar from './Navbar';
import { Switch, Route, useHistory} from 'react-router-dom';
import Routes from './User/Routes.jsx';
import PickSeats from './User/PickSeats.jsx';
import AdminDash from './Admin/AdminDash.jsx';
import Profile from './User/Profile'
import Payment from './User/Payment.jsx';


function App() {

  const history = new useHistory();

  const [viewSeat, setviewSeat] = useState("");
  const [seatNo, setseatNo] = useState("")
  const checkTkn = () => {
    if(localStorage.getItem("x-access-token")){
      return true;
    }
    return false;
  }


  let [islogin, setIslogin] = React.useState(checkTkn());
  

useEffect(() => {
  setInterval(() => {
    setIslogin(localStorage.getItem("x-access-token"));
 }, 5000)
}, [])

  return (
    <div className="app">
        <>
          <Navbar logData={{islogin,setIslogin}}/>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/register" component={Register}></Route>
            <Route path="/routes" viewseat={setviewSeat} component={Routes}/>
            <Route path="/viewseats/:catId" seatNo={seatNo} setseatNo={setseatNo} component={PickSeats}></Route>
            <Route path="/payment" component={localStorage.getItem("x-access-token")?Payment:Login}></Route>
            <Route path="/admindash" component={AdminDash}></Route>
            <Route path="/profile" component={Profile}></Route>
          </Switch>
          <Footer/>
        </>
    </div>
  );
}

export default App;