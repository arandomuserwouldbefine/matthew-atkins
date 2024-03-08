"use client"

import { useRouter } from "next/navigation";
import { useEdgeStore } from "@/lib/edgestore";
import { Button } from "@/components/ui/button";
import { useState } from "react";
export default function RemoveBtn({ id, image_url }: { id: string; image_url: string }) {
    const router = useRouter()

    const [isDisabled, setIsDisabled] = useState(false)
    const {edgestore} = useEdgeStore()
    const removeImage = async() =>{
        const confirmed = confirm("You sure ?")
        if(confirmed){
            setIsDisabled(true)
            const resp = await fetch("http://atkins.photos/api/images",{
                method: "DELETE",
                body: JSON.stringify({
                    id: id
                }),
                headers:{
                    "Content-Type":"application/json"
                }
            })
            if(resp.ok){
                await edgestore.publicFiles.delete({
                    url: image_url,
                  });
                  setIsDisabled(false)

                router.refresh()
            }
        }
    }
    return (
        <Button variant="destructive" size="sm" onClick={removeImage} disabled={isDisabled}>Delete</Button>
    );
}
