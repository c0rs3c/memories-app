import React from 'react'
import { Card, CardMedia, CardContent, Typography, CardActions, Button} from '@material-ui/core/'
import useStyles from './styles'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined'
import DeleteIcon from '@material-ui/icons/Delete'
import moment from 'moment'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import { deletePost, likePost } from '../../../redux/actions/postActions'
import { useDispatch } from 'react-redux'


const Post = ( { post, setCurrentId }) => {
    const updatePost = () => {
        setCurrentId(post._id)
    }
    const classes = useStyles()
    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem('profile'))

    const Likes = () => {
        if(post.likes.length > 0){
            console.log(post.likes.length)
            // const test = post.likes.find((liker_id) => liker_id === (user?.user_details?._id || liker_id === user?.user_details?.googleId))
            // console.log(test)
            return post.likes.find((liker_id) => liker_id === (user?.user_details?._id || liker_id === user?.user_details?.googleId))
                ? (
                    <>
                        <ThumbUpAltIcon fontSize='small' />&nbsp;
                        {post.likes.length >2 ? `You and ${post.likes.length - 1 } others`
                        : `${post.likes.length} like${post.likes.length>1?'s':''}`
                        }
                    </>
                ) : (
                    <>
                        <ThumbUpAltOutlined fontSize='small' />&nbsp;
                        {post.likes.length} {post.likes.length === 1?'Like':'Likes'}
                    </>
                )
            }
            return (
                <>
                <ThumbUpAltOutlined fontSize='small'/>&nbsp;Like
                </>)
            
    }
                    console.log(user.user_details.googleId)
                    console.log(user.user_details._id)
                    console.log(post.creator)

    return (
        <Card className={classes.card}>
            <CardMedia
            className={classes.cardMedia}
            image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'}
            title={post.title}
            />
            <div className={classes.overlayLeft}>
                <Typography>{post.name}</Typography>
                <Typography>{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlayRight}>
                {
                (user.user_details.googleId === post.creator || user.user_details._id === post.creator) &&
                <Button style={{color:'white'}} onClick={updatePost}><MoreHorizIcon></MoreHorizIcon></Button>
                }
            </div>
            <CardContent>
                <Typography gutterBottom variant='h6'>{post.title}</Typography>
                <Typography color='textSecondary'>{post.tags.map((tag) => `#${tag} `)}</Typography>
                <Typography variant='body2'>{post.message}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                {/* &nbsp; has been added for space  */}
                <Button color='primary' size='small' onClick={() => dispatch(likePost(post._id))}>
                    <Likes />
                </Button>
                {  
                    // console.log(user.user_details.googleId)
                    // console.log(user.user_details._id)
                    // console.log(post.creator)
                    (user.user_details.googleId === post.creator || user.user_details._id === post.creator) &&
                    <Button color='primary' size='small' onClick={() => dispatch(deletePost(post._id))}><DeleteIcon fontSize='small'></DeleteIcon>Delete</Button>
                }
            </CardActions>
        </Card>
    )
}

export default Post
