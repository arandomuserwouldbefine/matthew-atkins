"use server"
import * as z from 'zod'
import { LoginSchema } from '@/schemas'
import { PrismaClient } from '@prisma/client'
import { SHA256 as sha256 } from "crypto-js";
import { db } from "@/lib/db";
import { cookies } from 'next/headers'
import { encryptPassword, verifyPassword } from '@/utils/signCookie';

const hashPassword = async (password: string) => {
    return sha256(password).toString();
  };
const prisma = new PrismaClient()
export const login =async (values: z.infer<typeof LoginSchema>) =>{
    cookies()
    const validateFields = LoginSchema.safeParse(values);
    if(!validateFields.success){
        return {error: "Invalid fields!"}
    }
    const {email,password} = values;
    // const email = "atkinsmatt10@gmail.com"
    // const password = "a4DdmlDSC6bK"
    const hashedPassword =  await hashPassword(password);
    console.log(`hash: ${hashedPassword}\n`)

    const doesEmailAndPassExists = await db.user.findFirst({
        where:{
            "email":email,
            "password":hashedPassword,
        }
    })
    const encryptedCookie =await encryptPassword(password);


    if(doesEmailAndPassExists){
        cookies().set("auth",encryptedCookie)
        return {success: "Logged in Successfully!"}
    }
    else{
        return {error: "Invalid credentials"}
    }
    
}