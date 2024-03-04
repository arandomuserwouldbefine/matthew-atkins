import { Button } from "@/components/ui/button"
import { logOut } from "@/actions/logout"
import { startTransition } from "react"
import { redirect } from "next/navigation"
import Link from "next/link"

const onLogOut = ()=>{

    startTransition(()=>{
        logOut()
        .then((data)=>{
            console.log("Done logged out...")
        })
    })
}
export const DeleteBtn = async()=>{
    return(
        <div>
            <Button variant="destructive" size="sm" onClick={onLogOut}>Log Out</Button>           
        </div>
    )
}