import { Paper, TextField, Button, Typography } from '@material-ui/core'
import FileBase64 from 'react-file-base64'
import  { useState, useEffect }  from 'react'
import useStyles from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { createPost, updatePost } from '../../redux/actions/postActions'


const Form = ({ currentId, setCurrentId }) => {
    const classes = useStyles()
    const post = useSelector((state) => currentId ? state.posts.find((message) => message._id === currentId):null)
    const [postData, setPostData] = useState({
        title: '',
        message: '',
        tags: '',
        selectedFile: ""
    })

    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem('profile'))

   

    const handleSubmit = (e) => {
        e.preventDefault()
        if(currentId) {
            console.log('Dispatching UPDATE request in handle submit',postData)
            dispatch(updatePost({...postData, name: user?.user_details?.name}, currentId))
        }
        else{
            console.log('Dispatching CREATE request in handle submit',postData)
            dispatch(createPost({...postData, name: user?.user_details?.name}))
        }
        clear()
    }
    
    const clear = () => {
            setPostData({
                title: '',
                message: '',
                tags: '',
                selectedFile: ""
            })
            setCurrentId(0)
    }

    useEffect(() => {
        console.log(post)
        if (post) setPostData(post)
    }, [post])

    if (!user?.user_details?.name) {
        return(
            <Paper className={classes.paper}>
                <Typography variant='h6' align='center'>Please Login to create</Typography>
            </Paper>
        )
    }

    return (
        <Paper className={classes.paper}>
            <Typography variant='h6'> Creating a Memory</Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
                <TextField variant='outlined' label='Title' onChange={(e) => setPostData({...postData, title: e.target.value})} value={postData.title} ></TextField>
                <TextField variant='outlined' label='Message' multiline rows={4} onChange={(e) => setPostData({...postData, message: e.target.value})} value={postData.message} ></TextField>
                <TextField variant='outlined' label='Tags' onChange={(e) => setPostData({...postData, tags: e.target.value.split(',')})} value={postData.tags} ></TextField>
                <div className={classes.fileInput}>
                {/* FileBase64 returns object containing {base64, {file}, name, size, type }. Hence we just need to save {base64} in Database */}
                <FileBase64 
                    type='file'
                    multiple={ false }
                    onDone={({ base64 }) => setPostData({...postData, selectedFile: base64})}
                />
                </div>
                <Button className={classes.button} fullWidth variant='contained' color='primary' type='submit'>Submit</Button>
                <Button className={classes.button} fullWidth variant='contained' color='secondary' onClick={clear}>Clear</Button>

            </form>
        </Paper>
    )
}

export default Form
