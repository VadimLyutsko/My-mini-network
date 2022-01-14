//import logo1 from './logo.svg';
import { Routes, Route } from "react-router-dom";
import './App.css';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';



const App = (props) => {


  return (

    <div className='app-wrapper'>
      <Header />
      <Navbar state={props.state} />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path="/messages/*" element={<DialogsContainer />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>

  );
}








export default App;


