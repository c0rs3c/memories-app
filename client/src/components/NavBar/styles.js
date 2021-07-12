import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    appBar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        margin: '30px 0px',
        
    },
    appBarImage: {
        width: 60,
        height: 60,
        marginLeft: 15
    },
    appBarHeading:{
        color: 'rgba(0,183,255, 1)',
    }
})

export default useStyles