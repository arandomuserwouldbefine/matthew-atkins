"use server"

import { PrismaClient } from "@prisma/client"
import { db } from "@/lib/db"
import { useEdgeStore } from '@/lib/edgestore';

export const deleteImage = async (id: string,imageUrl: string) =>{
    const { edgestore } = useEdgeStore(); 
    console.log(`id: ${id}\nimageUrl : ${imageUrl}`)
    return "plk"
}
