import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    appBar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
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
        marginLeft: 30,
    },
    brandContainer: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    toolbar: {
        
    },
    toolbarProfile: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        
    },
    profileAvatar: {
        // size: 'sm'
    },
    profileName: {
        marginLeft: 10,
        fontSize: 20
    },
    logOutButton: {
        marginLeft: 20
    }
})

export default useStyles