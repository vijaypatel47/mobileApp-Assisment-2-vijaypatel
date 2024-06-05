import './App.css'
import {Route, BrowserRouter, Switch} from 'react-router-dom'
import RegisterPage from './components/RegisterPage'
import LoginPage from './components/LoginPage'
import HomePage from './components/HomePage'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={RegisterPage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/home" component={HomePage} />
    </Switch>
  </BrowserRouter>
)
export default App
