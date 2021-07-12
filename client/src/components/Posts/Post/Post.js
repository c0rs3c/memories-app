import React from 'react'
import { Card, CardMedia, CardContent, Typography, CardActions, Button} from '@material-ui/core/'
import useStyles from './styles'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import DeleteIcon from '@material-ui/icons/Delete'
import moment from 'moment'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import { deletePost, likePost } from '../../../redux/actions/actions'
import { useDispatch } from 'react-redux'


const Post = ( { post, setCurrentId }) => {
    const updatePost = () => {
        setCurrentId(post._id)
    }
    const classes = useStyles()
    const dispatch = useDispatch()

    return (
        <Card className={classes.card}>
            <CardMedia
            className={classes.cardMedia}
            image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'}
            title={post.title}
            />
            <div className={classes.overlayLeft}>
                <Typography>{post.creator}</Typography>
                <Typography>{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlayRight}>
                <Button style={{color:'white'}} onClick={updatePost}><MoreHorizIcon></MoreHorizIcon></Button>
            </div>
            <CardContent>
                <Typography gutterBottom variant='h6'>{post.title}</Typography>
                <Typography color='textSecondary'>{post.tags.map((tag) => `#${tag} `)}</Typography>
                <Typography variant='body2'>{post.message}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                {/* &nbsp; has been added for space  */}
                <Button color='primary' size='small' onClick={() => dispatch(likePost(post._id))}><ThumbUpAltIcon fontSize='small'></ThumbUpAltIcon> &nbsp; Like &nbsp;{post.likeCount}</Button>
                <Button color='primary' size='small' onClick={() => dispatch(deletePost(post._id))}><DeleteIcon fontSize='small'></DeleteIcon>Delete</Button>
            </CardActions>
        </Card>
    )
}

export default Post
