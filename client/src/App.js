import Container from '@material-ui/core/Container'
import { Grid } from '@material-ui/core';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import NavBar from './components/NavBar/NavBar';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getPosts } from './redux/actions/actions';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    console.log('Dispatch')
    dispatch(getPosts())
  },[dispatch])
  
  const [currentId, setCurrentId] = useState(0)

  return (
    <Container>
      <NavBar />
      <Container>
        <Grid container justifyContent='space-between'>
          <Grid item xs={12} sm={7}>
            <Posts setCurrentId={setCurrentId}/>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId}/>
          </Grid>
        </Grid>
      </Container>
    </Container>
  )
}

export default App;
