import { Button } from "@/components/ui/button"
import { AdminNav } from "../home/_components/adminNav"

const url = process.env.URL
const protocol = process.env.PROTOCOL




async function getImages(){
    const data = await fetch(`${protocol}://${url}/api/images`,{
        method: "POST"
    })
    const result = data.json()
    return result
}



export default async function ManageImages(){
    const images = await getImages()
    return(
        <>
        <AdminNav/>
        hi
        </>
        )
}