import Container from '@material-ui/core/Container'
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
// import useStyles from './styles';
import Auth from './pages/Auth/Auth';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

function App() {
  const user = JSON.parse(localStorage.getItem('profile'))

  return (
    <Router>
      <Container>
        <NavBar />
        <Switch>
          <Route path='/' exact component={Home} />
          {/* <Route path='/auth' exact component={Auth} /> */}
          <Route path='/auth' exact component={() => user.token?<Redirect to='/' />:<Auth />} />
        </Switch>
      </Container>
    </Router>
  )
}

export default App;
