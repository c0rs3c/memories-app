import Container from '@material-ui/core/Container'
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
// import useStyles from './styles';
import Auth from './pages/Auth/Auth';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {


  return (
    <Router>
      <Container>
        <NavBar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/auth' exact component={Auth} />
        </Switch>
      </Container>
    </Router>
  )
}

export default App;
