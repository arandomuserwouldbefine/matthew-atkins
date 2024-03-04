import { db } from "@/lib/db"
import { PrismaClient } from "@prisma/client"
import { cookies } from "next/headers"

export async function POST() {
    cookies()
    const imageDetails = await db.images.findMany()
    return Response.json({imageDetails})
}