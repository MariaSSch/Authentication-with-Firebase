import './App.css';
import {Routes, Route} from "react-router-dom"
import HomePage from 'pages/HomePage';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import EmailLinkAccessPage from 'pages/EmailLinkAccessPage';


function App() {
  return (
    <>
      <h1>Authorization with Firebase</h1>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/recover-pass' element={<EmailLinkAccessPage/>}/>
      </Routes>
    </>
  );
}

export default App;
