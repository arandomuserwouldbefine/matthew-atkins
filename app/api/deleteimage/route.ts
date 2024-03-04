import { db } from "@/lib/db"

export async function POST(request: Request) {
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