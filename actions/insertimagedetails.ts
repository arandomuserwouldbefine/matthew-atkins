"use server"
import { PrismaClient } from "@prisma/client"
import { db } from "@/lib/db"

export const insertImageDetails =async (title: string,description: string,image_url: string)=>{
    await db.images.create({
        data:{
          title: title,
          description: description,
          image_url: image_url
        }
      })
    
} 