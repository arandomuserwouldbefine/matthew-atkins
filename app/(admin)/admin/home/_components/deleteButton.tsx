"use client"
import { Button } from "@/components/ui/button"
import { startTransition } from "react"
import { redirect } from "next/navigation"
import Link from "next/link"
import { useEdgeStore } from "@/lib/edgestore"
import { PrismaClient } from "@prisma/client"
import { db } from "@/lib/db"

interface DeleteBtnProps {
    id: string;
    image_url: string;
}

export const DeleteBtn: React.FC<DeleteBtnProps> = ({ id, image_url }) => {
    const {edgestore} = useEdgeStore()
    return (
        <div>
            <Button variant="destructive" size="sm" onClick={async()=>{
                await edgestore.publicFiles.delete({
                    url: image_url,
                  });
                await db.images.delete({
                    where:{
                        id:id
                    }
                })
            }}>Delete</Button>
           
        </div>
    );
};