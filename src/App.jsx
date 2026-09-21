import React, { useEffect } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
const App = () => {

  const [user,setUser] = useState(null);  

  const handleLogin = () => {
    
  }
  
  useEffect(() => {
    setLocalStorage();
    getLocalStorage();
  }, []);

  return (
    <>
      {!user ? <Login /> : ''}
      {/*<EmployeeDashboard />*/}
      {/*<AdminDashboard />*/}
    </>
  );
};
export default App;
