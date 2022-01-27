import mongoose from 'mongoose'

export interface User {
    name: string
    email: string
    password: string
    isAdmin?: boolean
}

const userSchema = new mongoose.Schema<User>({
    
})