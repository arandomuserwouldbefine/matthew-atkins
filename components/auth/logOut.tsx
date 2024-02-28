import { Button } from "@/components/ui/button"
import { logOut } from "@/actions/logout"
import { startTransition } from "react"
import { redirect } from "next/navigation"

const onLogOut = ()=>{

    startTransition(()=>{
        logOut()
        .then((data)=>{
            console.log("Done logged out...")
            return redirect("/admin/login")
        })
    })
}
export const LogOutBtn = async()=>{
    return(
        <div>
            <Button variant="destructive" size="sm" onClick={onLogOut}>Log Out</Button>           
        </div>
    )
}