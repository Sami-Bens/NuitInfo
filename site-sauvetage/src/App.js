import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import LoginForm from './Components/LoginForm';
import UpdateForm from './Components/UpdateForm';
import Header from './Components/Header';
import AdminPage from './Components/AdminPage';
import PageAjouterSauvetage from './Components/PageAjouterSauvetage';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <BrowserRouter history>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signin" element={<Home />} />
            <Route path="/sauvetage" element={<PageAjouterSauvetage />} />
            <Route path="/sauveteur" element={<Home />} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
  
}

export default App;
