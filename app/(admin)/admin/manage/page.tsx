import { Button } from "@/components/ui/button"
import { AdminNav } from "../home/_components/adminNav"
import { cookies } from "next/headers"
import { db } from "@/lib/db"
import { PrismaClient } from "@prisma/client"
import Link from "next/link"
import RemoveBtn from "@/components/removeBtn"
const url = process.env.URL
const protocol = process.env.PROTOCOL

export const dynamic = 'force-dynamic'
async function fetchImages(){
    const allItems = await fetch(`${protocol}://${url}/api/images`, { cache: 'no-store' })
    const res = allItems.json()
    return res
}



export default async function ManageImages() {
    const images = await fetchImages();
    return (
        <>
            <div className="p-5">
            {images.imageDetails.length> 0?images.imageDetails.map((image: {
                id: string,
                title: string,
                description: string,
                image_url: string,
                datetime: Date
            }, index: number) => (
                <div key={index} className="my-5 p-3 flex items-center justify-between border-2 border-gray-900">
                        <img src={image.image_url} height={50} width={50} />
                        <h1>{image.title}</h1>
                        <h2>{image.description}</h2>
                        <RemoveBtn id={image.id} image_url={image.image_url}/>
                </div>
            )):
            
            <h1 className="font-bold text-center mt-8 text-3xl">No Images yet</h1>
            }
            </div>
        </>
    );
}