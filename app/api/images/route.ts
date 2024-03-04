import { db } from "@/lib/db"
import { PrismaClient } from "@prisma/client"
import { cookies } from "next/headers"
export const dynamic = 'force-dynamic'
export async function GET() {
    cookies()
    const imageDetails = await db.images.findMany()
    return Response.json({imageDetails})
}