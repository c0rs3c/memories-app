import userModel from "../models/userModel.js"
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

const secret = 'test'

export const signIn = async (req,res) => {
    console.log('praween sign in')
    const {email, password} = req.body
    try {
        const oldUser = await userModel.findOne({email})
        if(!oldUser) return res.status(404).json({message: 'User Does not exist'})
        const isPasswordCorrect = await bcrypt.compare(password, oldUser.password)
        if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" })
        const token = jwt.sign({email: oldUser.email, id: oldUser._id}, secret, {expiresIn: '1h'})
        res.status(200).json({user_details: oldUser, token})
        
    } catch (error) {
        res.status(500).json({message: 'Somthing went wrong'})
        console.log(error,'signin error')
    }

}

export const signUp = async (req,res) => {
    console.log('praween sign up')

    const {firstName, lastName, email, password} = req.body
    console.log(req.body)
    
    try {
        const oldUser = await userModel.findOne({email})
        console.log(oldUser)
        if (oldUser) return res.status(200).json({message : 'User already exists'})
        const hashedPassword = await bcrypt.hash(password, 12)
        console.log(hashedPassword)
        const user_details = await userModel.create({email, password: hashedPassword, name: `${firstName} ${lastName}`})
        console.log(user_details)
        const token = jwt.sign({email: user_details.email, id: user_details._id}, secret, {expiresIn:'1h'})
        res.status(201).json({user_details, token})
    } catch (error) {
        res.status(500).json({message: 'Something went wrong'})
        console.log(error)
    }

}