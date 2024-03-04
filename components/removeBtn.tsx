"use client"
import { deleteRecord } from "@/actions/deleteRecord";
import { useRouter } from "next/navigation";
import { useEdgeStore } from "@/lib/edgestore";
import { Button } from "@/components/ui/button";
export default function RemoveBtn({ id, image_url }: { id: string; image_url: string }) {
    const router = useRouter()
    const {edgestore} = useEdgeStore()
    const removeImage = async() =>{
        const confirmed = confirm("You sure ?")
        if(confirmed){
            const resp = await fetch("http://localhost:3000/api/images",{
                method: "DELETE",
                body: JSON.stringify({
                    id: id
                }),
                headers:{
                    "Content-Type":"application/json"
                }
            })
            if(resp.ok){
                router.refresh()
            }
        }
    }
    return (
        <Button variant="destructive" size="sm" onClick={removeImage}>hello</Button>
    );
}
