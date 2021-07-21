import PostModel from "../models/PostModel.js"
export const getPosts = async (req,res) => {
    try {
        const posts = await PostModel.find()
        res.status(200).json(posts)
    } catch (error) {
        console.error(error)
    }

}

export const createPost = async (req, res) => {
    try {
        const post = req.body
        const newPost = new PostModel({...post, creator: req.userId, createdAt: new Date().toISOString()})
        await newPost.save()
        res.status(200).json(newPost)
        
    } catch (error) {
        console.log(error)
      
    }
}

export const updatePost = async (req,res) => {
    try {
        const {id} = req.params
        const post = req.body
        console.log(id, post, 'UPDATE POST CONTROLLER')
        const postWithId = {id,post}
        console.log(postWithId,'MERGED')
        await PostModel.findByIdAndUpdate(id, post, {new: true},(err, updatedPost) => {
            if (err) {
                console.log(err)
            }
            else {
                console.log(updatedPost)
                res.status(200).json(updatedPost)
            }
        })
    } catch (error) {
        console.error(error)
    }
}

export const deletePost = async(req, res) => {
    try {
        const { id } = req.params
        PostModel.findByIdAndDelete(id, (err, post) => {
            if (err) console.log(err)
            else res.status(200).json({message: `delete ${post}`})
        })
    } catch (error) {
        console.log(error)
    }
}

export const likePost = async(req,res) => {
    try {
        console.log('SERVER LIKE')
        const { id } = req.params
        const userId = req.userId
        console.log('USERID', userId)
        if (!userId) return res.json({message: 'Unauthenticated'})
        
        console.log('id: ', id, 'userId: ',userId)
        const post = await PostModel.findById(id)
        // console.log(post)
        const index = post.likes.findIndex((id) => id === userId)
        console.log('index: ', index)
        if(index === -1) {
            post.likes.push(userId)
        } else {
            post.likes = post.likes.filter((id) => id !== userId) 
        }
        const updatedPost = await PostModel.findByIdAndUpdate(id, post, {new: true})
        console.log(updatedPost)
        res.status(200).json(updatedPost)
    } catch (error) {
        console.log(error)
    }
}