import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
    card: {
        borderRadius: 10,
        position: 'relative',
        
    },
    cardMedia: {
        height:150
    },
    overlayLeft: {
        position: 'absolute',
        top: 10,
        left: 10,
        color: 'white'
    },
    overlayRight: {
        position: 'absolute',
        top: 10,
        right: 10,
        color: 'white'
    },
    cardActions:{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0 16px 8px 16px' 
    }
})

export default useStyles