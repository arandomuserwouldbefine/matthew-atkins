import { db } from "@/lib/db"
import { PrismaClient } from "@prisma/client"
import { cookies } from "next/headers"

export async function POST(request: Request) {
    cookies()
    const {id} =  await request.json()

    const isAvail = await db.images.findFirst({
        where:{
            id: id
        }
    })
    if(isAvail){
        await db.images.delete({
            where:{
                id: id
            }
        })
        return Response.json({message: "Record Deleted"})    
    }
    return Response.json({error: "Record doesn't exits"})
}