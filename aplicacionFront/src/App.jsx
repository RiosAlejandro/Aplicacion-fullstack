import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login-register/Login';
import './App.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path='/' Component={Login} />
      </Routes>
    </Router>
  )
}

export default App
