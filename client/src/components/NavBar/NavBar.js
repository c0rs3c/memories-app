import {useState, useEffect} from 'react'
import { AppBar, Avatar, Button, Toolbar, Typography } from '@material-ui/core';
import useStyles from './styles';
import memoryImage from '../../images/memories.png'
import { Link, useHistory, useLocation }from 'react-router-dom'
import * as actionType from '../../redux/constants/actionConstants'
import {useDispatch} from 'react-redux'


const NavBar = () => {
    const classes = useStyles()
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    const dispatch = useDispatch()
    const history = useHistory()
    const location = useLocation()
    const logout = () => {
        setUser(null)
        dispatch({type: actionType.LOG_OUT})
        history.push('/auth')
    }

    useEffect(() => {
        // const token = user?.token
        console.log(JSON.parse(localStorage.getItem('profile')))
        setUser(JSON.parse(localStorage.getItem('profile')))
    }, [location])
    return (
        <AppBar className={classes.appBar} position='static' color='inherit'>
        <div className={classes.brandContainer}>
            <Typography className={classes.appBarHeading} variant='h2'>Memories</Typography>
            <img className={classes.appBarImage} src={memoryImage} alt=''></img>
        </div>
        <Toolbar className={classes.toolbar}>
            {user?.user_details ? (
                <div className={classes.toolbarProfile}>
                    <Avatar className={classes.profileAvatar} src={user.user_details.imageUrl} alt={user.user_details.name}>{user.user_details.name.charAt(0)}</Avatar>
                    <Typography className={classes.profileName} variant='h6'>{user.user_details.name}</Typography>
                    <Button className={classes.logOutButton} variant='contained' color='secondary' size='large' onClick={logout}>Log Out</Button>
                </div>

            ) : (
                <Button className={classes.logOutButton} variant='contained' color='primary' size='large' component={Link} to='/auth' >Sign In</Button>
            )}
        </Toolbar>
        </AppBar>
    )
}
export default NavBar
