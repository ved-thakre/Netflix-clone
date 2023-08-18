import React from 'react';
import HomeScreen from './Screens/HomeScreen'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import LoginScreen from './Screens/LoginScreen';

function App() {
  const user = null;
  return (
    <div className="App">
      <Router>
         <Routes>
            {!user?(
              <Route exact path="/" element={<LoginScreen />}/>
            ) : (
              <Route exact path="/" element={<HomeScreen/>}/>
            )}
         </Routes>
      </Router>
    </div>
  );
}

export default App;
