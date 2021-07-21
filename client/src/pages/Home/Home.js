import { Grid } from "@material-ui/core"
import Posts from "../../components/Posts/Posts"
import Form from "../../components/Form/Form"
import { useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { getPosts } from "../../redux/actions/postActions"
import { Container } from "@material-ui/core"
import useStyles from "./styles"

const Home = () => {
    const dispatch = useDispatch()
    useEffect(() => {
      console.log('Dispatch')
      dispatch(getPosts())
    },[dispatch])

    const classes = useStyles()
    const [currentId, setCurrentId] = useState(0)
    return (
    <Container>
        <Grid container justifyContent='space-between' className={classes.gridContainer}>
          <Grid item xs={12} sm={7}>
            <Posts setCurrentId={setCurrentId}/>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId}/>
          </Grid>
        </Grid>
    </Container>
    )
}

export default Home
