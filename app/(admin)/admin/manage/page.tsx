import { Button } from "@/components/ui/button"
import { AdminNav } from "../home/_components/adminNav"

const url = process.env.URL
const protocol = process.env.PROTOCOL

interface DeleteImageResponse {
    success: boolean; // Assuming the response contains a field indicating success
    message?: string; // Optional message field
    // Add other fields as needed
}


async function getImages(){
    const data = await fetch(`${protocol}://${url}/api/images`,{
        method: "POST"
    })
    const result = data.json()
    return result
}

async function DeleteImage(id: number): Promise<DeleteImageResponse>{
    const deleteRequest = await fetch(`${protocol}://${url}/api/images`,{
        method: "POST",
        body: JSON.stringify({
            id: id
        })
    })
    return deleteRequest.json()
}

export default async function ManageImages(){
    const images = await getImages()
    return(
        <>
        <AdminNav/>
        {images.data.map((image:{
            id: number,
            title: string,
            description: string,
            image_url: string
        }, index:number) => (
                <div key={index} className="p-3 m-7 border-solid border-2 border-gray-900 rounded-md shadow-lg flex items-center justify-between">
                    <img src={image.image_url} height={10} width={50} />
                    <h1 className="font-bold">{image.title}</h1>
                    <p className="font-semibold">{image.description}</p>
                    <Button variant="destructive">Delete</Button>
                </div>
            ))}
        </>
        )
}