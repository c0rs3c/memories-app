import { Button, Container, Grid, Paper, Typography } from '@material-ui/core'
import { useState } from 'react'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import InputField from '../../components/InputField/InputField';
import { GoogleLogin } from 'react-google-login';
import useStyles from './styles';
import { FaGoogle } from 'react-icons/fa'
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import * as actionType from '../../redux/constants/actionConstants'
import { signIn, signUp } from '../../redux/actions/authActions';

const Auth = () => {
    const [isSignUp, setIsSignUp] = useState(0)
    const classes = useStyles()
    const dispatch = useDispatch()
    const history = useHistory()

    const switchAuth = () => {
        setIsSignUp ((prevIsSignUp) => !prevIsSignUp)
        setFormData(initialState)
    }

    const googleSucces = async (res) => {
        // await console.log(res)
        const token = res.tokenId
        const user_details = res.profileObj
        dispatch({type: actionType.AUTH, data:{token, user_details}})
        history.push('/')
    }
    const googleFailure = (error) => {
        console.log(error)
    }

    const initialState = {firstName:'', lastName:'', email:'', password:'', repeatPassword:'', showPassword:false}
    const [formData, setFormData] = useState(initialState)
    const handleChange = (e) => {
        setFormData(() => ({...formData, [e.target.name]: e.target.value}))
    }

    const [showPassword, setShowPassword] = useState(false)
    const handleShowPassword = () => {
        setShowPassword((prevState) => !prevState)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(formData)
        if (isSignUp) dispatch(signUp(formData, history))
        // if (isSignUp) dispatch(signUp(formData))
        else dispatch(signIn(formData, history))
        // else dispatch(signIn(formData))
        console.log('before pushing')
        // history.push('/')
    }
    return (
        <Container maxWidth='xs'>
            <Paper className={classes.paper} elevation={6}>
                <LockOutlinedIcon color='secondary' />
                <Typography gutterBottom variant='h5'>
                    {isSignUp ? 'Sign Up' : 'Sign In'}
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2} className={classes.formGrid}>
                        {isSignUp ? (
                            <>
                                <InputField half label='First Name' name='firstName' handleChange={handleChange} value={formData.firstName}></InputField>
                                <InputField half label='Last Name' name='lastName'handleChange={handleChange} value={formData.lastName}></InputField>
                                <InputField label='Email' name='email'type='email' handleChange={handleChange} value={formData.email}></InputField>
                                <InputField label='Password' name='password' type={showPassword?'text':'password'} handleChange={handleChange} handleShowPassword={handleShowPassword} value={formData.password}></InputField>
                                <InputField label='Repeat Password' name='repeatPassword'type='password' handleChange={handleChange} value={formData.repeatPassword}></InputField>
                            </>
                        ):
                        (
                            <>
                                <InputField label='Email' name='email'type='email' handleChange={handleChange} value={formData.email}></InputField>
                                <InputField label='Password' name='password'type={showPassword?'text':'password'} handleChange={handleChange} handleShowPassword={handleShowPassword} value={formData.password}></InputField>
                              

                            </>
                        )}
                        
                    </Grid>
                    <Button type='submit' variant='contained' color='primary' fullWidth className={classes.signUpButton}>{isSignUp ? 'Sign Up' : 'Sign In'}</Button>
                    {isSignUp ? (null) :
                    <GoogleLogin
                    clientId='949083720582-om700g2vcv18985t7rnqdjdoquuvt8a5.apps.googleusercontent.com'
                    onSuccess={googleSucces}
                    onFailure={googleFailure}
                    cookiePolicy={'single_host_origin'}
                    render={renderProps => (
                        <Button className={classes.googleButton} onClick={renderProps.onClick} /*disabled={renderProps.disabled}*/ variant='contained' color='primary' fullWidth><FaGoogle size={20} style={{marginRight:10}}/>Google Sign In</Button>
                      )}
                    />}
                    <Grid container justifyContent='flex-end'>
                        <Grid>
                            <Button onClick= {switchAuth}>{isSignUp ? "Already have an account? Sign in" : "Don't have an account? Sign Up"}</Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
        
    
    )

}

export default Auth
