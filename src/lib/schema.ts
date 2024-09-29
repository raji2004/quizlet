import {z} from 'zod'


export const loginSchema = z.object({
    email:z.string({message:"please enter your email address"}).email("please enter a valid email address"),
    password:z.string({message:"please enter your password"}).max(10,"password must be less than 10 characters").min(5,'password must be atleast 5 characters')
})
export const SignUpSchema = z.object({
    firstName:z.string({message:"please type your frist Name"}).min(3,'first name must be atleast 2 characters'),
    lastName:z.string({message:"please type your last Name"}) .min(3,'last name must be atleast 2 characters'),
    email:z.string({message:"please enter your email address"}).email("please enter a valid email address"),
    password:z.string({message:"please enter your password"}).max(10,"password must be less than 10 characters").min(5,'password must be atleast 5 characters')
})