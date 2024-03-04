import { db } from "@/lib/db"
import { useEdgeStore } from "@/lib/edgestore"
import { PrismaClient } from "@prisma/client"
import { redirect } from "next/navigation"

export const  deleteRecord = async(id: string,image_url: string)=>{
    const {edgestore} = useEdgeStore()
    await edgestore.publicFiles.delete({
        url: image_url,
    });
    await db.images.delete({
        where:{
            id: id as string
        }
    })


}