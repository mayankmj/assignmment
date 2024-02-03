import React, { useEffect, useState } from 'react';
import TableContainer from './Components/TableContainer';
import Login from './Pages/Login';
import Upload from './Pages/Upload';
import {auth} from './Pages/firebase';
import { onAuthStateChanged } from 'firebase/auth';


const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (User) => {
      setUser(User);
      setLoading(false);
      console.log(User);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {user ? (
        <Upload userDetails={user}/>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default App;
