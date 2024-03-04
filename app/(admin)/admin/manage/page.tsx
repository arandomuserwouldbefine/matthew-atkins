import { Button } from "@/components/ui/button"
import { AdminNav } from "../home/_components/adminNav"
import { cookies } from "next/headers"
import { db } from "@/lib/db"
import { PrismaClient } from "@prisma/client"
import { DeleteBtn } from "../home/_components/deleteButton"
const url = process.env.URL
const protocol = process.env.PROTOCOL


async function fetchImages(){
    cookies()
    const allItems = await db.images.findMany()
    console.log(allItems.length)
    return allItems
}



export default async function ManageImages() {
    const images = await fetchImages();

    return (
        <>
            <div className="p-5">
                
            {images.length> 0?images.map((image: {
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
                        <DeleteBtn id={image.id} image_url={image.image_url} />

                </div>
            )):
            <h1 className="font-bold text-center mt-8 text-3xl">No Images yet</h1>
            }
            </div>
        </>
    );
}