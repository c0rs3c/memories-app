import { makeStyles } from "@material-ui/core/";

const useStyles = makeStyles({
    paper: {
        padding:20

    },
    form: {
        '& .MuiTextField-root':{
            width: '100%',
            margin: '10px 0px'
        }

    },
    fileInput: {
        margin: '10px 0',
    },
    button:{
        marginBottom: 10
    }
})

export default useStyles