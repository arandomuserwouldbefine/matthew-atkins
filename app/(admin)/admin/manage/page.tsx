import { Button } from "@/components/ui/button"
import { AdminNav } from "../home/_components/adminNav"
import { cookies } from "next/headers"

const url = process.env.URL
const protocol = process.env.PROTOCOL


async function fetchImages(){
    cookies()
    const request = await fetch(`${protocol}://${url}/api/images`,{
        method:"POST" 
    })
    return request.json()
}



export default async function ManageImages() {
    const images = await fetchImages();
    return (
        <>
            <AdminNav />
            <div className="p-5">
            {images.data.map((image: {
                id: number,
                title: string,
                description: string,
                image_url: string
            }, index: number) => (
                <div key={index} className="my-5 p-3 flex items-center justify-between border-2 border-gray-900">
                        <img src={image.image_url} height={50} width={50} />
                        <h1>{image.title}</h1>
                        <h2>{image.description}</h2>
                        <Button variant='destructive' size="sm">Delete</Button>
                </div>
            ))}
            </div>
        </>
    );
}