import { db } from "@/lib/db"
import { PrismaClient } from "@prisma/client"

export const  deleteRecord = async(id: string)=>{
    const deleteUser = await db.images.delete({
        where:{
            id: id as string
        }
    })
}