//import logo1 from './logo.svg';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
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

          <Route path="/messages/*" element={<Dialogs
            state={props.state}
            dispatch={props.dispatch} />} />

          <Route path="/profile" element={<Profile
            profilePage={props.state.profilePage}
            dispatch={props.dispatch} />} />
        </Routes>
      </div>
    </div>

  );
}








export default App;


