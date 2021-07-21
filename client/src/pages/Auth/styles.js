import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: 20,
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    formGrid: {
        marginBottom: 20
    },
    form: {
        marginTop: 10
    },
    signUpButton: {
        marginBottom: theme.spacing(1)
    },
    googleButton: {
        marginBottom: 5
    }

}))

export default useStyles