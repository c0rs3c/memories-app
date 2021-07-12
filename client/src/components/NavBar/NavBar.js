import React from 'react'
import { AppBar, Typography } from '@material-ui/core';
import useStyles from './styles';
import memoryImage from '../../images/memories.png'


const NavBar = () => {
    const classes = useStyles()
    return (
        <AppBar className={classes.appBar} position='static' color='inherit'>
        <Typography className={classes.AppBarHeading} variant='h2'>Memories</Typography>
        <img className={classes.appBarImage} src={memoryImage} alt=''></img>
        </AppBar>
    )
}
export default NavBar
