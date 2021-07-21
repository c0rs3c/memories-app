import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles( (theme) => ({
    [theme.breakpoints.down('sm')]: {
        gridContainer: {
            flexDirection: "column-reverse"
        }
    }
}))

export default useStyles