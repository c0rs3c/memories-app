import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import postRoutes from './routes/postRoutes.js'
import morgan from 'morgan'

import * as config from './config/config.js'


const app = express()

  
app.use(morgan('tiny'))

//These two lines added for body parsing 
app.use(express.json())
app.use(express.urlencoded({extended: true }))

app.use(cors())

app.use('/post', postRoutes)

mongoose.connect(config.MONGOOSE_URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(config.PORT, () => console.log(`Server running on ${config.PORT}`)))
    .catch(error => console.error(error))

