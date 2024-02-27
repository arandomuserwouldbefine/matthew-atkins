import { isAllowed } from "@/utils/isLoggedIn"

export default async function AdminHome (){
    await isAllowed()
    return(
        <h1>Home Page</h1>
    )
}