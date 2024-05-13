import React, { useEffect } from 'react';
import HomeScreen from './Screens/HomeScreen'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import LoginScreen from './Screens/LoginScreen';
import ProfileScreen from './Screens/ProfileScreen';
import auth from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unscubscribe = auth.onAuthStateChanged(userAuth =>{
      if(userAuth){
        // Logged in 
        console.log("User is logged In");
        dispatch(login({
          uid : userAuth.uid,
          email : userAuth.email,
        }));
      }else{
        // Logged out  
        console.log("User is logged Out");
        dispatch(logout());
      }
    })

    return unscubscribe;
  }, [dispatch])

  return (
    <div className="App">
      <Router>
        <Routes>
          {!user ? (
            <Route exact path="/" element={<HomeScreen />} />
          ) : (
            <>
              <Route exact path="/profile" element={<ProfileScreen />} />
              <Route exact path="/" element={<HomeScreen />} />
            </>
          )}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
