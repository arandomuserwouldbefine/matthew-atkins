import { db } from "@/lib/db"
import { cookies } from "next/headers"

export async function GET() {
    cookies()
    // return Response.json({message : "This is message"})
    const imageDetails = await db.images.findMany()
    return Response.json({imageDetails})
}