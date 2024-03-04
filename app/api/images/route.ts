import { db } from "@/lib/db"
import { PrismaClient } from "@prisma/client"

export async function POST() {
    const imageDetails = await db.images.findMany()
    return Response.json({imageDetails})
}