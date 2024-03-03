import { Button } from "@/components/ui/button"
import { AdminNav } from "../home/_components/adminNav"

const url = process.env.URL
const protocol = process.env.PROTOCOL


async function fetchImages(){
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
            {images.data.map((image: {
                id: number,
                title: string,
                description: string,
                image_url: string
            }, index: number) => (
                <div key={index}>
                    <h1>{image.title}</h1>
                    <h2>{image.description}</h2>
                </div>
            ))}
        </>
    );
}