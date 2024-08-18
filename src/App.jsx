import HomeScreen from "./Components/HomeScreen";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom" 
import { Login } from "./Components/Login";


function App() {
  const user = null


  return (
    <>
      <Router>
       {
        !user ? (<Login/>) : (
          <Routes>
          <Route path="/" element={  <HomeScreen /> }/>
        </Routes>
        )
       }
      </Router>
    </>
  )
}

export default App
