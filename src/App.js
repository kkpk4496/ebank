import {Switch, Redirect, Route} from 'react-router-dom'
import LoginPage from './components/LoginPage'
import PreviewPage from './components/PreviewPage'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound'
import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/ebank/login" component={LoginPage} />
    <ProtectedRoute exact path="/" component={PreviewPage} />
    <Route path="/not-found" component={NotFound} />
    <Redirect to="not-found" />
  </Switch>
)

export default App
