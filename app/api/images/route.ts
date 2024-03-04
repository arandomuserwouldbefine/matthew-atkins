import { db } from "@/lib/db"
import { cookies } from "next/headers"
import { useEdgeStore } from "@/lib/edgestore"
import { deleteRecord } from "@/actions/deleteRecord"

export const dynamic = 'force-dynamic'

export async function GET() {
    cookies()
    // return Response.json({message : "This is message"})
    const imageDetails = await db.images.findMany()
    return Response.json({imageDetails})
}

export async function DELETE(request: Request){
    const {id} = await request.json()
    await db.images.delete({
        where:{
            id: id
        }
    })
    return Response.json({message:"Done"})
}