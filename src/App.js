import NavbarComponent from "./components/NavbarComponent";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from "./screens/HomeScreen";
import BookingScreen from "./screens/BookingScreen";
import RegisterForm from "./components/RegisterForm"
import LoginForm from "./components/Loginform";
import WelcomeScreen from "./screens/WelcomeScreen";
import UserProvider from "./Context/UserContextProvider";

function App() {
  return (
    <div >
      {/* <Rooms props={HomeScreen}/> */}
      <BrowserRouter>
        <UserProvider>
         <NavbarComponent />
          <Routes>
            <Route path="/" exact element={<WelcomeScreen/>}/>
            <Route path="/home" exact element={<HomeScreen/>} />
            <Route path="/book/:roomid" element={<BookingScreen/>} />
            <Route path="/register" exact element={<RegisterForm/>}/>
            <Route path="/login" exact element={<LoginForm/>}/>
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

